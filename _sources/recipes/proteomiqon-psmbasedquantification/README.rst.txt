:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-psmbasedquantification'
.. highlight: bash

proteomiqon-psmbasedquantification
==================================

.. conda:recipe:: proteomiqon-psmbasedquantification
   :replaces_section_title:
   :noindex:

   The quantification tool was designed to allow label\-free quantification as well as quantification of full metabolic labeled samples.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/PSMBasedQuantification.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-psmbasedquantification <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-psmbasedquantification>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-psmbasedquantification/meta.yaml>`_

   Given an MS run in the mzLite or mzml format and a list of fdr controlled peptide spectrum matches\, this tool iterates accross all identified MS\/MS scans and groups them by
   the assigned peptide ion. The scan times of each MS\/MS spectrum are then weighted according to the quality of each match to build an reliable estimator for the scan time of
   the peptide ion in question. This scan time estimator\, combined with the monoisotopic m\/z\, is then used to extract an ion chromatogram. Using wavelet based peak detection 
   techniques we identify all peaks present in the XIC and select the most probable peak our target for quantification. Using parameter estimation techniques we subsequently 
   use peak fitting to fit a set of two gaussian models to the detected peak\, from whom the one with the better fit is selected. This allows us not only to report how well 
   the signal fitted to the theoretical expected peak shape but also to obtain accurate estimates for the peak area\, our estimator for peptide ion abundance.
   The quantification tool was designed to allow label\-free quantification as well as quantification of full metabolic labeled samples. For this we use the known identity 
   of one of the the peptide ions and calculate the m\/z of the unobserved differentially labeled counterpart to extract and quantify the corresponding XIC.



.. conda:package:: proteomiqon-psmbasedquantification

   |downloads_proteomiqon-psmbasedquantification| |docker_proteomiqon-psmbasedquantification|

   :versions:
      
      

      ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends on dotnet-runtime: ``5.0.*``
   :depends on openssl: ``1.1.*``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install proteomiqon-psmbasedquantification

to add into an existing workspace instead, run::

    pixi add proteomiqon-psmbasedquantification

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install proteomiqon-psmbasedquantification

Alternatively, to install into a new environment, run::

    conda create -n envname proteomiqon-psmbasedquantification

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/proteomiqon-psmbasedquantification:<tag>

(see `proteomiqon-psmbasedquantification/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_proteomiqon-psmbasedquantification| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-psmbasedquantification.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-psmbasedquantification
   :alt:   (downloads)
.. |docker_proteomiqon-psmbasedquantification| image:: https://quay.io/repository/biocontainers/proteomiqon-psmbasedquantification/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-psmbasedquantification
.. _`proteomiqon-psmbasedquantification/tags`: https://quay.io/repository/biocontainers/proteomiqon-psmbasedquantification?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-psmbasedquantification";
        var versions = ["0.0.9","0.0.8","0.0.7","0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-psmbasedquantification/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-psmbasedquantification/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-joinquantpepionswithproteins'
.. highlight: bash

proteomiqon-joinquantpepionswithproteins
========================================

.. conda:recipe:: proteomiqon-joinquantpepionswithproteins
   :replaces_section_title:
   :noindex:

   The tool JoinQuantPepIonsWithProteins combines results from ProteinInference and PSMBasedQuantification.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/JoinQuantPepIonsWithProteins.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-joinquantpepionswithproteins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-joinquantpepionswithproteins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-joinquantpepionswithproteins/meta.yaml>`_

   Results from PSMBasedQuantification contain detailed information about the quantification of every peptide\, but only basic informations about the protein they 
   originated from. This information is obtained during the ProteinInference. This tool takes the results from both tools and combines the quantification information 
   of each peptide with the more accurate information about the corresponding protein including its q\-value.



.. conda:package:: proteomiqon-joinquantpepionswithproteins

   |downloads_proteomiqon-joinquantpepionswithproteins| |docker_proteomiqon-joinquantpepionswithproteins|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
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

    pixi global install proteomiqon-joinquantpepionswithproteins

to add into an existing workspace instead, run::

    pixi add proteomiqon-joinquantpepionswithproteins

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install proteomiqon-joinquantpepionswithproteins

Alternatively, to install into a new environment, run::

    conda create -n envname proteomiqon-joinquantpepionswithproteins

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/proteomiqon-joinquantpepionswithproteins:<tag>

(see `proteomiqon-joinquantpepionswithproteins/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_proteomiqon-joinquantpepionswithproteins| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-joinquantpepionswithproteins.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-joinquantpepionswithproteins
   :alt:   (downloads)
.. |docker_proteomiqon-joinquantpepionswithproteins| image:: https://quay.io/repository/biocontainers/proteomiqon-joinquantpepionswithproteins/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-joinquantpepionswithproteins
.. _`proteomiqon-joinquantpepionswithproteins/tags`: https://quay.io/repository/biocontainers/proteomiqon-joinquantpepionswithproteins?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-joinquantpepionswithproteins";
        var versions = ["0.0.2","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-joinquantpepionswithproteins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-joinquantpepionswithproteins/README.html
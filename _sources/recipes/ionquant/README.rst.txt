:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ionquant'
.. highlight: bash

ionquant
========

.. conda:recipe:: ionquant
   :replaces_section_title:
   :noindex:

   A label free quantification tool

   :homepage: https://github.com/Nesvilab/IonQuant
   :license: Academic License
   :recipe: /`ionquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ionquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ionquant/meta.yaml>`_
   :links: biotools: :biotools:`fragpipe`, doi: :doi:`10.1074/mcp.TIR120.002048`

   IonQuant is a fast and comprehensive tool for MS1 precursor intensity\-based quantification for timsTOF PASEF DDA and non\-timsTOF \(e.g.\, Orbitrap\) data.
   It enables label\-free quantification with false discovery \(FDR\) controlled match\-between\-runs \(MBR\).
   It can also be used for quantification in labelling\-based experiments such as those involving SILAC\, dimethyl\, or similar labelling strategies.

   IonQuant is available freely for academic research and educational purposes only\, in accordance with the terms at https\:\/\/msfragger.arsci.com\/upgrader\/LICENSE\-ACADEMIC.pdf.



.. conda:package:: ionquant

   |downloads_ionquant| |docker_ionquant|

   :versions:
      
      

      ``1.11.9-0``,  ``1.10.27-0``,  ``1.10.12-1``,  ``1.10.12-0``

      

   
   :depends on openjdk: ``>=11``
   :depends on python: ``3.11.*``

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

    pixi global install ionquant

to add into an existing workspace instead, run::

    pixi add ionquant

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ionquant

Alternatively, to install into a new environment, run::

    conda create -n envname ionquant

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ionquant:<tag>

(see `ionquant/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ionquant| image:: https://img.shields.io/conda/dn/bioconda/ionquant.svg?style=flat
   :target: https://anaconda.org/bioconda/ionquant
   :alt:   (downloads)
.. |docker_ionquant| image:: https://quay.io/repository/biocontainers/ionquant/status
   :target: https://quay.io/repository/biocontainers/ionquant
.. _`ionquant/tags`: https://quay.io/repository/biocontainers/ionquant?tab=tags


.. raw:: html

    <script>
        var package = "ionquant";
        var versions = ["1.11.9","1.10.27","1.10.12","1.10.12"];
    </script>





Notes
-----
The \"ionquant\" command runs the IonQuant java program.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ionquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ionquant/README.html
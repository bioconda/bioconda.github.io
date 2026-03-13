:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mutsigextractor'
.. highlight: bash

r-mutsigextractor
=================

.. conda:recipe:: r-mutsigextractor
   :replaces_section_title:
   :noindex:

   Extract mutational signatures from VCF files

   :homepage: https://github.com/UMCUGenetics/mutSigExtractor
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-mutsigextractor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mutsigextractor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mutsigextractor/meta.yaml>`_

   


.. conda:package:: r-mutsigextractor

   |downloads_r-mutsigextractor| |docker_r-mutsigextractor|

   :versions:
      
      

      ``1.29-2``,  ``1.29-1``,  ``1.29-0``,  ``1.28-0``,  ``1.14-0``

      

   
   :depends on bioconductor-bsgenome: 
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: 
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg38: 
   :depends on bioconductor-genomeinfodb: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install r-mutsigextractor

to add into an existing workspace instead, run::

    pixi add r-mutsigextractor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-mutsigextractor

Alternatively, to install into a new environment, run::

    conda create -n envname r-mutsigextractor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-mutsigextractor:<tag>

(see `r-mutsigextractor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-mutsigextractor| image:: https://img.shields.io/conda/dn/bioconda/r-mutsigextractor.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mutsigextractor
   :alt:   (downloads)
.. |docker_r-mutsigextractor| image:: https://quay.io/repository/biocontainers/r-mutsigextractor/status
   :target: https://quay.io/repository/biocontainers/r-mutsigextractor
.. _`r-mutsigextractor/tags`: https://quay.io/repository/biocontainers/r-mutsigextractor?tab=tags


.. raw:: html

    <script>
        var package = "r-mutsigextractor";
        var versions = ["1.29","1.29","1.29","1.28","1.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mutsigextractor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mutsigextractor/README.html
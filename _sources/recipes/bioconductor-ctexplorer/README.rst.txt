:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctexplorer'
.. highlight: bash

bioconductor-ctexplorer
=======================

.. conda:recipe:: bioconductor-ctexplorer
   :replaces_section_title:
   :noindex:

   Explores Cancer Testis Genes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CTexploreR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ctexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctexplorer/meta.yaml>`_

   The CTexploreR package re\-defines the list of Cancer Testis\/Germline \(CT\) genes. It is based on publicly available RNAseq databases \(GTEx\, CCLE and TCGA\) and summarises CT genes\' main characteristics. Several visualisation functions allow to explore their expression in different types of tissues and cancer cells\, or to inspect the methylation status of their promoters in normal tissues.


.. conda:package:: bioconductor-ctexplorer

   |downloads_bioconductor-ctexplorer| |docker_bioconductor-ctexplorer|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-ctdata: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-rlang: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-ctexplorer

to add into an existing workspace instead, run::

    pixi add bioconductor-ctexplorer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ctexplorer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ctexplorer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ctexplorer:<tag>

(see `bioconductor-ctexplorer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ctexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctexplorer
   :alt:   (downloads)
.. |docker_bioconductor-ctexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-ctexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctexplorer
.. _`bioconductor-ctexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-ctexplorer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ctexplorer";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctexplorer/README.html
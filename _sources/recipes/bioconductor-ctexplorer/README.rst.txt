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
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-ctdata: ``>=1.6.0,<1.7.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-ctexplorer

   and update with::

      mamba update bioconductor-ctexplorer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ctexplorer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ctexplorer:<tag>

   (see `bioconductor-ctexplorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ctexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctexplorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctexplorer
   :alt:   (downloads)
.. |docker_bioconductor-ctexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-ctexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctexplorer
.. _`bioconductor-ctexplorer/tags`: https://quay.io/repository/biocontainers/bioconductor-ctexplorer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ctexplorer";
        var versions = ["1.2.0"];
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
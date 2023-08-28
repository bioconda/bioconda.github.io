:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-poma'
.. highlight: bash

bioconductor-poma
=================

.. conda:recipe:: bioconductor-poma
   :replaces_section_title:
   :noindex:

   Tools for Omics Data Analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/POMA.html
   :license: GPL-3
   :recipe: /`bioconductor-poma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-poma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-poma/meta.yaml>`_

   A reproducible and easy\-to\-use toolkit for visualization\, pre\-processing\, exploration\, and statistical analysis of omics datasets. The main aim of POMA is to enable a flexible data cleaning and statistical analysis processes in one comprehensible and user\-friendly R package. This package has a Shiny app version called POMAShiny that implements all POMA functions. See https\:\/\/github.com\/pcastellanoescuder\/POMAShiny. See Castellano\-Escuder P\, González\-Domínguez R\, Carmona\-Pontaque F\, et al. \(2021\) \<doi\:10.1371\/journal.pcbi.1009148\> for more details.


.. conda:package:: bioconductor-poma

   |downloads_bioconductor-poma| |docker_bioconductor-poma|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-impute: ``>=1.74.0,<1.75.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-mixomics: ``>=6.24.0,<6.25.0``
   :depends bioconductor-rankprod: ``>=3.26.0,<3.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-broom: 
   :depends r-caret: 
   :depends r-dbscan: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-glasso: ``>=1.11``
   :depends r-glmnet: 
   :depends r-magrittr: 
   :depends r-randomforest: 
   :depends r-rmarkdown: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-uwot: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-poma

   and update with::

      mamba update bioconductor-poma

  To create a new environment, run::

      mamba create --name myenvname bioconductor-poma

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-poma:<tag>

   (see `bioconductor-poma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-poma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-poma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-poma
   :alt:   (downloads)
.. |docker_bioconductor-poma| image:: https://quay.io/repository/biocontainers/bioconductor-poma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-poma
.. _`bioconductor-poma/tags`: https://quay.io/repository/biocontainers/bioconductor-poma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-poma";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-poma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-poma/README.html
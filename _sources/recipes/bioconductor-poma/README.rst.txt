:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-poma'
.. highlight: bash

bioconductor-poma
=================

.. conda:recipe:: bioconductor-poma
   :replaces_section_title:
   :noindex:

   Tools for Omics Data Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/POMA.html
   :license: GPL-3
   :recipe: /`bioconductor-poma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-poma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-poma/meta.yaml>`_

   The POMA package offers a comprehensive toolkit designed for omics data analysis\, streamlining the process from initial visualization to final statistical analysis. Its primary goal is to simplify and unify the various steps involved in omics data processing\, making it more accessible and manageable within a single\, intuitive R package. Emphasizing on reproducibility and user\-friendliness\, POMA leverages the standardized SummarizedExperiment class from Bioconductor\, ensuring seamless integration and compatibility with a wide array of Bioconductor tools. This approach guarantees maximum flexibility and replicability\, making POMA an essential asset for researchers handling omics datasets. See https\:\/\/github.com\/pcastellanoescuder\/POMAShiny. Paper\: Castellano\-Escuder et al. \(2021\) \<doi\:10.1371\/journal.pcbi.1009148\> for more details.


.. conda:package:: bioconductor-poma

   |downloads_bioconductor-poma| |docker_bioconductor-poma|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-fgsea: ``>=1.32.0,<1.33.0``
   :depends bioconductor-impute: ``>=1.80.0,<1.81.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-mixomics: ``>=6.30.0,<6.31.0``
   :depends bioconductor-rankprod: ``>=3.32.0,<3.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-sva: ``>=3.54.0,<3.55.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-broom: 
   :depends r-caret: 
   :depends r-dbscan: 
   :depends r-dplyr: 
   :depends r-fsa: 
   :depends r-ggcorrplot: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-glmnet: 
   :depends r-janitor: 
   :depends r-lme4: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-msigdbr: 
   :depends r-multcomp: 
   :depends r-purrr: 
   :depends r-randomforest: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-uwot: 
   :depends r-vegan: 
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
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
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
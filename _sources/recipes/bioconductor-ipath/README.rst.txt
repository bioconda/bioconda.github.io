:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ipath'
.. highlight: bash

bioconductor-ipath
==================

.. conda:recipe:: bioconductor-ipath
   :replaces_section_title:
   :noindex:

   iPath pipeline for detecting perturbed pathways at individual level

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/iPath.html
   :license: GPL-2
   :recipe: /`bioconductor-ipath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipath/meta.yaml>`_

   iPath is the Bioconductor package used for calculating personalized pathway score and test the association with survival outcomes. Abundant single\-gene biomarkers have been identified and used in the clinics. However\, hundreds of oncogenes or tumor\-suppressor genes are involved during the process of tumorigenesis. We believe individual\-level expression patterns of pre\-defined pathways or gene sets are better biomarkers than single genes. In this study\, we devised a computational method named iPath to identify prognostic biomarker pathways\, one sample at a time. To test its utility\, we conducted a pan\-cancer analysis across 14 cancer types from The Cancer Genome Atlas and demonstrated that iPath is capable of identifying highly predictive biomarkers for clinical outcomes\, including overall survival\, tumor subtypes\, and tumor stage classifications. We found that pathway\-based biomarkers are more robust and effective than single genes.


.. conda:package:: bioconductor-ipath

   |downloads_bioconductor-ipath| |docker_bioconductor-ipath|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-matrixstats: 
   :depends r-mclust: 
   :depends r-rcpp: ``>=1.0.5``
   :depends r-rcpparmadillo: 
   :depends r-survival: 
   :depends r-survminer: 
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

      mamba install bioconductor-ipath

   and update with::

      mamba update bioconductor-ipath

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ipath

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ipath:<tag>

   (see `bioconductor-ipath/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ipath| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ipath.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ipath
   :alt:   (downloads)
.. |docker_bioconductor-ipath| image:: https://quay.io/repository/biocontainers/bioconductor-ipath/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ipath
.. _`bioconductor-ipath/tags`: https://quay.io/repository/biocontainers/bioconductor-ipath?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ipath";
        var versions = ["1.12.0","1.8.0","1.6.1","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ipath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ipath/README.html
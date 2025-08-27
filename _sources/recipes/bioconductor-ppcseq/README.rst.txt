:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ppcseq'
.. highlight: bash

bioconductor-ppcseq
===================

.. conda:recipe:: bioconductor-ppcseq
   :replaces_section_title:
   :noindex:

   Probabilistic Outlier Identification for RNA Sequencing Generalized Linear Models

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ppcseq.html
   :license: GPL-3
   :recipe: /`bioconductor-ppcseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppcseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppcseq/meta.yaml>`_

   Relative transcript abundance has proven to be a valuable tool for understanding the function of genes in biological systems. For the differential analysis of transcript abundance using RNA sequencing data\, the negative binomial model is by far the most frequently adopted. However\, common methods that are based on a negative binomial model are not robust to extreme outliers\, which we found to be abundant in public datasets. So far\, no rigorous and probabilistic methods for detection of outliers have been developed for RNA sequencing data\, leaving the identification mostly to visual inspection. Recent advances in Bayesian computation allow large\-scale comparison of observed data against its theoretical distribution given in a statistical model. Here we propose ppcseq\, a key quality\-control tool for identifying transcripts that include outlier data points in differential expression analysis\, which do not follow a negative binomial distribution. Applying ppcseq to analyse several publicly available datasets using popular tools\, we show that from 3 to 10 percent of differentially abundant transcripts across algorithms and datasets had statistics inflated by the presence of outliers.


.. conda:package:: bioconductor-ppcseq

   |downloads_bioconductor-ppcseq| |docker_bioconductor-ppcseq|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-benchmarkme: 
   :depends r-bh: ``>=1.66.0``
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-lifecycle: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-rcpp: ``>=0.12.0``
   :depends r-rcppeigen: ``>=0.3.3.3.0``
   :depends r-rcppparallel: ``>=5.0.1``
   :depends r-rlang: 
   :depends r-rstan: ``>=2.18.1``
   :depends r-rstantools: ``>=2.1.1``
   :depends r-stanheaders: ``>=2.18.0``
   :depends r-tibble: 
   :depends r-tidybayes: 
   :depends r-tidyr: ``>=0.8.3.9000``
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

      mamba install bioconductor-ppcseq

   and update with::

      mamba update bioconductor-ppcseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ppcseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ppcseq:<tag>

   (see `bioconductor-ppcseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ppcseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ppcseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ppcseq
   :alt:   (downloads)
.. |docker_bioconductor-ppcseq| image:: https://quay.io/repository/biocontainers/bioconductor-ppcseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ppcseq
.. _`bioconductor-ppcseq/tags`: https://quay.io/repository/biocontainers/bioconductor-ppcseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ppcseq";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ppcseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ppcseq/README.html
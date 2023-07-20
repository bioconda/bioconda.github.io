:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ppcseq'
.. highlight: bash

bioconductor-ppcseq
===================

.. conda:recipe:: bioconductor-ppcseq
   :replaces_section_title:
   :noindex:

   Probabilistic Outlier Identification for RNA Sequencing Generalized Linear Models

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ppcseq.html
   :license: GPL-3
   :recipe: /`bioconductor-ppcseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppcseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppcseq/meta.yaml>`_

   Relative transcript abundance has proven to be a valuable tool for understanding the function of genes in biological systems. For the differential analysis of transcript abundance using RNA sequencing data\, the negative binomial model is by far the most frequently adopted. However\, common methods that are based on a negative binomial model are not robust to extreme outliers\, which we found to be abundant in public datasets. So far\, no rigorous and probabilistic methods for detection of outliers have been developed for RNA sequencing data\, leaving the identification mostly to visual inspection. Recent advances in Bayesian computation allow large\-scale comparison of observed data against its theoretical distribution given in a statistical model. Here we propose ppcseq\, a key quality\-control tool for identifying transcripts that include outlier data points in differential expression analysis\, which do not follow a negative binomial distribution. Applying ppcseq to analyse several publicly available datasets using popular tools\, we show that from 3 to 10 percent of differentially abundant transcripts across algorithms and datasets had statistics inflated by the presence of outliers.


.. conda:package:: bioconductor-ppcseq

   |downloads_bioconductor-ppcseq| |docker_bioconductor-ppcseq|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-benchmarkme: 
   :depends r-bh: ``>=1.66.0``
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-furrr: 
   :depends r-future: ``<1.33``
   :depends r-ggplot2: 
   :depends r-lifecycle: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-rcpp: ``>=0.12.0``
   :depends r-rcppeigen: ``>=0.3.3.3.0``
   :depends r-rlang: 
   :depends r-rstan: ``>=2.18.1``
   :depends r-rstantools: ``>=2.0.0``
   :depends r-stanheaders: ``>=2.18.0``
   :depends r-tibble: 
   :depends r-tidybayes: 
   :depends r-tidyr: ``>=0.8.3.9000``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ppcseq

   and update with::

      conda update bioconductor-ppcseq

   or use the docker container::

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
        var versions = ["1.8.0","1.6.0","1.6.0","1.2.0","1.2.0"];
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
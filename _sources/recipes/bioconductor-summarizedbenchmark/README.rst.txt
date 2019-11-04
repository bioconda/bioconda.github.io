:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-summarizedbenchmark'
.. highlight: bash

bioconductor-summarizedbenchmark
================================

.. conda:recipe:: bioconductor-summarizedbenchmark
   :replaces_section_title:

   This package defines the BenchDesign and SummarizedBenchmark classes for building\, executing\, and evaluating benchmark experiments of computational methods. The SummarizedBenchmark class extends the RangedSummarizedExperiment object\, and is designed to provide infrastructure to store and compare the results of applying different methods to a shared data set. This class provides an integrated interface to store metadata such as method parameters and software versions as well as ground truths \(when these are available\) and evaluation metrics.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/SummarizedBenchmark.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-summarizedbenchmark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summarizedbenchmark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summarizedbenchmark/meta.yaml>`_

   


.. conda:package:: bioconductor-summarizedbenchmark

   |downloads_bioconductor-summarizedbenchmark| |docker_bioconductor-summarizedbenchmark|

   :versions: 2.4.0-0, 2.2.2-0, 2.0.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-crayon: 
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-mclust: 
   :depends r-rlang: 
   :depends r-sessioninfo: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-upsetr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-summarizedbenchmark

   and update with::

      conda update bioconductor-summarizedbenchmark

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-summarizedbenchmark:<tag>

   (see `bioconductor-summarizedbenchmark/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-summarizedbenchmark| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-summarizedbenchmark.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-summarizedbenchmark
   :alt:   (downloads)
.. |docker_bioconductor-summarizedbenchmark| image:: https://quay.io/repository/biocontainers/bioconductor-summarizedbenchmark/status
   :target: https://quay.io/repository/biocontainers/bioconductor-summarizedbenchmark
.. _`bioconductor-summarizedbenchmark/tags`: https://quay.io/repository/biocontainers/bioconductor-summarizedbenchmark?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-summarizedbenchmark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-summarizedbenchmark/README.html
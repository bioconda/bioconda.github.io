.. title:: Package Recipe 'bioconductor-summarizedbenchmark'
.. highlight: bash


bioconductor-summarizedbenchmark
================================

.. conda:recipe:: bioconductor-summarizedbenchmark
   :replaces_section_title:

   This package defines the BenchDesign and SummarizedBenchmark classes for building\, executing\, and evaluating benchmark experiments of computational methods. The SummarizedBenchmark class extends the RangedSummarizedExperiment object\, and is designed to provide infrastructure to store and compare the results of applying different methods to a shared data set. This class provides an integrated interface to store metadata such as method parameters and software versions as well as ground truths \(when these are available\) and evaluation metrics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SummarizedBenchmark.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-summarizedbenchmark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summarizedbenchmark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summarizedbenchmark/meta.yaml>`_

   


.. conda:package:: bioconductor-summarizedbenchmark

   |downloads_bioconductor-summarizedbenchmark| |docker_bioconductor-summarizedbenchmark|

   :versions: 2.0.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-crayon`  :conda:package:`r-digest`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-mclust`  :conda:package:`r-rlang`  :conda:package:`r-sessioninfo`  :conda:package:`r-stringr`  :conda:package:`r-tibble`  :conda:package:`r-tidyr`  :conda:package:`r-upsetr`  

   :required~by: |required_by_bioconductor-summarizedbenchmark|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-summarizedbenchmark

   and update with::

      conda update bioconductor-summarizedbenchmark

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-summarizedbenchmark


.. |required_by_bioconductor-summarizedbenchmark| conda:required_by:: bioconductor-summarizedbenchmark
.. |downloads_bioconductor-summarizedbenchmark| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-summarizedbenchmark.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-summarizedbenchmark| image:: https://quay.io/repository/biocontainers/bioconductor-summarizedbenchmark/status
   :target: https://quay.io/repository/biocontainers/bioconductor-summarizedbenchmark







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-summarizedbenchmark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-summarizedbenchmark/README.html


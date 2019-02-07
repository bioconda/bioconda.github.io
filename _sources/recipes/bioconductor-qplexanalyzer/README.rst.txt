.. title:: Package Recipe 'bioconductor-qplexanalyzer'
.. highlight: bash


bioconductor-qplexanalyzer
==========================

.. conda:recipe:: bioconductor-qplexanalyzer
   :replaces_section_title:

   Tools for quantitative proteomics data analysis generated from qPLEX\-RIME method.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/qPLEXanalyzer.html
   :license: GPL-2
   :recipe: /`bioconductor-qplexanalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qplexanalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qplexanalyzer/meta.yaml>`_

   


.. conda:package:: bioconductor-qplexanalyzer

   |downloads_bioconductor-qplexanalyzer| |docker_bioconductor-qplexanalyzer|

   :versions: 1.0.3

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-msnbase` >=2.8.0,<2.9.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`r-assertthat`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-ggdendro`  :conda:package:`r-ggplot2`  :conda:package:`r-magrittr`  :conda:package:`r-purrr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-statmod`  :conda:package:`r-stringr`  :conda:package:`r-tibble`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-qplexanalyzer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qplexanalyzer

   and update with::

      conda update bioconductor-qplexanalyzer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-qplexanalyzer


.. |required_by_bioconductor-qplexanalyzer| conda:required_by:: bioconductor-qplexanalyzer
.. |downloads_bioconductor-qplexanalyzer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qplexanalyzer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-qplexanalyzer| image:: https://quay.io/repository/biocontainers/bioconductor-qplexanalyzer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qplexanalyzer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qplexanalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qplexanalyzer/README.html


.. title:: Package Recipe 'bioconductor-anota2seq'
.. highlight: bash


bioconductor-anota2seq
======================

.. conda:recipe:: bioconductor-anota2seq
   :replaces_section_title:

   anota2seq provides analysis of translational efficiency and differential expression analysis for polysome\-profiling and ribosome\-profiling studies \(two or more sample classes\) quantified by RNA sequencing or DNA\-microarray. Polysome\-profiling and ribosome\-profiling typically generate data for two RNA sources\; translated mRNA and total mRNA. Analysis of differential expression is used to estimate changes within each RNA source \(i.e. translated mRNA or total mRNA\). Analysis of translational efficiency aims to identify changes in translation efficiency leading to altered protein levels that are independent of total mRNA levels \(i.e. changes in translated mRNA that are independent of levels of total mRNA\) or buffering\, a mechanism regulating translational efficiency so that protein levels remain constant despite fluctuating total mRNA levels \(i.e. changes in total mRNA that are independent of levels of translated mRNA\). anota2seq applies analysis of partial variance and the random variance model to fulfill these tasks.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/anota2seq.html
   :license: GPL-3
   :recipe: /`bioconductor-anota2seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anota2seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anota2seq/meta.yaml>`_

   


.. conda:package:: bioconductor-anota2seq

   |downloads_bioconductor-anota2seq| |docker_bioconductor-anota2seq|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-multtest` >=2.38.0,<2.39.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-anota2seq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-anota2seq

   and update with::

      conda update bioconductor-anota2seq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-anota2seq


.. |required_by_bioconductor-anota2seq| conda:required_by:: bioconductor-anota2seq
.. |downloads_bioconductor-anota2seq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anota2seq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-anota2seq| image:: https://quay.io/repository/biocontainers/bioconductor-anota2seq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anota2seq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anota2seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anota2seq/README.html


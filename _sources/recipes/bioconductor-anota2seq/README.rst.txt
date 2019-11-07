:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anota2seq'
.. highlight: bash

bioconductor-anota2seq
======================

.. conda:recipe:: bioconductor-anota2seq
   :replaces_section_title:

   Generally applicable transcriptome\-wide analysis of translational efficiency using anota2seq

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/anota2seq.html
   :license: GPL-3
   :recipe: /`bioconductor-anota2seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anota2seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anota2seq/meta.yaml>`_

   anota2seq provides analysis of translational efficiency and differential expression analysis for polysome\-profiling and ribosome\-profiling studies \(two or more sample classes\) quantified by RNA sequencing or DNA\-microarray. Polysome\-profiling and ribosome\-profiling typically generate data for two RNA sources\; translated mRNA and total mRNA. Analysis of differential expression is used to estimate changes within each RNA source \(i.e. translated mRNA or total mRNA\). Analysis of translational efficiency aims to identify changes in translation efficiency leading to altered protein levels that are independent of total mRNA levels \(i.e. changes in translated mRNA that are independent of levels of total mRNA\) or buffering\, a mechanism regulating translational efficiency so that protein levels remain constant despite fluctuating total mRNA levels \(i.e. changes in total mRNA that are independent of levels of translated mRNA\). anota2seq applies analysis of partial variance and the random variance model to fulfill these tasks.


.. conda:package:: bioconductor-anota2seq

   |downloads_bioconductor-anota2seq| |docker_bioconductor-anota2seq|

   :versions: 1.8.0-0, 1.6.0-1, 1.4.0-0
   
   :depends bioconductor-deseq2: >=1.26.0,<1.27.0
   :depends bioconductor-edger: >=3.28.0,<3.29.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-multtest: >=2.42.0,<2.43.0
   :depends bioconductor-qvalue: >=2.18.0,<2.19.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-anota2seq

   and update with::

      conda update bioconductor-anota2seq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anota2seq:<tag>

   (see `bioconductor-anota2seq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anota2seq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anota2seq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anota2seq
   :alt:   (downloads)
.. |docker_bioconductor-anota2seq| image:: https://quay.io/repository/biocontainers/bioconductor-anota2seq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anota2seq
.. _`bioconductor-anota2seq/tags`: https://quay.io/repository/biocontainers/bioconductor-anota2seq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anota2seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anota2seq/README.html
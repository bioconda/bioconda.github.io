:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaseqsamplesize'
.. highlight: bash

bioconductor-rnaseqsamplesize
=============================

.. conda:recipe:: bioconductor-rnaseqsamplesize
   :replaces_section_title:

   RnaSeqSampleSize package provides a sample size calculation method based on negative binomial model and the exact test for assessing differential expression analysis of RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/RnaSeqSampleSize.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rnaseqsamplesize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqsamplesize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqsamplesize/meta.yaml>`_

   


.. conda:package:: bioconductor-rnaseqsamplesize

   |downloads_bioconductor-rnaseqsamplesize| |docker_bioconductor-rnaseqsamplesize|

   :versions: 1.17.0-0, 1.16.0-1, 1.14.0-0, 1.12.0-2
   
   :depends bioconductor-biomart: >=2.42.0,<2.43.0
   :depends bioconductor-edger: >=3.28.0,<3.29.0
   :depends bioconductor-keggrest: >=1.26.0,<1.27.0
   :depends bioconductor-rnaseqsamplesizedata: >=1.17.0,<1.18.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-heatmap3: 
   :depends r-matlab: 
   :depends r-rcpp: >=0.11.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnaseqsamplesize

   and update with::

      conda update bioconductor-rnaseqsamplesize

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnaseqsamplesize:<tag>

   (see `bioconductor-rnaseqsamplesize/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnaseqsamplesize| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaseqsamplesize.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnaseqsamplesize
   :alt:   (downloads)
.. |docker_bioconductor-rnaseqsamplesize| image:: https://quay.io/repository/biocontainers/bioconductor-rnaseqsamplesize/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaseqsamplesize
.. _`bioconductor-rnaseqsamplesize/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaseqsamplesize?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaseqsamplesize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaseqsamplesize/README.html
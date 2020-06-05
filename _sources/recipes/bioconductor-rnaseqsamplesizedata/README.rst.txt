:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaseqsamplesizedata'
.. highlight: bash

bioconductor-rnaseqsamplesizedata
=================================

.. conda:recipe:: bioconductor-rnaseqsamplesizedata
   :replaces_section_title:
   :noindex:

   RnaSeqSampleSizeData

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/RnaSeqSampleSizeData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rnaseqsamplesizedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqsamplesizedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqsamplesizedata/meta.yaml>`_

   RnaSeqSampleSizeData package provides the read counts and dispersion distribution from real RNA\-seq experiments. It can be used by RnaSeqSampleSize package to estimate sample size and power for RNA\-seq experiment design.


.. conda:package:: bioconductor-rnaseqsamplesizedata

   |downloads_bioconductor-rnaseqsamplesizedata| |docker_bioconductor-rnaseqsamplesizedata|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``

      

   
   :depends bioconductor-edger: ``>=3.30.0,<3.31.0``
   :depends curl: ``>=7.69.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnaseqsamplesizedata

   and update with::

      conda update bioconductor-rnaseqsamplesizedata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnaseqsamplesizedata:<tag>

   (see `bioconductor-rnaseqsamplesizedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnaseqsamplesizedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaseqsamplesizedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnaseqsamplesizedata
   :alt:   (downloads)
.. |docker_bioconductor-rnaseqsamplesizedata| image:: https://quay.io/repository/biocontainers/bioconductor-rnaseqsamplesizedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaseqsamplesizedata
.. _`bioconductor-rnaseqsamplesizedata/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaseqsamplesizedata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaseqsamplesizedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaseqsamplesizedata/README.html
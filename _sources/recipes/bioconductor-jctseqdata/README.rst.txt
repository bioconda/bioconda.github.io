:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-jctseqdata'
.. highlight: bash

bioconductor-jctseqdata
=======================

.. conda:recipe:: bioconductor-jctseqdata
   :replaces_section_title:

   Junction count data from an example dataset taken from a subset of the RNA\-seq reads from six samples. Data was subsampled and modified to provide edge cases for testing and to reduce file sizes.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/JctSeqData.html
   :license: file LICENSE
   :recipe: /`bioconductor-jctseqdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jctseqdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jctseqdata/meta.yaml>`_

   


.. conda:package:: bioconductor-jctseqdata

   |downloads_bioconductor-jctseqdata| |docker_bioconductor-jctseqdata|

   :versions: 1.12.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-jctseqdata

   and update with::

      conda update bioconductor-jctseqdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-jctseqdata:<tag>

   (see `bioconductor-jctseqdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-jctseqdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jctseqdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-jctseqdata
   :alt:   (downloads)
.. |docker_bioconductor-jctseqdata| image:: https://quay.io/repository/biocontainers/bioconductor-jctseqdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jctseqdata
.. _`bioconductor-jctseqdata/tags`: https://quay.io/repository/biocontainers/bioconductor-jctseqdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jctseqdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jctseqdata/README.html
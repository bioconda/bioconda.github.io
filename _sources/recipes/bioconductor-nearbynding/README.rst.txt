:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nearbynding'
.. highlight: bash

bioconductor-nearbynding
========================

.. conda:recipe:: bioconductor-nearbynding
   :replaces_section_title:
   :noindex:

   Discern RNA structure proximal to protein binding

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/nearBynding.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-nearbynding <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nearbynding>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nearbynding/meta.yaml>`_

   Provides a pipeline to discern RNA structure at and proximal to the site of protein binding within regions of the transcriptome defined by the user. CLIP protein\-binding data can be input as either aligned BAM or peak\-called bedGraph files. RNA structure can either be predicted internally from sequence or users have the option to input their own RNA structure data. RNA structure binding profiles can be visually and quantitatively compared across multiple formats.


.. conda:package:: bioconductor-nearbynding

   |downloads_bioconductor-nearbynding| |docker_bioconductor-nearbynding|

   :versions:
      
      

      ``1.0.0-1``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-plyranges: ``>=1.10.0,<1.11.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.10.0,<3.11.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-r.utils: 
   :depends r-rlang: 
   :depends r-transport: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nearbynding

   and update with::

      conda update bioconductor-nearbynding

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nearbynding:<tag>

   (see `bioconductor-nearbynding/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nearbynding| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nearbynding.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nearbynding
   :alt:   (downloads)
.. |docker_bioconductor-nearbynding| image:: https://quay.io/repository/biocontainers/bioconductor-nearbynding/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nearbynding
.. _`bioconductor-nearbynding/tags`: https://quay.io/repository/biocontainers/bioconductor-nearbynding?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nearbynding/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nearbynding/README.html
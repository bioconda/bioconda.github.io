:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ucsc.hg17.masked'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ucsc.hg17.masked
===============================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ucsc.hg17.masked
   :replaces_section_title:
   :noindex:

   Full masked genome sequences for Homo sapiens \(UCSC version hg17\)

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/BSgenome.Hsapiens.UCSC.hg17.masked.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ucsc.hg17.masked <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg17.masked>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg17.masked/meta.yaml>`_

   Full genome sequences for Homo sapiens \(Human\) as provided by UCSC \(hg17\, May 2004\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Hsapiens.UCSC.hg17\, except that each of them has the 4 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, \(2\) the mask of intra\-contig ambiguities \(AMB mask\)\, \(3\) the mask of repeats from RepeatMasker \(RM mask\)\, and \(4\) the mask of repeats from Tandem Repeats Finder \(TRF mask\). Only the AGAPS and AMB masks are \"active\" by default.


.. conda:package:: bioconductor-bsgenome.hsapiens.ucsc.hg17.masked

   |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg17.masked| |docker_bioconductor-bsgenome.hsapiens.ucsc.hg17.masked|

   :versions:
      
      

      ``1.3.99-7``,  ``1.3.99-6``,  ``1.3.99-5``,  ``1.3.99-4``,  ``1.3.99-3``,  ``1.3.99-2``,  ``1.3.99-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.60.0,<1.61.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg17: ``>=1.3.0,<1.4.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.hsapiens.ucsc.hg17.masked

   and update with::

      conda update bioconductor-bsgenome.hsapiens.ucsc.hg17.masked

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg17.masked:<tag>

   (see `bioconductor-bsgenome.hsapiens.ucsc.hg17.masked/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg17.masked| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg17.masked.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg17.masked
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ucsc.hg17.masked| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg17.masked/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg17.masked
.. _`bioconductor-bsgenome.hsapiens.ucsc.hg17.masked/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg17.masked?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg17.masked/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg17.masked/README.html
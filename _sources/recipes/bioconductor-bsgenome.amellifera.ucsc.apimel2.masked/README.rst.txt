:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.amellifera.ucsc.apimel2.masked'
.. highlight: bash

bioconductor-bsgenome.amellifera.ucsc.apimel2.masked
====================================================

.. conda:recipe:: bioconductor-bsgenome.amellifera.ucsc.apimel2.masked
   :replaces_section_title:
   :noindex:

   Full masked genome sequences for Apis mellifera \(UCSC version apiMel2\)

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/BSgenome.Amellifera.UCSC.apiMel2.masked.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.amellifera.ucsc.apimel2.masked <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.amellifera.ucsc.apimel2.masked>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.amellifera.ucsc.apimel2.masked/meta.yaml>`_

   Full genome sequences for Apis mellifera \(Honey Bee\) as provided by UCSC \(apiMel2\, Jan. 2005\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Amellifera.UCSC.apiMel2\, except that each of them has the 3 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, \(2\) the mask of intra\-contig ambiguities \(AMB mask\)\, and \(3\) the mask of repeats from RepeatMasker \(RM mask\). Only the AGAPS and AMB masks are \"active\" by default.


.. conda:package:: bioconductor-bsgenome.amellifera.ucsc.apimel2.masked

   |downloads_bioconductor-bsgenome.amellifera.ucsc.apimel2.masked| |docker_bioconductor-bsgenome.amellifera.ucsc.apimel2.masked|

   :versions:
      
      

      ``1.3.99-6``,  ``1.3.99-5``,  ``1.3.99-4``,  ``1.3.99-3``,  ``1.3.99-2``,  ``1.3.99-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.58.0,<1.59.0``
   :depends bioconductor-bsgenome.amellifera.ucsc.apimel2: ``>=1.4.0,<1.5.0``
   :depends curl: ``>=7.76.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.amellifera.ucsc.apimel2.masked

   and update with::

      conda update bioconductor-bsgenome.amellifera.ucsc.apimel2.masked

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.amellifera.ucsc.apimel2.masked:<tag>

   (see `bioconductor-bsgenome.amellifera.ucsc.apimel2.masked/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.amellifera.ucsc.apimel2.masked| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.amellifera.ucsc.apimel2.masked.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.amellifera.ucsc.apimel2.masked
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.amellifera.ucsc.apimel2.masked| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.amellifera.ucsc.apimel2.masked/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.amellifera.ucsc.apimel2.masked
.. _`bioconductor-bsgenome.amellifera.ucsc.apimel2.masked/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.amellifera.ucsc.apimel2.masked?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.amellifera.ucsc.apimel2.masked/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.amellifera.ucsc.apimel2.masked/README.html
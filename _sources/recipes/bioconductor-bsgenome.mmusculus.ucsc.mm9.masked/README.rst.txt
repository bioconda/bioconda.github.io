:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.mmusculus.ucsc.mm9.masked'
.. highlight: bash

bioconductor-bsgenome.mmusculus.ucsc.mm9.masked
===============================================

.. conda:recipe:: bioconductor-bsgenome.mmusculus.ucsc.mm9.masked
   :replaces_section_title:

   Full masked genome sequences for Mus musculus \(UCSC version mm9\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/BSgenome.Mmusculus.UCSC.mm9.masked.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.mmusculus.ucsc.mm9.masked <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm9.masked>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm9.masked/meta.yaml>`_

   Full genome sequences for Mus musculus \(Mouse\) as provided by UCSC \(mm9\, Jul. 2007\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Mmusculus.UCSC.mm9\, except that each of them has the 4 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, \(2\) the mask of intra\-contig ambiguities \(AMB mask\)\, \(3\) the mask of repeats from RepeatMasker \(RM mask\)\, and \(4\) the mask of repeats from Tandem Repeats Finder \(TRF mask\). Only the AGAPS and AMB masks are \"active\" by default.


.. conda:package:: bioconductor-bsgenome.mmusculus.ucsc.mm9.masked

   |downloads_bioconductor-bsgenome.mmusculus.ucsc.mm9.masked| |docker_bioconductor-bsgenome.mmusculus.ucsc.mm9.masked|

   :versions: 1.3.99-3, 1.3.99-2, 1.3.99-0
   
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm9: >=1.4.0,<1.5.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.mmusculus.ucsc.mm9.masked

   and update with::

      conda update bioconductor-bsgenome.mmusculus.ucsc.mm9.masked

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm9.masked:<tag>

   (see `bioconductor-bsgenome.mmusculus.ucsc.mm9.masked/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.mmusculus.ucsc.mm9.masked| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.mmusculus.ucsc.mm9.masked.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.mmusculus.ucsc.mm9.masked
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.mmusculus.ucsc.mm9.masked| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm9.masked/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm9.masked
.. _`bioconductor-bsgenome.mmusculus.ucsc.mm9.masked/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm9.masked?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm9.masked/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm9.masked/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked'
.. highlight: bash

bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked
=================================================

.. conda:recipe:: bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked
   :replaces_section_title:

   Full masked genome sequences for Rattus norvegicus \(UCSC version rn4\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/BSgenome.Rnorvegicus.UCSC.rn4.masked.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked/meta.yaml>`_

   Full genome sequences for Rattus norvegicus \(Rat\) as provided by UCSC \(rn4\, Nov. 2004\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Rnorvegicus.UCSC.rn4\, except that each of them has the 4 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, \(2\) the mask of intra\-contig ambiguities \(AMB mask\)\, \(3\) the mask of repeats from RepeatMasker \(RM mask\)\, and \(4\) the mask of repeats from Tandem Repeats Finder \(TRF mask\). Only the AGAPS and AMB masks are \"active\" by default.


.. conda:package:: bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked

   |downloads_bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked| |docker_bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked|

   :versions: 1.3.99-4, 1.3.99-3, 1.3.99-2, 1.3.99-0
   
   :depends bioconductor-bsgenome: >=1.56.0,<1.57.0
   :depends bioconductor-bsgenome.rnorvegicus.ucsc.rn4: >=1.4.0,<1.5.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked

   and update with::

      conda update bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked:<tag>

   (see `bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked
.. _`bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.rnorvegicus.ucsc.rn4.masked/README.html
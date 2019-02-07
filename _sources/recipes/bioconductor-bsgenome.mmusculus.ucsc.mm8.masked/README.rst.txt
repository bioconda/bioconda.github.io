.. title:: Package Recipe 'bioconductor-bsgenome.mmusculus.ucsc.mm8.masked'
.. highlight: bash


bioconductor-bsgenome.mmusculus.ucsc.mm8.masked
===============================================

.. conda:recipe:: bioconductor-bsgenome.mmusculus.ucsc.mm8.masked
   :replaces_section_title:

   Full genome sequences for Mus musculus \(Mouse\) as provided by UCSC \(mm8\, Feb. 2006\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Mmusculus.UCSC.mm8\, except that each of them has the 4 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, \(2\) the mask of intra\-contig ambiguities \(AMB mask\)\, \(3\) the mask of repeats from RepeatMasker \(RM mask\)\, and \(4\) the mask of repeats from Tandem Repeats Finder \(TRF mask\). Only the AGAPS and AMB masks are \"active\" by default.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/BSgenome.Mmusculus.UCSC.mm8.masked.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.mmusculus.ucsc.mm8.masked <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm8.masked>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm8.masked/meta.yaml>`_

   


.. conda:package:: bioconductor-bsgenome.mmusculus.ucsc.mm8.masked

   |downloads_bioconductor-bsgenome.mmusculus.ucsc.mm8.masked| |docker_bioconductor-bsgenome.mmusculus.ucsc.mm8.masked|

   :versions: 1.3.99

   :depends: :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-bsgenome.mmusculus.ucsc.mm8` >=1.4.0,<1.5.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-bsgenome.mmusculus.ucsc.mm8.masked|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.mmusculus.ucsc.mm8.masked

   and update with::

      conda update bioconductor-bsgenome.mmusculus.ucsc.mm8.masked

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm8.masked


.. |required_by_bioconductor-bsgenome.mmusculus.ucsc.mm8.masked| conda:required_by:: bioconductor-bsgenome.mmusculus.ucsc.mm8.masked
.. |downloads_bioconductor-bsgenome.mmusculus.ucsc.mm8.masked| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.mmusculus.ucsc.mm8.masked.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.mmusculus.ucsc.mm8.masked| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm8.masked/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm8.masked







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm8.masked/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm8.masked/README.html


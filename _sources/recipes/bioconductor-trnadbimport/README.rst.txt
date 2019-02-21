:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trnadbimport'
.. highlight: bash

bioconductor-trnadbimport
=========================

.. conda:recipe:: bioconductor-trnadbimport
   :replaces_section_title:

   tRNAdbImport imports the entries of the tRNAdb and mtRNAdb \(http\:\/\/trna.bioinf.uni\-leipzig.de\) as GRanges object.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/tRNAdbImport.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-trnadbimport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trnadbimport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trnadbimport/meta.yaml>`_

   


.. conda:package:: bioconductor-trnadbimport

   |downloads_bioconductor-trnadbimport| |docker_bioconductor-trnadbimport|

   :versions: 1.0.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-trna: >=1.0.0,<1.1.0
   
   :depends r-assertive: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-httr: 
   
   :depends r-stringr: 
   
   :depends r-xml2: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trnadbimport

   and update with::

      conda update bioconductor-trnadbimport

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trnadbimport:<tag>

   (see `bioconductor-trnadbimport/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trnadbimport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trnadbimport.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-trnadbimport| image:: https://quay.io/repository/biocontainers/bioconductor-trnadbimport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trnadbimport
.. _`bioconductor-trnadbimport/tags`: https://quay.io/repository/biocontainers/bioconductor-trnadbimport?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trnadbimport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trnadbimport/README.html
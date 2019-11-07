:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trnadbimport'
.. highlight: bash

bioconductor-trnadbimport
=========================

.. conda:recipe:: bioconductor-trnadbimport
   :replaces_section_title:

   Importing from tRNAdb and mitotRNAdb as GRanges objects

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/tRNAdbImport.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-trnadbimport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trnadbimport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trnadbimport/meta.yaml>`_

   tRNAdbImport imports the entries of the tRNAdb and mtRNAdb \(http\:\/\/trna.bioinf.uni\-leipzig.de\) as GRanges object.


.. conda:package:: bioconductor-trnadbimport

   |downloads_bioconductor-trnadbimport| |docker_bioconductor-trnadbimport|

   :versions: 1.4.0-0, 1.2.2-0, 1.0.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-modstrings: >=1.2.0,<1.3.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-structstrings: >=1.2.0,<1.3.0
   :depends bioconductor-trna: >=1.4.0,<1.5.0
   :depends r-assertive: 
   :depends r-base: >=3.6,<3.7.0a0
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
   :target: https://anaconda.org/bioconda/bioconductor-trnadbimport
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
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

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-trna` >=1.0.0,<1.1.0 :conda:package:`r-assertive`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-httr`  :conda:package:`r-stringr`  :conda:package:`r-xml2`  

   :required~by: |required_by_bioconductor-trnadbimport|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trnadbimport

   and update with::

      conda update bioconductor-trnadbimport

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-trnadbimport


.. |required_by_bioconductor-trnadbimport| conda:required_by:: bioconductor-trnadbimport
.. |downloads_bioconductor-trnadbimport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trnadbimport.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-trnadbimport| image:: https://quay.io/repository/biocontainers/bioconductor-trnadbimport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trnadbimport







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trnadbimport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trnadbimport/README.html


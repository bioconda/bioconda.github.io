:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biomart'
.. highlight: bash

bioconductor-biomart
====================

.. conda:recipe:: bioconductor-biomart
   :replaces_section_title:

   In recent years a wealth of biological data has become available in public data repositories. Easy access to these valuable data resources and firm integration with data analysis is needed for comprehensive bioinformatics data analysis. biomaRt provides an interface to a growing collection of databases implementing the BioMart software suite \(http\:\/\/www.biomart.org\). The package enables retrieval of large amounts of data in a uniform way without the need to know the underlying database schemas or write complex SQL queries. The most prominent examples of BioMart databases are Ensembl\, which provides biomaRt users direct access to a diverse set of data and enables a wide range of powerful online queries from gene annotation to database mining.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/biomaRt.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biomart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomart/meta.yaml>`_
   :links: biotools: :biotools:`biomaRt`, doi: :doi:`10.1038/nprot.2009.97`

   


.. conda:package:: bioconductor-biomart

   |downloads_bioconductor-biomart| |docker_bioconductor-biomart|

   :versions: 2.38.0-0, 2.36.1-0, 2.34.2-0, 2.34.0-0, 2.32.1-0, 2.30.0-0, 2.28.0-0, 2.27.0-0, 2.26.1-0, 2.26.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-httr: 
   
   :depends r-progress: 
   
   :depends r-rcurl: 
   
   :depends r-stringr: 
   
   :depends r-xml: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biomart

   and update with::

      conda update bioconductor-biomart

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biomart:<tag>

   (see `bioconductor-biomart/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biomart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biomart.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biomart| image:: https://quay.io/repository/biocontainers/bioconductor-biomart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biomart
.. _`bioconductor-biomart/tags`: https://quay.io/repository/biocontainers/bioconductor-biomart?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biomart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biomart/README.html
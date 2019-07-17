:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-encodexplorerdata'
.. highlight: bash

bioconductor-encodexplorerdata
==============================

.. conda:recipe:: bioconductor-encodexplorerdata
   :replaces_section_title:

   This package allows user to quickly access ENCODE project files metadata and give access to helper functions to query the ENCODE rest api\, download ENCODE datasets and save the database in SQLite format.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/ENCODExplorerData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-encodexplorerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-encodexplorerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-encodexplorerdata/meta.yaml>`_

   


.. conda:package:: bioconductor-encodexplorerdata

   |downloads_bioconductor-encodexplorerdata| |docker_bioconductor-encodexplorerdata|

   :versions: 0.99.1-1
   
   :depends curl: >=7.64.1,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-jsonlite: 
   :depends r-rcurl: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-encodexplorerdata

   and update with::

      conda update bioconductor-encodexplorerdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-encodexplorerdata:<tag>

   (see `bioconductor-encodexplorerdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-encodexplorerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-encodexplorerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-encodexplorerdata
   :alt:   (downloads)
.. |docker_bioconductor-encodexplorerdata| image:: https://quay.io/repository/biocontainers/bioconductor-encodexplorerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-encodexplorerdata
.. _`bioconductor-encodexplorerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-encodexplorerdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-encodexplorerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-encodexplorerdata/README.html
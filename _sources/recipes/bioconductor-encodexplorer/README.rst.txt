.. title:: Package Recipe 'bioconductor-encodexplorer'
.. highlight: bash


bioconductor-encodexplorer
==========================

.. conda:recipe:: bioconductor-encodexplorer
   :replaces_section_title:

   This package allows user to quickly access ENCODE project files metadata and give access to helper functions to query the ENCODE rest api\, download ENCODE datasets and save the database in SQLite format.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ENCODExplorer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-encodexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-encodexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-encodexplorer/meta.yaml>`_
   :links: biotools: :biotools:`encodexplorer`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-encodexplorer

   |downloads_bioconductor-encodexplorer| |docker_bioconductor-encodexplorer|

   :versions: 2.8.0, 2.6.0, 2.4.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-dt`  :conda:package:`r-jsonlite`  :conda:package:`r-rcurl`  :conda:package:`r-shiny`  :conda:package:`r-shinythemes`  :conda:package:`r-stringi`  :conda:package:`r-stringr`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-encodexplorer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-encodexplorer

   and update with::

      conda update bioconductor-encodexplorer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-encodexplorer


.. |required_by_bioconductor-encodexplorer| conda:required_by:: bioconductor-encodexplorer
.. |downloads_bioconductor-encodexplorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-encodexplorer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-encodexplorer| image:: https://quay.io/repository/biocontainers/bioconductor-encodexplorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-encodexplorer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-encodexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-encodexplorer/README.html


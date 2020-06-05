:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellbaser'
.. highlight: bash

bioconductor-cellbaser
======================

.. conda:recipe:: bioconductor-cellbaser
   :replaces_section_title:
   :noindex:

   Querying annotation data from the high performance Cellbase web

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/cellbaseR.html
   :license: Apache License (== 2.0)
   :recipe: /`bioconductor-cellbaser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbaser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbaser/meta.yaml>`_

   This R package makes use of the exhaustive RESTful Web service API that has been implemented for the Cellabase database. It enable researchers to query and obtain a wealth of biological information from a single database saving a lot of time. Another benefit is that researchers can easily make queries about different biological topics and link all this information together as all information is integrated.


.. conda:package:: bioconductor-cellbaser

   |downloads_bioconductor-cellbaser| |docker_bioconductor-cellbaser|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.22.0,<1.23.0``
   :depends bioconductor-rsamtools: ``>=2.4.0,<2.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-pbapply: 
   :depends r-r.utils: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellbaser

   and update with::

      conda update bioconductor-cellbaser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellbaser:<tag>

   (see `bioconductor-cellbaser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellbaser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellbaser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellbaser
   :alt:   (downloads)
.. |docker_bioconductor-cellbaser| image:: https://quay.io/repository/biocontainers/bioconductor-cellbaser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellbaser
.. _`bioconductor-cellbaser/tags`: https://quay.io/repository/biocontainers/bioconductor-cellbaser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellbaser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellbaser/README.html
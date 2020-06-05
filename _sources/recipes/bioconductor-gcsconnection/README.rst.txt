:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcsconnection'
.. highlight: bash

bioconductor-gcsconnection
==========================

.. conda:recipe:: bioconductor-gcsconnection
   :replaces_section_title:
   :noindex:

   Creating R Connection with Google Cloud Storage

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/GCSConnection.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gcsconnection <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcsconnection>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcsconnection/meta.yaml>`_

   Create R \'connection\' objects to google cloud storage buckets using the Google REST interface. Both read and write connections are supported. The package also provide functions to view and manage files on Google Cloud.


.. conda:package:: bioconductor-gcsconnection

   |downloads_bioconductor-gcsconnection| |docker_bioconductor-gcsconnection|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-googleauthr: 
   :depends r-googlecloudstorager: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-rcpp: ``>=1.0.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gcsconnection

   and update with::

      conda update bioconductor-gcsconnection

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gcsconnection:<tag>

   (see `bioconductor-gcsconnection/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gcsconnection| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcsconnection.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gcsconnection
   :alt:   (downloads)
.. |docker_bioconductor-gcsconnection| image:: https://quay.io/repository/biocontainers/bioconductor-gcsconnection/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcsconnection
.. _`bioconductor-gcsconnection/tags`: https://quay.io/repository/biocontainers/bioconductor-gcsconnection?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcsconnection/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcsconnection/README.html
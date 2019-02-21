:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bucketcache'
.. highlight: bash

bucketcache
===========

.. conda:recipe:: bucketcache
   :replaces_section_title:

   Versatile persisent file cache.

   :homepage: https://github.com/RazerM/bucketcache
   :license: MIT / MIT License
   :recipe: /`bucketcache <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bucketcache>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bucketcache/meta.yaml>`_

   


.. conda:package:: bucketcache

   |downloads_bucketcache| |docker_bucketcache|

   :versions: 0.12.0-0
   
   :depends boltons: 
   
   :depends decorator: >=4.0.2
   
   :depends logbook: >=0.12.5
   
   :depends pathlib: 
   
   :depends python: 2.7*
   
   :depends python-dateutil: 
   
   :depends represent: >=1.5.1
   
   :depends six: >=1.9.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bucketcache

   and update with::

      conda update bucketcache

   or use the docker container::

      docker pull quay.io/biocontainers/bucketcache:<tag>

   (see `bucketcache/tags`_ for valid values for ``<tag>``)


.. |downloads_bucketcache| image:: https://img.shields.io/conda/dn/bioconda/bucketcache.svg?style=flat
   :alt:   (downloads)
.. |docker_bucketcache| image:: https://quay.io/repository/biocontainers/bucketcache/status
   :target: https://quay.io/repository/biocontainers/bucketcache
.. _`bucketcache/tags`: https://quay.io/repository/biocontainers/bucketcache?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bucketcache/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bucketcache/README.html
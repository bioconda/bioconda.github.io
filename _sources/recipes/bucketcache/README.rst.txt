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

   :versions: 0.12.0

   :depends: :conda:package:`boltons`  :conda:package:`decorator` >=4.0.2 :conda:package:`logbook` >=0.12.5 :conda:package:`pathlib`  :conda:package:`python` 2.7* :conda:package:`python-dateutil`  :conda:package:`represent` >=1.5.1 :conda:package:`six` >=1.9.0 

   :required~by: |required_by_bucketcache|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bucketcache

   and update with::

      conda update bucketcache

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bucketcache


.. |required_by_bucketcache| conda:required_by:: bucketcache
.. |downloads_bucketcache| image:: https://img.shields.io/conda/dn/bioconda/bucketcache.svg?style=flat
   :alt:   (downloads)
.. |docker_bucketcache| image:: https://quay.io/repository/biocontainers/bucketcache/status
   :target: https://quay.io/repository/biocontainers/bucketcache







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bucketcache/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bucketcache/README.html


:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cache-cache'
.. highlight: bash

perl-cache-cache
================

.. conda:recipe:: perl-cache-cache
   :replaces_section_title:

   extends Cache\:\:SizeAwareMemoryCache

   :homepage: http://metacpan.org/pod/Cache::Cache
   :license: unknown
   :recipe: /`perl-cache-cache <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cache-cache>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cache-cache/meta.yaml>`_

   


.. conda:package:: perl-cache-cache

   |downloads_perl-cache-cache| |docker_perl-cache-cache|

   :versions: 1.08-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-digest-sha1: 
   
   :depends perl-error: 
   
   :depends perl-ipc-sharelite: 
   
   :depends perl-storable: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-cache-cache

   and update with::

      conda update perl-cache-cache

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-cache-cache:<tag>

   (see `perl-cache-cache/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-cache-cache| image:: https://img.shields.io/conda/dn/bioconda/perl-cache-cache.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-cache-cache| image:: https://quay.io/repository/biocontainers/perl-cache-cache/status
   :target: https://quay.io/repository/biocontainers/perl-cache-cache
.. _`perl-cache-cache/tags`: https://quay.io/repository/biocontainers/perl-cache-cache?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cache-cache/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cache-cache/README.html
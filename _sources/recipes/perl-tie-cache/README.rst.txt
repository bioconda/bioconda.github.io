:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-cache'
.. highlight: bash

perl-tie-cache
==============

.. conda:recipe:: perl-tie-cache
   :replaces_section_title:

   LRU Cache in Memory

   :homepage: http://metacpan.org/pod/Tie-Cache
   :license: unknown
   :recipe: /`perl-tie-cache <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-cache>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-cache/meta.yaml>`_

   


.. conda:package:: perl-tie-cache

   |downloads_perl-tie-cache| |docker_perl-tie-cache|

   :versions: 0.21-1, 0.21-0
   
   :depends perl: >=5.26.0,<5.27.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-tie-cache

   and update with::

      conda update perl-tie-cache

   or use the docker container::

      docker pull quay.io/biocontainers/perl-tie-cache:<tag>

   (see `perl-tie-cache/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-tie-cache| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-cache.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-tie-cache| image:: https://quay.io/repository/biocontainers/perl-tie-cache/status
   :target: https://quay.io/repository/biocontainers/perl-tie-cache
.. _`perl-tie-cache/tags`: https://quay.io/repository/biocontainers/perl-tie-cache?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-cache/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-cache/README.html
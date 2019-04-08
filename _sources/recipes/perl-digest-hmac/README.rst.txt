:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-digest-hmac'
.. highlight: bash

perl-digest-hmac
================

.. conda:recipe:: perl-digest-hmac
   :replaces_section_title:

   Keyed\-Hashing for Message Authentication

   :homepage: http://metacpan.org/pod/Digest-HMAC
   :license: perl_5
   :recipe: /`perl-digest-hmac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-hmac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-hmac/meta.yaml>`_

   


.. conda:package:: perl-digest-hmac

   |downloads_perl-digest-hmac| |docker_perl-digest-hmac|

   :versions: 1.03-3, 1.03-2, 1.03-1, 1.03-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-digest-hmac

   and update with::

      conda update perl-digest-hmac

   or use the docker container::

      docker pull quay.io/biocontainers/perl-digest-hmac:<tag>

   (see `perl-digest-hmac/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-digest-hmac| image:: https://img.shields.io/conda/dn/bioconda/perl-digest-hmac.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-digest-hmac| image:: https://quay.io/repository/biocontainers/perl-digest-hmac/status
   :target: https://quay.io/repository/biocontainers/perl-digest-hmac
.. _`perl-digest-hmac/tags`: https://quay.io/repository/biocontainers/perl-digest-hmac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-digest-hmac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-digest-hmac/README.html
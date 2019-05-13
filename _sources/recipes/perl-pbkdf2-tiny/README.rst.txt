:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pbkdf2-tiny'
.. highlight: bash

perl-pbkdf2-tiny
================

.. conda:recipe:: perl-pbkdf2-tiny
   :replaces_section_title:

   Minimalist PBKDF2 \(RFC 2898\) with HMAC\-SHA1 or HMAC\-SHA2

   :homepage: https://github.com/dagolden/PBKDF2-Tiny
   :license: apache_2_0
   :recipe: /`perl-pbkdf2-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pbkdf2-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pbkdf2-tiny/meta.yaml>`_

   


.. conda:package:: perl-pbkdf2-tiny

   |downloads_perl-pbkdf2-tiny| |docker_perl-pbkdf2-tiny|

   :versions: 0.005-1, 0.005-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pbkdf2-tiny

   and update with::

      conda update perl-pbkdf2-tiny

   or use the docker container::

      docker pull quay.io/biocontainers/perl-pbkdf2-tiny:<tag>

   (see `perl-pbkdf2-tiny/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pbkdf2-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-pbkdf2-tiny.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pbkdf2-tiny
   :alt:   (downloads)
.. |docker_perl-pbkdf2-tiny| image:: https://quay.io/repository/biocontainers/perl-pbkdf2-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-pbkdf2-tiny
.. _`perl-pbkdf2-tiny/tags`: https://quay.io/repository/biocontainers/perl-pbkdf2-tiny?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pbkdf2-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pbkdf2-tiny/README.html
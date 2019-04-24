:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-digest-sha1'
.. highlight: bash

perl-digest-sha1
================

.. conda:recipe:: perl-digest-sha1
   :replaces_section_title:

   Perl interface to the SHA\-1 algorithm

   :homepage: http://metacpan.org/pod/Digest::SHA1
   :license: perl_5
   :recipe: /`perl-digest-sha1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha1/meta.yaml>`_

   


.. conda:package:: perl-digest-sha1

   |downloads_perl-digest-sha1| |docker_perl-digest-sha1|

   :versions: 2.13-0
   
   :depends libstdcxx-ng: >=4.9
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-digest-sha1

   and update with::

      conda update perl-digest-sha1

   or use the docker container::

      docker pull quay.io/biocontainers/perl-digest-sha1:<tag>

   (see `perl-digest-sha1/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-digest-sha1| image:: https://img.shields.io/conda/dn/bioconda/perl-digest-sha1.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-digest-sha1| image:: https://quay.io/repository/biocontainers/perl-digest-sha1/status
   :target: https://quay.io/repository/biocontainers/perl-digest-sha1
.. _`perl-digest-sha1/tags`: https://quay.io/repository/biocontainers/perl-digest-sha1?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-digest-sha1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-digest-sha1/README.html
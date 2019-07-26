:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-compress-raw-bzip2'
.. highlight: bash

perl-compress-raw-bzip2
=======================

.. conda:recipe:: perl-compress-raw-bzip2
   :replaces_section_title:

   Low\-Level Interface to bzip2 compression library

   :homepage: http://metacpan.org/pod/Compress::Raw::Bzip2
   :license: perl_5
   :recipe: /`perl-compress-raw-bzip2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-compress-raw-bzip2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-compress-raw-bzip2/meta.yaml>`_

   


.. conda:package:: perl-compress-raw-bzip2

   |downloads_perl-compress-raw-bzip2| |docker_perl-compress-raw-bzip2|

   :versions: 2.086-0, 2.084-0, 2.083-0, 2.081-0, 2.074-0, 2.069-2, 2.069-1
   
   :depends libcxx: >=4.0.1
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-compress-raw-bzip2

   and update with::

      conda update perl-compress-raw-bzip2

   or use the docker container::

      docker pull quay.io/biocontainers/perl-compress-raw-bzip2:<tag>

   (see `perl-compress-raw-bzip2/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-compress-raw-bzip2| image:: https://img.shields.io/conda/dn/bioconda/perl-compress-raw-bzip2.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-compress-raw-bzip2
   :alt:   (downloads)
.. |docker_perl-compress-raw-bzip2| image:: https://quay.io/repository/biocontainers/perl-compress-raw-bzip2/status
   :target: https://quay.io/repository/biocontainers/perl-compress-raw-bzip2
.. _`perl-compress-raw-bzip2/tags`: https://quay.io/repository/biocontainers/perl-compress-raw-bzip2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-compress-raw-bzip2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-compress-raw-bzip2/README.html
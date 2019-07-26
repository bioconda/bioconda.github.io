:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-dump'
.. highlight: bash

perl-data-dump
==============

.. conda:recipe:: perl-data-dump
   :replaces_section_title:

   Pretty printing of data structures

   :homepage: http://metacpan.org/pod/Data::Dump
   :license: perl_5
   :recipe: /`perl-data-dump <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-dump>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-dump/meta.yaml>`_

   


.. conda:package:: perl-data-dump

   |downloads_perl-data-dump| |docker_perl-data-dump|

   :versions: 1.23-5, 1.23-4, 1.23-3
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-data-dump

   and update with::

      conda update perl-data-dump

   or use the docker container::

      docker pull quay.io/biocontainers/perl-data-dump:<tag>

   (see `perl-data-dump/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-dump| image:: https://img.shields.io/conda/dn/bioconda/perl-data-dump.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-dump
   :alt:   (downloads)
.. |docker_perl-data-dump| image:: https://quay.io/repository/biocontainers/perl-data-dump/status
   :target: https://quay.io/repository/biocontainers/perl-data-dump
.. _`perl-data-dump/tags`: https://quay.io/repository/biocontainers/perl-data-dump?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-dump/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-dump/README.html
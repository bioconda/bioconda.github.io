:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-threaded'
.. highlight: bash

perl-threaded
=============

.. conda:recipe:: perl-threaded
   :replaces_section_title:

   The Perl language.

   :homepage: http://www.perl.org/
   :license: Perl
   :recipe: /`perl-threaded <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-threaded>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-threaded/meta.yaml>`_

   


.. conda:package:: perl-threaded

   |downloads_perl-threaded| |docker_perl-threaded|

   :versions: 5.26.0-0, 5.22.0-13, 5.22.0-12, 5.22.0-11, 5.22.0-10, 5.22.0-9, 5.22.0-8
   
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-threaded

   and update with::

      conda update perl-threaded

   or use the docker container::

      docker pull quay.io/biocontainers/perl-threaded:<tag>

   (see `perl-threaded/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-threaded| image:: https://img.shields.io/conda/dn/bioconda/perl-threaded.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-threaded| image:: https://quay.io/repository/biocontainers/perl-threaded/status
   :target: https://quay.io/repository/biocontainers/perl-threaded
.. _`perl-threaded/tags`: https://quay.io/repository/biocontainers/perl-threaded?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-threaded/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-threaded/README.html
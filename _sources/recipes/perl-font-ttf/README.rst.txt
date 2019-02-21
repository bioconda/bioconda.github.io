:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-font-ttf'
.. highlight: bash

perl-font-ttf
=============

.. conda:recipe:: perl-font-ttf
   :replaces_section_title:

   TTF font support for Perl

   :homepage: http://metacpan.org/pod/Font-TTF
   :license: artistic_2
   :recipe: /`perl-font-ttf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-font-ttf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-font-ttf/meta.yaml>`_

   


.. conda:package:: perl-font-ttf

   |downloads_perl-font-ttf| |docker_perl-font-ttf|

   :versions: 1.06-0, 1.05-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-io-string: 
   
   :depends perl-xml-parser: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-font-ttf

   and update with::

      conda update perl-font-ttf

   or use the docker container::

      docker pull quay.io/biocontainers/perl-font-ttf:<tag>

   (see `perl-font-ttf/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-font-ttf| image:: https://img.shields.io/conda/dn/bioconda/perl-font-ttf.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-font-ttf| image:: https://quay.io/repository/biocontainers/perl-font-ttf/status
   :target: https://quay.io/repository/biocontainers/perl-font-ttf
.. _`perl-font-ttf/tags`: https://quay.io/repository/biocontainers/perl-font-ttf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-font-ttf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-font-ttf/README.html
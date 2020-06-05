:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-inline-c'
.. highlight: bash

perl-inline-c
=============

.. conda:recipe:: perl-inline-c
   :replaces_section_title:
   :noindex:

   C Language Support for Inline

   :homepage: https://github.com/ingydotnet/inline-c-pm
   :license: perl_5
   :recipe: /`perl-inline-c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-inline-c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-inline-c/meta.yaml>`_

   


.. conda:package:: perl-inline-c

   |downloads_perl-inline-c| |docker_perl-inline-c|

   :versions:
      
      

      ``0.78-1``,  ``0.78-0``,  ``0.76-1``,  ``0.76-0``

      

   
   :depends compilers: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends make: 
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-extutils-makemaker: 
   :depends perl-inline: 
   :depends perl-parse-recdescent: 
   :depends perl-pegex: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-inline-c

   and update with::

      conda update perl-inline-c

   or use the docker container::

      docker pull quay.io/biocontainers/perl-inline-c:<tag>

   (see `perl-inline-c/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-inline-c| image:: https://img.shields.io/conda/dn/bioconda/perl-inline-c.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-inline-c
   :alt:   (downloads)
.. |docker_perl-inline-c| image:: https://quay.io/repository/biocontainers/perl-inline-c/status
   :target: https://quay.io/repository/biocontainers/perl-inline-c
.. _`perl-inline-c/tags`: https://quay.io/repository/biocontainers/perl-inline-c?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-inline-c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-inline-c/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pathtools'
.. highlight: bash

perl-pathtools
==============

.. conda:recipe:: perl-pathtools
   :replaces_section_title:
   :noindex:

   Tools for working with directory and file names

   :homepage: http://dev.perl.org/
   :license: perl_5
   :recipe: /`perl-pathtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pathtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pathtools/meta.yaml>`_

   


.. conda:package:: perl-pathtools

   |downloads_perl-pathtools| |docker_perl-pathtools|

   :versions:
      
      

      ``3.75-1``,  ``3.75-0``,  ``3.73-2``,  ``3.73-1``,  ``3.73-0``,  ``3.40-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-carp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pathtools

   and update with::

      conda update perl-pathtools

   or use the docker container::

      docker pull quay.io/biocontainers/perl-pathtools:<tag>

   (see `perl-pathtools/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pathtools| image:: https://img.shields.io/conda/dn/bioconda/perl-pathtools.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pathtools
   :alt:   (downloads)
.. |docker_perl-pathtools| image:: https://quay.io/repository/biocontainers/perl-pathtools/status
   :target: https://quay.io/repository/biocontainers/perl-pathtools
.. _`perl-pathtools/tags`: https://quay.io/repository/biocontainers/perl-pathtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pathtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pathtools/README.html
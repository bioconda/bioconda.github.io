:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-archive-extract'
.. highlight: bash

perl-archive-extract
====================

.. conda:recipe:: perl-archive-extract
   :replaces_section_title:
   :noindex:

   Generic archive extracting mechanism

   :homepage: http://metacpan.org/pod/Archive::Extract
   :license: perl_5
   :recipe: /`perl-archive-extract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-extract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-extract/meta.yaml>`_

   


.. conda:package:: perl-archive-extract

   |downloads_perl-archive-extract| |docker_perl-archive-extract|

   :versions:
      
      

      ``0.80-0``,  ``0.76-4``,  ``0.76-3``,  ``0.76-2``,  ``0.76-1``,  ``0.76-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-file-path: 
   :depends perl-ipc-cmd: 
   :depends perl-locale-maketext-simple: 
   :depends perl-module-load-conditional: 
   :depends perl-params-check: ``>=0.07``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-archive-extract

   and update with::

      conda update perl-archive-extract

   or use the docker container::

      docker pull quay.io/biocontainers/perl-archive-extract:<tag>

   (see `perl-archive-extract/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-archive-extract| image:: https://img.shields.io/conda/dn/bioconda/perl-archive-extract.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-archive-extract
   :alt:   (downloads)
.. |docker_perl-archive-extract| image:: https://quay.io/repository/biocontainers/perl-archive-extract/status
   :target: https://quay.io/repository/biocontainers/perl-archive-extract
.. _`perl-archive-extract/tags`: https://quay.io/repository/biocontainers/perl-archive-extract?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-archive-extract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-archive-extract/README.html
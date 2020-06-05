:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mce-shared'
.. highlight: bash

perl-mce-shared
===============

.. conda:recipe:: perl-mce-shared
   :replaces_section_title:
   :noindex:

   MCE extension for sharing data supporting threads and processes

   :homepage: https://github.com/marioroy/mce-shared
   :license: perl_5
   :recipe: /`perl-mce-shared <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce-shared>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mce-shared/meta.yaml>`_

   


.. conda:package:: perl-mce-shared

   |downloads_perl-mce-shared| |docker_perl-mce-shared|

   :versions:
      
      

      ``1.840-0``,  ``1.839-0``,  ``1.838-0``,  ``1.836-1``,  ``1.836-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-mce: ``>=1.836``
   :depends perl-socket: 
   :depends perl-storable: 
   :depends perl-time-hires: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mce-shared

   and update with::

      conda update perl-mce-shared

   or use the docker container::

      docker pull quay.io/biocontainers/perl-mce-shared:<tag>

   (see `perl-mce-shared/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mce-shared| image:: https://img.shields.io/conda/dn/bioconda/perl-mce-shared.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mce-shared
   :alt:   (downloads)
.. |docker_perl-mce-shared| image:: https://quay.io/repository/biocontainers/perl-mce-shared/status
   :target: https://quay.io/repository/biocontainers/perl-mce-shared
.. _`perl-mce-shared/tags`: https://quay.io/repository/biocontainers/perl-mce-shared?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mce-shared/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mce-shared/README.html
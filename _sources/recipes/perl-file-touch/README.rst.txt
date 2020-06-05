:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-touch'
.. highlight: bash

perl-file-touch
===============

.. conda:recipe:: perl-file-touch
   :replaces_section_title:
   :noindex:

   update file access and modification times\, optionally creating files if needed

   :homepage: https://github.com/neilb/File-Touch
   :license: perl_5
   :recipe: /`perl-file-touch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-touch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-touch/meta.yaml>`_

   


.. conda:package:: perl-file-touch

   |downloads_perl-file-touch| |docker_perl-file-touch|

   :versions:
      
      

      ``0.11-1``,  ``0.11-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-carp: 
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-touch

   and update with::

      conda update perl-file-touch

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-touch:<tag>

   (see `perl-file-touch/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-touch| image:: https://img.shields.io/conda/dn/bioconda/perl-file-touch.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-touch
   :alt:   (downloads)
.. |docker_perl-file-touch| image:: https://quay.io/repository/biocontainers/perl-file-touch/status
   :target: https://quay.io/repository/biocontainers/perl-file-touch
.. _`perl-file-touch/tags`: https://quay.io/repository/biocontainers/perl-file-touch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-touch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-touch/README.html
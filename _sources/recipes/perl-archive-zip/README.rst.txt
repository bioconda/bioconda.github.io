:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-archive-zip'
.. highlight: bash

perl-archive-zip
================

.. conda:recipe:: perl-archive-zip
   :replaces_section_title:

   Provide an interface to ZIP archive files.

   :homepage: http://metacpan.org/pod/Archive::Zip
   :license: perl_5
   :recipe: /`perl-archive-zip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-zip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-zip/meta.yaml>`_

   


.. conda:package:: perl-archive-zip

   |downloads_perl-archive-zip| |docker_perl-archive-zip|

   :versions: 1.64-0, 1.60-0, 1.55-4, 1.55-3, 1.55-2, 1.55-1, 1.55-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-compress-raw-zlib: 
   
   :depends perl-file-path: 
   
   :depends perl-file-temp: 
   
   :depends perl-time-local: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-archive-zip

   and update with::

      conda update perl-archive-zip

   or use the docker container::

      docker pull quay.io/biocontainers/perl-archive-zip:<tag>

   (see `perl-archive-zip/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-archive-zip| image:: https://img.shields.io/conda/dn/bioconda/perl-archive-zip.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-archive-zip| image:: https://quay.io/repository/biocontainers/perl-archive-zip/status
   :target: https://quay.io/repository/biocontainers/perl-archive-zip
.. _`perl-archive-zip/tags`: https://quay.io/repository/biocontainers/perl-archive-zip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-archive-zip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-archive-zip/README.html
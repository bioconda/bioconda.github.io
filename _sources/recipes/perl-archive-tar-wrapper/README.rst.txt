:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-archive-tar-wrapper'
.. highlight: bash

perl-archive-tar-wrapper
========================

.. conda:recipe:: perl-archive-tar-wrapper/0.33
   :replaces_section_title:

   API wrapper around the \'tar\' utility

   :homepage: http://metacpan.org/pod/Archive::Tar::Wrapper
   :license: gpl_3
   :recipe: /`perl-archive-tar-wrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-tar-wrapper>`_/`0.33 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-tar-wrapper/0.33>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-tar-wrapper/0.33/meta.yaml>`_

   


.. conda:package:: perl-archive-tar-wrapper

   |downloads_perl-archive-tar-wrapper| |docker_perl-archive-tar-wrapper|

   :versions: 0.33-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-file-temp: 
   :depends perl-file-which: 
   :depends perl-ipc-run: 
   :depends perl-log-log4perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-archive-tar-wrapper

   and update with::

      conda update perl-archive-tar-wrapper

   or use the docker container::

      docker pull quay.io/biocontainers/perl-archive-tar-wrapper:<tag>

   (see `perl-archive-tar-wrapper/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-archive-tar-wrapper| image:: https://img.shields.io/conda/dn/bioconda/perl-archive-tar-wrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-archive-tar-wrapper
   :alt:   (downloads)
.. |docker_perl-archive-tar-wrapper| image:: https://quay.io/repository/biocontainers/perl-archive-tar-wrapper/status
   :target: https://quay.io/repository/biocontainers/perl-archive-tar-wrapper
.. _`perl-archive-tar-wrapper/tags`: https://quay.io/repository/biocontainers/perl-archive-tar-wrapper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-archive-tar-wrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-archive-tar-wrapper/README.html
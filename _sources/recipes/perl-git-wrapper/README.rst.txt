:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-git-wrapper'
.. highlight: bash

perl-git-wrapper
================

.. conda:recipe:: perl-git-wrapper
   :replaces_section_title:

   Wrap git\(7\) command\-line interface

   :homepage: http://genehack.github.com/Git-Wrapper/
   :license: perl_5
   :recipe: /`perl-git-wrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-git-wrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-git-wrapper/meta.yaml>`_

   


.. conda:package:: perl-git-wrapper

   |downloads_perl-git-wrapper| |docker_perl-git-wrapper|

   :versions: 0.048-0, 0.047-1, 0.047-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-file-chdir: 
   
   :depends perl-file-temp: 
   
   :depends perl-ipc-cmd: 
   
   :depends perl-sort-versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-git-wrapper

   and update with::

      conda update perl-git-wrapper

   or use the docker container::

      docker pull quay.io/biocontainers/perl-git-wrapper:<tag>

   (see `perl-git-wrapper/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-git-wrapper| image:: https://img.shields.io/conda/dn/bioconda/perl-git-wrapper.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-git-wrapper| image:: https://quay.io/repository/biocontainers/perl-git-wrapper/status
   :target: https://quay.io/repository/biocontainers/perl-git-wrapper
.. _`perl-git-wrapper/tags`: https://quay.io/repository/biocontainers/perl-git-wrapper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-git-wrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-git-wrapper/README.html
.. title:: Package Recipe 'perl-ipc-cmd'
.. highlight: bash


perl-ipc-cmd
============

.. conda:recipe:: perl-ipc-cmd
   :replaces_section_title:

   A cross platform way of running \(interactive\) commandline programs.

   :homepage: http://metacpan.org/pod/IPC::Cmd
   :license: perl_5
   :recipe: /`perl-ipc-cmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-cmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-cmd/meta.yaml>`_

   


.. conda:package:: perl-ipc-cmd

   |downloads_perl-ipc-cmd| |docker_perl-ipc-cmd|

   :versions: 1.02, 1.00

   :depends: :conda:package:`perl` >=5.26.2,<5.27.0a0 :conda:package:`perl-extutils-makemaker`  :conda:package:`perl-file-temp`  :conda:package:`perl-locale-maketext-simple`  :conda:package:`perl-module-load-conditional`  :conda:package:`perl-params-check`  

   :required~by: |required_by_perl-ipc-cmd|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ipc-cmd

   and update with::

      conda update perl-ipc-cmd

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-ipc-cmd


.. |required_by_perl-ipc-cmd| conda:required_by:: perl-ipc-cmd
.. |downloads_perl-ipc-cmd| image:: https://img.shields.io/conda/dn/bioconda/perl-ipc-cmd.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-ipc-cmd| image:: https://quay.io/repository/biocontainers/perl-ipc-cmd/status
   :target: https://quay.io/repository/biocontainers/perl-ipc-cmd







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ipc-cmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ipc-cmd/README.html


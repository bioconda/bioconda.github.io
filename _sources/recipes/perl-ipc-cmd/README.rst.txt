:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ipc-cmd'
.. highlight: bash

perl-ipc-cmd
============

.. conda:recipe:: perl-ipc-cmd
   :replaces_section_title:
   :noindex:

   A cross platform way of running \(interactive\) commandline programs.

   :homepage: http://metacpan.org/pod/IPC::Cmd
   :license: perl_5
   :recipe: /`perl-ipc-cmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-cmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-cmd/meta.yaml>`_

   


.. conda:package:: perl-ipc-cmd

   |downloads_perl-ipc-cmd| |docker_perl-ipc-cmd|

   :versions:
      
      

      ``1.02-0``,  ``1.00-1``,  ``1.00-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-extutils-makemaker: 
   :depends perl-file-temp: 
   :depends perl-locale-maketext-simple: 
   :depends perl-module-load-conditional: 
   :depends perl-params-check: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ipc-cmd

   and update with::

      conda update perl-ipc-cmd

   or use the docker container::

      docker pull quay.io/biocontainers/perl-ipc-cmd:<tag>

   (see `perl-ipc-cmd/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ipc-cmd| image:: https://img.shields.io/conda/dn/bioconda/perl-ipc-cmd.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ipc-cmd
   :alt:   (downloads)
.. |docker_perl-ipc-cmd| image:: https://quay.io/repository/biocontainers/perl-ipc-cmd/status
   :target: https://quay.io/repository/biocontainers/perl-ipc-cmd
.. _`perl-ipc-cmd/tags`: https://quay.io/repository/biocontainers/perl-ipc-cmd?tab=tags


.. raw:: html

    <script>
        var package = "perl-ipc-cmd";
        var versions = ["1.02","1.00","1.00"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ipc-cmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ipc-cmd/README.html
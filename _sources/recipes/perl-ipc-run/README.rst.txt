:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ipc-run'
.. highlight: bash

perl-ipc-run
============

.. conda:recipe:: perl-ipc-run
   :replaces_section_title:
   :noindex:

   system\(\) and background procs w\/ piping\, redirs\, ptys \(Unix\, Win32\)

   :homepage: http://metacpan.org/pod/IPC-Run
   :license: perl_5
   :recipe: /`perl-ipc-run <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-run>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-run/meta.yaml>`_

   


.. conda:package:: perl-ipc-run

   |downloads_perl-ipc-run| |docker_perl-ipc-run|

   :versions:
      
      

      ``20200505.0-0``,  ``20180523.0-1``,  ``20180523.0-0``,  ``0.94-1``,  ``0.94-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-io-tty: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-ipc-run

   and update with::

      conda update perl-ipc-run

   or use the docker container::

      docker pull quay.io/biocontainers/perl-ipc-run:<tag>

   (see `perl-ipc-run/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ipc-run| image:: https://img.shields.io/conda/dn/bioconda/perl-ipc-run.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ipc-run
   :alt:   (downloads)
.. |docker_perl-ipc-run| image:: https://quay.io/repository/biocontainers/perl-ipc-run/status
   :target: https://quay.io/repository/biocontainers/perl-ipc-run
.. _`perl-ipc-run/tags`: https://quay.io/repository/biocontainers/perl-ipc-run?tab=tags


.. raw:: html

    <script>
        var package = "perl-ipc-run";
        var versions = ["20200505.0","20180523.0","20180523.0","0.94","0.94"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ipc-run/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ipc-run/README.html
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

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-ipc-run

   and update with::

      mamba update perl-ipc-run

  To create a new environment, run::

      mamba create --name myenvname perl-ipc-run

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
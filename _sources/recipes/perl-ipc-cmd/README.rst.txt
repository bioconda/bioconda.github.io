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
      
      

      ``1.04-0``,  ``1.02-1``,  ``1.02-0``,  ``1.00-1``,  ``1.00-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-extutils-makemaker: 
   :depends perl-file-temp: 
   :depends perl-locale-maketext-simple: 
   :depends perl-module-load-conditional: 
   :depends perl-params-check: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-ipc-cmd

   and update with::

      mamba update perl-ipc-cmd

  To create a new environment, run::

      mamba create --name myenvname perl-ipc-cmd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.04","1.02","1.02","1.00","1.00"];
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
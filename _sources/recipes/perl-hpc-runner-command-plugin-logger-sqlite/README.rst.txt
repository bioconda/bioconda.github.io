:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-hpc-runner-command-plugin-logger-sqlite'
.. highlight: bash

perl-hpc-runner-command-plugin-logger-sqlite
============================================

.. conda:recipe:: perl-hpc-runner-command-plugin-logger-sqlite/0.0.3
   :replaces_section_title:
   :noindex:

   Log HPC\:\:Runner workflows to a sqlite DB.

   :homepage: https://github.com/biosails/HPC-Runner-Command-Plugin-Logger-Sqlite
   :license: perl_5
   :recipe: /`perl-hpc-runner-command-plugin-logger-sqlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hpc-runner-command-plugin-logger-sqlite>`_/`0.0.3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hpc-runner-command-plugin-logger-sqlite/0.0.3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hpc-runner-command-plugin-logger-sqlite/0.0.3/meta.yaml>`_

   


.. conda:package:: perl-hpc-runner-command-plugin-logger-sqlite

   |downloads_perl-hpc-runner-command-plugin-logger-sqlite| |docker_perl-hpc-runner-command-plugin-logger-sqlite|

   :versions:
      
      

      ``0.0.3-3``,  ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-base: 
   :depends perl-clone: 
   :depends perl-datetime: 
   :depends perl-dbd-sqlite: 
   :depends perl-dbi: 
   :depends perl-hpc-runner-command: 
   :depends perl-json: 
   :depends perl-json-xs: 
   :depends perl-list-uniq: 
   :depends perl-log-log4perl: 
   :depends perl-params-validate: 
   :depends perl-text-asciitable: 
   :depends sqlite: ``>=3.37.0,<4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-hpc-runner-command-plugin-logger-sqlite

   and update with::

      mamba update perl-hpc-runner-command-plugin-logger-sqlite

  To create a new environment, run::

      mamba create --name myenvname perl-hpc-runner-command-plugin-logger-sqlite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-hpc-runner-command-plugin-logger-sqlite:<tag>

   (see `perl-hpc-runner-command-plugin-logger-sqlite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-hpc-runner-command-plugin-logger-sqlite| image:: https://img.shields.io/conda/dn/bioconda/perl-hpc-runner-command-plugin-logger-sqlite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-hpc-runner-command-plugin-logger-sqlite
   :alt:   (downloads)
.. |docker_perl-hpc-runner-command-plugin-logger-sqlite| image:: https://quay.io/repository/biocontainers/perl-hpc-runner-command-plugin-logger-sqlite/status
   :target: https://quay.io/repository/biocontainers/perl-hpc-runner-command-plugin-logger-sqlite
.. _`perl-hpc-runner-command-plugin-logger-sqlite/tags`: https://quay.io/repository/biocontainers/perl-hpc-runner-command-plugin-logger-sqlite?tab=tags


.. raw:: html

    <script>
        var package = "perl-hpc-runner-command-plugin-logger-sqlite";
        var versions = ["0.0.3","0.0.3","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-hpc-runner-command-plugin-logger-sqlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-hpc-runner-command-plugin-logger-sqlite/README.html
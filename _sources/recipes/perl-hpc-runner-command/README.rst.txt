:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-hpc-runner-command'
.. highlight: bash

perl-hpc-runner-command
=======================

.. conda:recipe:: perl-hpc-runner-command/3.2.13
   :replaces_section_title:
   :noindex:

   Create composable bioinformatics hpc analyses.

   :homepage: https://github.com/biosails/HPC-Runner-Command
   :license: perl_5
   :recipe: /`perl-hpc-runner-command <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hpc-runner-command>`_/`3.2.13 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hpc-runner-command/3.2.13>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hpc-runner-command/3.2.13/meta.yaml>`_

   


.. conda:package:: perl-hpc-runner-command

   |downloads_perl-hpc-runner-command| |docker_perl-hpc-runner-command|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.13-2</code>,  <code>3.2.13-1</code>,  <code>3.2.13-0</code>,  <code>3.2.11-0</code>,  <code>3.2.10-0</code>,  <code>3.2.9-0</code>,  <code>3.2.8-0</code>,  <code>3.2.7-0</code>,  <code>3.2.6-0</code>,  </span></summary>
      

      ``3.2.13-2``,  ``3.2.13-1``,  ``3.2.13-0``,  ``3.2.11-0``,  ``3.2.10-0``,  ``3.2.9-0``,  ``3.2.8-0``,  ``3.2.7-0``,  ``3.2.6-0``,  ``3.2.5-0``,  ``3.2.4-0``,  ``3.2.2-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.4-1``,  ``3.1.4-0``,  ``3.1.1-0``,  ``3.0.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-algorithm-dependency: 
   :depends perl-app-cpanminus: 
   :depends perl-archive-tar: 
   :depends perl-archive-tar-wrapper: 
   :depends perl-array-compare: 
   :depends perl-biosails: 
   :depends perl-data-uuid: 
   :depends perl-datetime: 
   :depends perl-dbm-deep: 
   :depends perl-file-find-rule: 
   :depends perl-file-homedir: 
   :depends perl-file-path: 
   :depends perl-file-slurp: 
   :depends perl-git-wrapper: 
   :depends perl-git-wrapper-plus: 
   :depends perl-io-interactive: 
   :depends perl-json: 
   :depends perl-json-xs: 
   :depends perl-list-moreutils: ``>=0.428``
   :depends perl-list-uniq: 
   :depends perl-log-log4perl: 
   :depends perl-mce: 
   :depends perl-moose: 
   :depends perl-moosex-app: 
   :depends perl-moosex-app-role-log4perl: 
   :depends perl-moosex-getopt: 
   :depends perl-moosex-nonmoose: 
   :depends perl-moosex-types: 
   :depends perl-moosex-types-path-tiny: 
   :depends perl-namespace-autoclean: 
   :depends perl-number-compare: 
   :depends perl-params-validate: 
   :depends perl-path-tiny: 
   :depends perl-slurp: 
   :depends perl-sort-versions: 
   :depends perl-string-approx: 
   :depends perl-template-toolkit: 
   :depends perl-text-ansitable: 
   :depends perl-text-asciitable: 
   :depends perl-try-tiny: 
   :depends perl-type-tiny: 
   :depends perl-version-next: 
   :depends perl-yaml: 
   :depends perl-yaml-libyaml: 
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

      mamba install perl-hpc-runner-command

   and update with::

      mamba update perl-hpc-runner-command

  To create a new environment, run::

      mamba create --name myenvname perl-hpc-runner-command

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-hpc-runner-command:<tag>

   (see `perl-hpc-runner-command/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-hpc-runner-command| image:: https://img.shields.io/conda/dn/bioconda/perl-hpc-runner-command.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-hpc-runner-command
   :alt:   (downloads)
.. |docker_perl-hpc-runner-command| image:: https://quay.io/repository/biocontainers/perl-hpc-runner-command/status
   :target: https://quay.io/repository/biocontainers/perl-hpc-runner-command
.. _`perl-hpc-runner-command/tags`: https://quay.io/repository/biocontainers/perl-hpc-runner-command?tab=tags


.. raw:: html

    <script>
        var package = "perl-hpc-runner-command";
        var versions = ["3.2.13","3.2.13","3.2.13","3.2.11","3.2.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-hpc-runner-command/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-hpc-runner-command/README.html
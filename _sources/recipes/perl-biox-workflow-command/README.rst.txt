:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-biox-workflow-command'
.. highlight: bash

perl-biox-workflow-command
==========================

.. conda:recipe:: perl-biox-workflow-command
   :replaces_section_title:
   :noindex:

   Opinionated Bioinformatics Genomics Workflow Creator

   :homepage: https://github.com/biosails/BioX-Workflow-Command
   :license: perl_5
   :recipe: /`perl-biox-workflow-command <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biox-workflow-command>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biox-workflow-command/meta.yaml>`_

   


.. conda:package:: perl-biox-workflow-command

   |downloads_perl-biox-workflow-command| |docker_perl-biox-workflow-command|

   :versions:
      
      

      ``2.4.1-1``,  ``2.4.1-0``,  ``2.3.2-0``,  ``2.3.0-0``,  ``2.2.3-0``,  ``2.2.1-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-algorithm-dependency: 
   :depends perl-app-cpanminus: 
   :depends perl-biosails: 
   :depends perl-class-load: 
   :depends perl-clone: 
   :depends perl-config-any: 
   :depends perl-data-walk: 
   :depends perl-datetime: 
   :depends perl-datetime-format-strptime: 
   :depends perl-dbm-deep: 
   :depends perl-escape-houdini: 
   :depends perl-file-details: 
   :depends perl-file-find-rule: 
   :depends perl-file-path: 
   :depends perl-file-slurp: 
   :depends perl-git-wrapper: 
   :depends perl-git-wrapper-plus: 
   :depends perl-hash-merge: 
   :depends perl-io-interactive: 
   :depends perl-json: 
   :depends perl-list-compare: 
   :depends perl-list-moreutils: ``>=0.428``
   :depends perl-list-someutils: 
   :depends perl-list-uniq: 
   :depends perl-log-log4perl: 
   :depends perl-mce-shared: 
   :depends perl-moose: 
   :depends perl-moosex-app: ``1.39``
   :depends perl-moosex-app-role-log4perl: 
   :depends perl-moosex-getopt: 
   :depends perl-moosex-types: 
   :depends perl-moosex-types-path-tiny: 
   :depends perl-namespace-autoclean: 
   :depends perl-params-validate: 
   :depends perl-path-tiny: 
   :depends perl-safe: 
   :depends perl-string-approx: 
   :depends perl-test2: 
   :depends perl-text-asciitable: 
   :depends perl-text-template: 
   :depends perl-try-tiny: 
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

      mamba install perl-biox-workflow-command

   and update with::

      mamba update perl-biox-workflow-command

  To create a new environment, run::

      mamba create --name myenvname perl-biox-workflow-command

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-biox-workflow-command:<tag>

   (see `perl-biox-workflow-command/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-biox-workflow-command| image:: https://img.shields.io/conda/dn/bioconda/perl-biox-workflow-command.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-biox-workflow-command
   :alt:   (downloads)
.. |docker_perl-biox-workflow-command| image:: https://quay.io/repository/biocontainers/perl-biox-workflow-command/status
   :target: https://quay.io/repository/biocontainers/perl-biox-workflow-command
.. _`perl-biox-workflow-command/tags`: https://quay.io/repository/biocontainers/perl-biox-workflow-command?tab=tags


.. raw:: html

    <script>
        var package = "perl-biox-workflow-command";
        var versions = ["2.4.1","2.4.1","2.3.2","2.3.0","2.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-biox-workflow-command/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-biox-workflow-command/README.html
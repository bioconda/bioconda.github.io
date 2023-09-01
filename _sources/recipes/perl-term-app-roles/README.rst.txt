:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-app-roles'
.. highlight: bash

perl-term-app-roles
===================

.. conda:recipe:: perl-term-app-roles
   :replaces_section_title:
   :noindex:

   Collection of roles for terminal\-based application

   :homepage: https://metacpan.org/release/Term-App-Roles
   :license: perl_5
   :recipe: /`perl-term-app-roles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-app-roles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-app-roles/meta.yaml>`_

   


.. conda:package:: perl-term-app-roles

   |downloads_perl-term-app-roles| |docker_perl-term-app-roles|

   :versions:
      
      

      ``0.031-0``,  ``0.030-1``,  ``0.030-0``,  ``0.02-0``,  ``0.01-2``,  ``0.01-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-moo: 
   :depends perl-term-detect-software: 
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

      mamba install perl-term-app-roles

   and update with::

      mamba update perl-term-app-roles

  To create a new environment, run::

      mamba create --name myenvname perl-term-app-roles

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-term-app-roles:<tag>

   (see `perl-term-app-roles/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-term-app-roles| image:: https://img.shields.io/conda/dn/bioconda/perl-term-app-roles.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-term-app-roles
   :alt:   (downloads)
.. |docker_perl-term-app-roles| image:: https://quay.io/repository/biocontainers/perl-term-app-roles/status
   :target: https://quay.io/repository/biocontainers/perl-term-app-roles
.. _`perl-term-app-roles/tags`: https://quay.io/repository/biocontainers/perl-term-app-roles?tab=tags


.. raw:: html

    <script>
        var package = "perl-term-app-roles";
        var versions = ["0.031","0.030","0.030","0.02","0.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-app-roles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-app-roles/README.html
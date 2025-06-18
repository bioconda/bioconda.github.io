:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-alien-build-plugin-download-gitlab'
.. highlight: bash

perl-alien-build-plugin-download-gitlab
=======================================

.. conda:recipe:: perl-alien-build-plugin-download-gitlab
   :replaces_section_title:
   :noindex:

   Alien\:\:Build plugin to download from GitLab

   :homepage: https://metacpan.org/pod/Alien::Build::Plugin::Download::GitLab
   :developer docs: https://github.com/PerlAlien/Alien-Build-Plugin-Download-GitLab
   :license: Perl_5
   :recipe: /`perl-alien-build-plugin-download-gitlab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-alien-build-plugin-download-gitlab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-alien-build-plugin-download-gitlab/meta.yaml>`_

   


.. conda:package:: perl-alien-build-plugin-download-gitlab

   |downloads_perl-alien-build-plugin-download-gitlab| |docker_perl-alien-build-plugin-download-gitlab|

   :versions:
      
      

      ``0.01-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-alien-build: 
   :depends perl-uri: 
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

      mamba install perl-alien-build-plugin-download-gitlab

   and update with::

      mamba update perl-alien-build-plugin-download-gitlab

  To create a new environment, run::

      mamba create --name myenvname perl-alien-build-plugin-download-gitlab

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-alien-build-plugin-download-gitlab:<tag>

   (see `perl-alien-build-plugin-download-gitlab/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-alien-build-plugin-download-gitlab| image:: https://img.shields.io/conda/dn/bioconda/perl-alien-build-plugin-download-gitlab.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-alien-build-plugin-download-gitlab
   :alt:   (downloads)
.. |docker_perl-alien-build-plugin-download-gitlab| image:: https://quay.io/repository/biocontainers/perl-alien-build-plugin-download-gitlab/status
   :target: https://quay.io/repository/biocontainers/perl-alien-build-plugin-download-gitlab
.. _`perl-alien-build-plugin-download-gitlab/tags`: https://quay.io/repository/biocontainers/perl-alien-build-plugin-download-gitlab?tab=tags


.. raw:: html

    <script>
        var package = "perl-alien-build-plugin-download-gitlab";
        var versions = ["0.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-alien-build-plugin-download-gitlab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-alien-build-plugin-download-gitlab/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-sharedir-install'
.. highlight: bash

perl-file-sharedir-install
==========================

.. conda:recipe:: perl-file-sharedir-install
   :replaces_section_title:
   :noindex:

   Install shared files

   :homepage: https://github.com/Perl-Toolchain-Gang/File-ShareDir-Install
   :license: perl_5
   :recipe: /`perl-file-sharedir-install <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-sharedir-install>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-sharedir-install/meta.yaml>`_

   


.. conda:package:: perl-file-sharedir-install

   |downloads_perl-file-sharedir-install| |docker_perl-file-sharedir-install|

   :versions:
      
      

      ``0.13-1``,  ``0.13-0``,  ``0.10-4``,  ``0.10-3``,  ``0.10-2``,  ``0.10-1``,  ``0.10-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
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

      mamba install perl-file-sharedir-install

   and update with::

      mamba update perl-file-sharedir-install

  To create a new environment, run::

      mamba create --name myenvname perl-file-sharedir-install

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-sharedir-install:<tag>

   (see `perl-file-sharedir-install/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-sharedir-install| image:: https://img.shields.io/conda/dn/bioconda/perl-file-sharedir-install.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-sharedir-install
   :alt:   (downloads)
.. |docker_perl-file-sharedir-install| image:: https://quay.io/repository/biocontainers/perl-file-sharedir-install/status
   :target: https://quay.io/repository/biocontainers/perl-file-sharedir-install
.. _`perl-file-sharedir-install/tags`: https://quay.io/repository/biocontainers/perl-file-sharedir-install?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-sharedir-install";
        var versions = ["0.13","0.13","0.10","0.10","0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-sharedir-install/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-sharedir-install/README.html
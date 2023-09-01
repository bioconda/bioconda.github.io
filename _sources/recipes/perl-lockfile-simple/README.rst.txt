:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-lockfile-simple'
.. highlight: bash

perl-lockfile-simple
====================

.. conda:recipe:: perl-lockfile-simple
   :replaces_section_title:
   :noindex:

   simple file locking scheme

   :homepage: http://metacpan.org/pod/LockFile::Simple
   :license: unknown
   :recipe: /`perl-lockfile-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lockfile-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lockfile-simple/meta.yaml>`_

   


.. conda:package:: perl-lockfile-simple

   |downloads_perl-lockfile-simple| |docker_perl-lockfile-simple|

   :versions:
      
      

      ``0.208-1``,  ``0.208-0``

      

   
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

      mamba install perl-lockfile-simple

   and update with::

      mamba update perl-lockfile-simple

  To create a new environment, run::

      mamba create --name myenvname perl-lockfile-simple

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-lockfile-simple:<tag>

   (see `perl-lockfile-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-lockfile-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-lockfile-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-lockfile-simple
   :alt:   (downloads)
.. |docker_perl-lockfile-simple| image:: https://quay.io/repository/biocontainers/perl-lockfile-simple/status
   :target: https://quay.io/repository/biocontainers/perl-lockfile-simple
.. _`perl-lockfile-simple/tags`: https://quay.io/repository/biocontainers/perl-lockfile-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-lockfile-simple";
        var versions = ["0.208","0.208"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-lockfile-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-lockfile-simple/README.html
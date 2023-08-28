:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mojo-sqlite'
.. highlight: bash

perl-mojo-sqlite
================

.. conda:recipe:: perl-mojo-sqlite
   :replaces_section_title:
   :noindex:

   A tiny Mojolicious wrapper for SQLite

   :homepage: https://github.com/Grinnz/Mojo-SQLite
   :license: Artistic-2.0
   :recipe: /`perl-mojo-sqlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mojo-sqlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mojo-sqlite/meta.yaml>`_

   


.. conda:package:: perl-mojo-sqlite

   |downloads_perl-mojo-sqlite| |docker_perl-mojo-sqlite|

   :versions:
      
      

      ``3.009-0``

      

   
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-dbd-sqlite: 
   :depends perl-dbi: 
   :depends perl-mojolicious: 
   :depends perl-sql-abstract-pg: 
   :depends perl-uri: 
   :depends perl-uri-db: 
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

      mamba install perl-mojo-sqlite

   and update with::

      mamba update perl-mojo-sqlite

  To create a new environment, run::

      mamba create --name myenvname perl-mojo-sqlite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-mojo-sqlite:<tag>

   (see `perl-mojo-sqlite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mojo-sqlite| image:: https://img.shields.io/conda/dn/bioconda/perl-mojo-sqlite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mojo-sqlite
   :alt:   (downloads)
.. |docker_perl-mojo-sqlite| image:: https://quay.io/repository/biocontainers/perl-mojo-sqlite/status
   :target: https://quay.io/repository/biocontainers/perl-mojo-sqlite
.. _`perl-mojo-sqlite/tags`: https://quay.io/repository/biocontainers/perl-mojo-sqlite?tab=tags


.. raw:: html

    <script>
        var package = "perl-mojo-sqlite";
        var versions = ["3.009"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mojo-sqlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mojo-sqlite/README.html
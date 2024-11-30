:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mojo-pg'
.. highlight: bash

perl-mojo-pg
============

.. conda:recipe:: perl-mojo-pg
   :replaces_section_title:
   :noindex:

   Mojolicious PostgreSQL

   :homepage: https://mojolicious.org
   :license: Artistic-2.0
   :recipe: /`perl-mojo-pg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mojo-pg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mojo-pg/meta.yaml>`_

   


.. conda:package:: perl-mojo-pg

   |downloads_perl-mojo-pg| |docker_perl-mojo-pg|

   :versions:
      
      

      ``4.27-0``

      

   
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-dbd-pg: 
   :depends perl-mojolicious: 
   :depends perl-sql-abstract-pg: 
   :depends perl-sql-statement: 
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

      mamba install perl-mojo-pg

   and update with::

      mamba update perl-mojo-pg

  To create a new environment, run::

      mamba create --name myenvname perl-mojo-pg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-mojo-pg:<tag>

   (see `perl-mojo-pg/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mojo-pg| image:: https://img.shields.io/conda/dn/bioconda/perl-mojo-pg.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mojo-pg
   :alt:   (downloads)
.. |docker_perl-mojo-pg| image:: https://quay.io/repository/biocontainers/perl-mojo-pg/status
   :target: https://quay.io/repository/biocontainers/perl-mojo-pg
.. _`perl-mojo-pg/tags`: https://quay.io/repository/biocontainers/perl-mojo-pg?tab=tags


.. raw:: html

    <script>
        var package = "perl-mojo-pg";
        var versions = ["4.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mojo-pg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mojo-pg/README.html
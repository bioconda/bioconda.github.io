:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sql-statement'
.. highlight: bash

perl-sql-statement
==================

.. conda:recipe:: perl-sql-statement
   :replaces_section_title:
   :noindex:

   SQL parsing and processing engine

   :homepage: https://metacpan.org/release/SQL-Statement
   :license: perl_5
   :recipe: /`perl-sql-statement <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sql-statement>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sql-statement/meta.yaml>`_

   


.. conda:package:: perl-sql-statement

   |downloads_perl-sql-statement| |docker_perl-sql-statement|

   :versions:
      
      

      ``1.414-0``,  ``1.412-1``,  ``1.412-0``,  ``1.407-1``,  ``1.407-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-clone: 
   :depends perl-math-base-convert: 
   :depends perl-module-runtime: 
   :depends perl-params-util: 
   :depends perl-text-soundex: 
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

      mamba install perl-sql-statement

   and update with::

      mamba update perl-sql-statement

  To create a new environment, run::

      mamba create --name myenvname perl-sql-statement

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sql-statement:<tag>

   (see `perl-sql-statement/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sql-statement| image:: https://img.shields.io/conda/dn/bioconda/perl-sql-statement.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sql-statement
   :alt:   (downloads)
.. |docker_perl-sql-statement| image:: https://quay.io/repository/biocontainers/perl-sql-statement/status
   :target: https://quay.io/repository/biocontainers/perl-sql-statement
.. _`perl-sql-statement/tags`: https://quay.io/repository/biocontainers/perl-sql-statement?tab=tags


.. raw:: html

    <script>
        var package = "perl-sql-statement";
        var versions = ["1.414","1.412","1.412","1.407","1.407"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sql-statement/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sql-statement/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sql-abstract'
.. highlight: bash

perl-sql-abstract
=================

.. conda:recipe:: perl-sql-abstract
   :replaces_section_title:
   :noindex:

   Generate SQL from Perl data structures

   :homepage: http://metacpan.org/pod/SQL-Abstract
   :license: GPL-1.0-or-later OR Artistic-1.0-Perl
   :recipe: /`perl-sql-abstract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sql-abstract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sql-abstract/meta.yaml>`_

   


.. conda:package:: perl-sql-abstract

   |downloads_perl-sql-abstract| |docker_perl-sql-abstract|

   :versions:
      
      

      ``2.000001-0``

      

   
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-data-dumper: 
   :depends perl-data-dumper-concise: 
   :depends perl-hash-merge: 
   :depends perl-module-runtime: 
   :depends perl-moo: 
   :depends perl-mro-compat: 
   :depends perl-sub-quote: 
   :depends perl-test-deep: 
   :depends perl-test-exception: 
   :depends perl-test-warn: 
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

      mamba install perl-sql-abstract

   and update with::

      mamba update perl-sql-abstract

  To create a new environment, run::

      mamba create --name myenvname perl-sql-abstract

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-sql-abstract:<tag>

   (see `perl-sql-abstract/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sql-abstract| image:: https://img.shields.io/conda/dn/bioconda/perl-sql-abstract.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sql-abstract
   :alt:   (downloads)
.. |docker_perl-sql-abstract| image:: https://quay.io/repository/biocontainers/perl-sql-abstract/status
   :target: https://quay.io/repository/biocontainers/perl-sql-abstract
.. _`perl-sql-abstract/tags`: https://quay.io/repository/biocontainers/perl-sql-abstract?tab=tags


.. raw:: html

    <script>
        var package = "perl-sql-abstract";
        var versions = ["2.000001"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sql-abstract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sql-abstract/README.html
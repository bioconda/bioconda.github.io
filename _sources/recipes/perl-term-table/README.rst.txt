:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-table'
.. highlight: bash

perl-term-table
===============

.. conda:recipe:: perl-term-table
   :replaces_section_title:
   :noindex:

   Format a header and rows into a table

   :homepage: http://metacpan.org/pod/Term::Table
   :license: perl_5
   :recipe: /`perl-term-table <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-table>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-table/meta.yaml>`_

   


.. conda:package:: perl-term-table

   |downloads_perl-term-table| |docker_perl-term-table|

   :versions:
      
      

      ``0.022-0``,  ``0.016-0``,  ``0.013-1``,  ``0.013-0``,  ``0.012-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-importer: 
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

      mamba install perl-term-table

   and update with::

      mamba update perl-term-table

  To create a new environment, run::

      mamba create --name myenvname perl-term-table

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-term-table:<tag>

   (see `perl-term-table/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-term-table| image:: https://img.shields.io/conda/dn/bioconda/perl-term-table.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-term-table
   :alt:   (downloads)
.. |docker_perl-term-table| image:: https://quay.io/repository/biocontainers/perl-term-table/status
   :target: https://quay.io/repository/biocontainers/perl-term-table
.. _`perl-term-table/tags`: https://quay.io/repository/biocontainers/perl-term-table?tab=tags


.. raw:: html

    <script>
        var package = "perl-term-table";
        var versions = ["0.022","0.016","0.013","0.013","0.012"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-table/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-table/README.html
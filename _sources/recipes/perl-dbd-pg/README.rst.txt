:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dbd-pg'
.. highlight: bash

perl-dbd-pg
===========

.. conda:recipe:: perl-dbd-pg
   :replaces_section_title:
   :noindex:

   DBI PostgreSQL interface

   :homepage: http://search.cpan.org/dist/DBD-Pg/
   :license: perl_5
   :recipe: /`perl-dbd-pg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-pg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-pg/meta.yaml>`_

   


.. conda:package:: perl-dbd-pg

   |downloads_perl-dbd-pg| |docker_perl-dbd-pg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.18.0-1</code>,  <code>3.18.0-0</code>,  <code>3.16.0-3</code>,  <code>3.16.0-2</code>,  <code>3.16.0-1</code>,  <code>3.16.0-0</code>,  <code>3.15.1-1</code>,  <code>3.15.1-0</code>,  <code>3.15.0-2</code>,  </span></summary>
      

      ``3.18.0-1``,  ``3.18.0-0``,  ``3.16.0-3``,  ``3.16.0-2``,  ``3.16.0-1``,  ``3.16.0-0``,  ``3.15.1-1``,  ``3.15.1-0``,  ``3.15.0-2``,  ``3.15.0-1``,  ``3.15.0-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.4-0``,  ``3.5.3-1``,  ``3.5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libpq: ``>=16.6,<17.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-dbi: 
   :depends postgresql: 
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

      mamba install perl-dbd-pg

   and update with::

      mamba update perl-dbd-pg

  To create a new environment, run::

      mamba create --name myenvname perl-dbd-pg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-dbd-pg:<tag>

   (see `perl-dbd-pg/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-dbd-pg| image:: https://img.shields.io/conda/dn/bioconda/perl-dbd-pg.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dbd-pg
   :alt:   (downloads)
.. |docker_perl-dbd-pg| image:: https://quay.io/repository/biocontainers/perl-dbd-pg/status
   :target: https://quay.io/repository/biocontainers/perl-dbd-pg
.. _`perl-dbd-pg/tags`: https://quay.io/repository/biocontainers/perl-dbd-pg?tab=tags


.. raw:: html

    <script>
        var package = "perl-dbd-pg";
        var versions = ["3.18.0","3.18.0","3.16.0","3.16.0","3.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbd-pg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbd-pg/README.html
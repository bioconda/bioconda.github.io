:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dbd-sqlite'
.. highlight: bash

perl-dbd-sqlite
===============

.. conda:recipe:: perl-dbd-sqlite
   :replaces_section_title:
   :noindex:

   Self Contained RDBMS in a DBI Driver

   :homepage: https://metacpan.org/pod/DBD::SQLite
   :license: Perl
   :recipe: /`perl-dbd-sqlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-sqlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-sqlite/meta.yaml>`_

   


.. conda:package:: perl-dbd-sqlite

   |downloads_perl-dbd-sqlite| |docker_perl-dbd-sqlite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.76-1</code>,  <code>1.76-0</code>,  <code>1.72-2</code>,  <code>1.72-1</code>,  <code>1.72-0</code>,  <code>1.70-2</code>,  <code>1.70-1</code>,  <code>1.70-0</code>,  <code>1.64-1</code>,  </span></summary>
      

      ``1.76-1``,  ``1.76-0``,  ``1.72-2``,  ``1.72-1``,  ``1.72-0``,  ``1.70-2``,  ``1.70-1``,  ``1.70-0``,  ``1.64-1``,  ``1.64-0``,  ``1.62-1``,  ``1.62-0``,  ``1.60-0``,  ``1.58-0``,  ``1.50-3``,  ``1.50-2``,  ``1.50-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-dbi: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-dbd-sqlite

   and update with::

      mamba update perl-dbd-sqlite

  To create a new environment, run::

      mamba create --name myenvname perl-dbd-sqlite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-dbd-sqlite:<tag>

   (see `perl-dbd-sqlite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-dbd-sqlite| image:: https://img.shields.io/conda/dn/bioconda/perl-dbd-sqlite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dbd-sqlite
   :alt:   (downloads)
.. |docker_perl-dbd-sqlite| image:: https://quay.io/repository/biocontainers/perl-dbd-sqlite/status
   :target: https://quay.io/repository/biocontainers/perl-dbd-sqlite
.. _`perl-dbd-sqlite/tags`: https://quay.io/repository/biocontainers/perl-dbd-sqlite?tab=tags


.. raw:: html

    <script>
        var package = "perl-dbd-sqlite";
        var versions = ["1.76","1.76","1.72","1.72","1.72"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbd-sqlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbd-sqlite/README.html
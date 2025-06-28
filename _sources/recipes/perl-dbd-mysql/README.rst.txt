:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dbd-mysql'
.. highlight: bash

perl-dbd-mysql
==============

.. conda:recipe:: perl-dbd-mysql
   :replaces_section_title:
   :noindex:

   A MySQL driver for the Perl5 Database Interface \(DBI\)

   :homepage: http://dbi.perl.org/
   :license: perl_5
   :recipe: /`perl-dbd-mysql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-mysql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-mysql/meta.yaml>`_
   :links: biotools: :biotools:`dbd`, doi: :doi:`10.1093/nar/gkm964`

   


.. conda:package:: perl-dbd-mysql

   |downloads_perl-dbd-mysql| |docker_perl-dbd-mysql|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.050-3</code>,  <code>4.050-2</code>,  <code>4.050-1</code>,  <code>4.050-0</code>,  <code>4.046-4</code>,  <code>4.046-3</code>,  <code>4.046-2</code>,  <code>4.046-1</code>,  <code>4.046-0</code>,  </span></summary>
      

      ``4.050-3``,  ``4.050-2``,  ``4.050-1``,  ``4.050-0``,  ``4.046-4``,  ``4.046-3``,  ``4.046-2``,  ``4.046-1``,  ``4.046-0``,  ``4.033-3``,  ``4.033-2``,  ``4.033-1``,  ``4.033-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-dbi: 
   :depends perl-devel-checklib: ``1.16.*``
   :depends perl-time-hires: ``>=1.9764,<2.0a0``
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

      mamba install perl-dbd-mysql

   and update with::

      mamba update perl-dbd-mysql

  To create a new environment, run::

      mamba create --name myenvname perl-dbd-mysql

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-dbd-mysql:<tag>

   (see `perl-dbd-mysql/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-dbd-mysql| image:: https://img.shields.io/conda/dn/bioconda/perl-dbd-mysql.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dbd-mysql
   :alt:   (downloads)
.. |docker_perl-dbd-mysql| image:: https://quay.io/repository/biocontainers/perl-dbd-mysql/status
   :target: https://quay.io/repository/biocontainers/perl-dbd-mysql
.. _`perl-dbd-mysql/tags`: https://quay.io/repository/biocontainers/perl-dbd-mysql?tab=tags


.. raw:: html

    <script>
        var package = "perl-dbd-mysql";
        var versions = ["4.050","4.050","4.050","4.050","4.046"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbd-mysql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbd-mysql/README.html
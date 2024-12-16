:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-stitch'
.. highlight: bash

r-stitch
========

.. conda:recipe:: r-stitch
   :replaces_section_title:
   :noindex:

   STITCH \- Sequencing To Imputation Through Constructing Haplotypes.

   :homepage: https://github.com/rwdavies/stitch
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-stitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-stitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-stitch/meta.yaml>`_

   


.. conda:package:: r-stitch

   |downloads_r-stitch| |docker_r-stitch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.2-1</code>,  <code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.11-0</code>,  <code>1.6.10-0</code>,  <code>1.6.8-2</code>,  <code>1.6.8-1</code>,  <code>1.6.8-0</code>,  </span></summary>
      

      ``1.7.2-1``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.11-0``,  ``1.6.10-0``,  ``1.6.8-2``,  ``1.6.8-1``,  ``1.6.8-0``,  ``1.6.6-4``,  ``1.6.6-3``,  ``1.6.6-2``,  ``1.6.6-1``,  ``1.6.6-0``,  ``1.6.5-3``,  ``1.6.5-2``,  ``1.6.5-0``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.7-0``,  ``1.5.5-0``,  ``1.5.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends gmp: ``>=6.3.0,<7.0a0``
   :depends htslib: ``>=1.4``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.6.3,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends mpc: ``>=1.3.1,<2.0a0``
   :depends mpfr: ``>=4.2.1,<5.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: ``>=1.11.8``
   :depends r-optparse: 
   :depends r-rcpp: ``>=0.12.18``
   :depends r-rcpparmadillo: ``>=0.8.600.0.0``
   :depends r-rrbgen: ``>=0.0.6``
   :depends r-rrbgen: ``>=0.0.6,<0.1.0a0``
   :depends r-testthat: ``>=2.0.0``
   :depends rsync: 
   :depends samtools: ``>=1.4``
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

      mamba install r-stitch

   and update with::

      mamba update r-stitch

  To create a new environment, run::

      mamba create --name myenvname r-stitch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-stitch:<tag>

   (see `r-stitch/tags`_ for valid values for ``<tag>``)


.. |downloads_r-stitch| image:: https://img.shields.io/conda/dn/bioconda/r-stitch.svg?style=flat
   :target: https://anaconda.org/bioconda/r-stitch
   :alt:   (downloads)
.. |docker_r-stitch| image:: https://quay.io/repository/biocontainers/r-stitch/status
   :target: https://quay.io/repository/biocontainers/r-stitch
.. _`r-stitch/tags`: https://quay.io/repository/biocontainers/r-stitch?tab=tags


.. raw:: html

    <script>
        var package = "r-stitch";
        var versions = ["1.7.2","1.7.2","1.7.1","1.7.0","1.6.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-stitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-stitch/README.html
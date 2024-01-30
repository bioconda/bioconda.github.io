:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-quilt'
.. highlight: bash

r-quilt
=======

.. conda:recipe:: r-quilt
   :replaces_section_title:
   :noindex:

   Read aware low coverage whole genome sequence imputation from a reference panel

   :homepage: https://github.com/rwdavies/quilt
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-quilt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-quilt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-quilt/meta.yaml>`_

   


.. conda:package:: r-quilt

   |downloads_r-quilt| |docker_r-quilt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.5-0</code>,  <code>1.0.4-3</code>,  <code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-3</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  </span></summary>
      

      ``1.0.5-0``,  ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``0.1.9-2``,  ``0.1.9-1``,  ``0.1.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends gmp: ``>=6.2.1,<7.0a0``
   :depends htslib: ``>=1.18,<1.20.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends mpc: ``>=1.1.0``
   :depends mpc: ``>=1.3.1,<2.0a0``
   :depends mpfr: ``>=4.2.0,<5.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: ``>=1.11.8``
   :depends r-optparse: 
   :depends r-rcpp: ``>=0.12.18``
   :depends r-rcpparmadillo: ``>=0.8.600.0.0``
   :depends r-rrbgen: ``>=0.0.6``
   :depends r-stitch: ``>=1.6.6``
   :depends r-testthat: ``>=2.0.0``
   :depends rsync: 
   :depends samtools: ``>=1.4``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
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

      mamba install r-quilt

   and update with::

      mamba update r-quilt

  To create a new environment, run::

      mamba create --name myenvname r-quilt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-quilt:<tag>

   (see `r-quilt/tags`_ for valid values for ``<tag>``)


.. |downloads_r-quilt| image:: https://img.shields.io/conda/dn/bioconda/r-quilt.svg?style=flat
   :target: https://anaconda.org/bioconda/r-quilt
   :alt:   (downloads)
.. |docker_r-quilt| image:: https://quay.io/repository/biocontainers/r-quilt/status
   :target: https://quay.io/repository/biocontainers/r-quilt
.. _`r-quilt/tags`: https://quay.io/repository/biocontainers/r-quilt?tab=tags


.. raw:: html

    <script>
        var package = "r-quilt";
        var versions = ["1.0.5","1.0.4","1.0.4","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-quilt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-quilt/README.html
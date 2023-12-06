:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-turbonorm'
.. highlight: bash

bioconductor-turbonorm
======================

.. conda:recipe:: bioconductor-turbonorm
   :replaces_section_title:
   :noindex:

   A fast scatterplot smoother suitable for microarray normalization

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TurboNorm.html
   :license: LGPL
   :recipe: /`bioconductor-turbonorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-turbonorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-turbonorm/meta.yaml>`_
   :links: biotools: :biotools:`turbonorm`

   A fast scatterplot smoother based on B\-splines with second\-order difference penalty. Functions for microarray normalization of single\-colour data i.e. Affymetrix\/Illumina and two\-colour data supplied as marray MarrayRaw\-objects or limma RGList\-objects are available.


.. conda:package:: bioconductor-turbonorm

   |downloads_bioconductor-turbonorm| |docker_bioconductor-turbonorm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.42.0-2</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.42.0-2``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-convert: ``>=1.78.0,<1.79.0``
   :depends bioconductor-convert: ``>=1.78.0,<1.79.0a0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends bioconductor-marray: ``>=1.80.0,<1.81.0``
   :depends bioconductor-marray: ``>=1.80.0,<1.81.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lattice: 
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

      mamba install bioconductor-turbonorm

   and update with::

      mamba update bioconductor-turbonorm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-turbonorm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-turbonorm:<tag>

   (see `bioconductor-turbonorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-turbonorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-turbonorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-turbonorm
   :alt:   (downloads)
.. |docker_bioconductor-turbonorm| image:: https://quay.io/repository/biocontainers/bioconductor-turbonorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-turbonorm
.. _`bioconductor-turbonorm/tags`: https://quay.io/repository/biocontainers/bioconductor-turbonorm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-turbonorm";
        var versions = ["1.50.0","1.48.0","1.46.0","1.46.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-turbonorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-turbonorm/README.html
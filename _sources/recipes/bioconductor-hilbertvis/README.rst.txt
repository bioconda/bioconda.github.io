:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hilbertvis'
.. highlight: bash

bioconductor-hilbertvis
=======================

.. conda:recipe:: bioconductor-hilbertvis
   :replaces_section_title:
   :noindex:

   Hilbert curve visualization

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/HilbertVis.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-hilbertvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilbertvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilbertvis/meta.yaml>`_
   :links: biotools: :biotools:`hilbertvis`, doi: :doi:`10.1093/bioinformatics/btp152`

   Functions to visualize long vectors of integer data by means of Hilbert curves


.. conda:package:: bioconductor-hilbertvis

   |downloads_bioconductor-hilbertvis| |docker_bioconductor-hilbertvis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.56.0-2</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.52.0-2</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.56.0-2``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.52.0-2``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-hilbertvis

   and update with::

      mamba update bioconductor-hilbertvis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hilbertvis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hilbertvis:<tag>

   (see `bioconductor-hilbertvis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hilbertvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hilbertvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hilbertvis
   :alt:   (downloads)
.. |docker_bioconductor-hilbertvis| image:: https://quay.io/repository/biocontainers/bioconductor-hilbertvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hilbertvis
.. _`bioconductor-hilbertvis/tags`: https://quay.io/repository/biocontainers/bioconductor-hilbertvis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hilbertvis";
        var versions = ["1.58.0","1.56.0","1.56.0","1.56.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hilbertvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hilbertvis/README.html
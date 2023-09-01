:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ebarrays'
.. highlight: bash

bioconductor-ebarrays
=====================

.. conda:recipe:: bioconductor-ebarrays
   :replaces_section_title:
   :noindex:

   Unified Approach for Simultaneous Gene Clustering and Differential Expression Identification

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/EBarrays.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ebarrays <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebarrays>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebarrays/meta.yaml>`_
   :links: biotools: :biotools:`ebarrays`, doi: :doi:`10.1111/j.1541-0420.2006.00611.x`

   EBarrays provides tools for the analysis of replicated\/unreplicated microarray data.


.. conda:package:: bioconductor-ebarrays

   |downloads_bioconductor-ebarrays| |docker_bioconductor-ebarrays|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.64.0-0</code>,  <code>2.62.0-1</code>,  <code>2.62.0-0</code>,  <code>2.58.0-2</code>,  <code>2.58.0-1</code>,  <code>2.58.0-0</code>,  <code>2.56.0-0</code>,  <code>2.54.0-1</code>,  <code>2.54.0-0</code>,  </span></summary>
      

      ``2.64.0-0``,  ``2.62.0-1``,  ``2.62.0-0``,  ``2.58.0-2``,  ``2.58.0-1``,  ``2.58.0-0``,  ``2.56.0-0``,  ``2.54.0-1``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-1``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
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

      mamba install bioconductor-ebarrays

   and update with::

      mamba update bioconductor-ebarrays

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ebarrays

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ebarrays:<tag>

   (see `bioconductor-ebarrays/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ebarrays| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ebarrays.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ebarrays
   :alt:   (downloads)
.. |docker_bioconductor-ebarrays| image:: https://quay.io/repository/biocontainers/bioconductor-ebarrays/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ebarrays
.. _`bioconductor-ebarrays/tags`: https://quay.io/repository/biocontainers/bioconductor-ebarrays?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ebarrays";
        var versions = ["2.64.0","2.62.0","2.62.0","2.58.0","2.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ebarrays/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ebarrays/README.html
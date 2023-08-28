:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hyperdraw'
.. highlight: bash

bioconductor-hyperdraw
======================

.. conda:recipe:: bioconductor-hyperdraw
   :replaces_section_title:
   :noindex:

   Visualizing Hypergaphs

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/hyperdraw.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hyperdraw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hyperdraw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hyperdraw/meta.yaml>`_
   :links: biotools: :biotools:`hyperdraw`, doi: :doi:`10.1038/nmeth.3252`

   Functions for visualizing hypergraphs.


.. conda:package:: bioconductor-hyperdraw

   |downloads_bioconductor-hyperdraw| |docker_bioconductor-hyperdraw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends bioconductor-hypergraph: ``>=1.72.0,<1.73.0``
   :depends bioconductor-rgraphviz: ``>=2.44.0,<2.45.0``
   :depends graphviz: ``>=8.1.0,<9.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-hyperdraw

   and update with::

      mamba update bioconductor-hyperdraw

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hyperdraw

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hyperdraw:<tag>

   (see `bioconductor-hyperdraw/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hyperdraw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hyperdraw.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hyperdraw
   :alt:   (downloads)
.. |docker_bioconductor-hyperdraw| image:: https://quay.io/repository/biocontainers/bioconductor-hyperdraw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hyperdraw
.. _`bioconductor-hyperdraw/tags`: https://quay.io/repository/biocontainers/bioconductor-hyperdraw?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hyperdraw";
        var versions = ["1.52.0","1.50.0","1.50.0","1.46.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hyperdraw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hyperdraw/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-graph'
.. highlight: bash

bioconductor-graph
==================

.. conda:recipe:: bioconductor-graph
   :replaces_section_title:
   :noindex:

   graph\: A package to handle graph data structures

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/graph.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-graph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graph/meta.yaml>`_
   :links: biotools: :biotools:`graph`, doi: :doi:`10.1038/nmeth.3252`

   A package that implements some simple graph handling capabilities.


.. conda:package:: bioconductor-graph

   |downloads_bioconductor-graph| |docker_bioconductor-graph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.84.0-1</code>,  <code>1.84.0-0</code>,  <code>1.80.0-1</code>,  <code>1.80.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-1</code>,  <code>1.76.0-0</code>,  <code>1.72.0-2</code>,  <code>1.72.0-1</code>,  </span></summary>
      

      ``1.84.0-1``,  ``1.84.0-0``,  ``1.80.0-1``,  ``1.80.0-0``,  ``1.78.0-0``,  ``1.76.0-1``,  ``1.76.0-0``,  ``1.72.0-2``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.60.0-0``,  ``1.58.2-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.50.0-1``,  ``1.48.0-1``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-graph

   and update with::

      mamba update bioconductor-graph

  To create a new environment, run::

      mamba create --name myenvname bioconductor-graph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-graph:<tag>

   (see `bioconductor-graph/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-graph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-graph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-graph
   :alt:   (downloads)
.. |docker_bioconductor-graph| image:: https://quay.io/repository/biocontainers/bioconductor-graph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-graph
.. _`bioconductor-graph/tags`: https://quay.io/repository/biocontainers/bioconductor-graph?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-graph";
        var versions = ["1.84.0","1.84.0","1.80.0","1.80.0","1.78.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-graph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-graph/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hypergraph'
.. highlight: bash

bioconductor-hypergraph
=======================

.. conda:recipe:: bioconductor-hypergraph
   :replaces_section_title:
   :noindex:

   A package providing hypergraph data structures

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/hypergraph.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hypergraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hypergraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hypergraph/meta.yaml>`_
   :links: biotools: :biotools:`hypergraph`, doi: :doi:`10.1038/nmeth.3252`

   A package that implements some simple capabilities for representing and manipulating hypergraphs.


.. conda:package:: bioconductor-hypergraph

   |downloads_bioconductor-hypergraph| |docker_bioconductor-hypergraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.78.0-0</code>,  <code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  </span></summary>
      

      ``1.78.0-0``,  ``1.74.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-hypergraph

   and update with::

      mamba update bioconductor-hypergraph

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hypergraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hypergraph:<tag>

   (see `bioconductor-hypergraph/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hypergraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hypergraph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hypergraph
   :alt:   (downloads)
.. |docker_bioconductor-hypergraph| image:: https://quay.io/repository/biocontainers/bioconductor-hypergraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hypergraph
.. _`bioconductor-hypergraph/tags`: https://quay.io/repository/biocontainers/bioconductor-hypergraph?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hypergraph";
        var versions = ["1.78.0","1.74.0","1.72.0","1.70.0","1.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hypergraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hypergraph/README.html
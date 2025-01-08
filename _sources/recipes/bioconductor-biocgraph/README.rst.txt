:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocgraph'
.. highlight: bash

bioconductor-biocgraph
======================

.. conda:recipe:: bioconductor-biocgraph
   :replaces_section_title:
   :noindex:

   Graph examples and use cases in Bioinformatics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/biocGraph.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocgraph/meta.yaml>`_
   :links: biotools: :biotools:`biocgraph`, doi: :doi:`10.1038/nmeth.3252`

   This package provides examples and code that make use of the different graph related packages produced by Bioconductor.


.. conda:package:: bioconductor-biocgraph

   |downloads_bioconductor-biocgraph| |docker_bioconductor-biocgraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-geneplotter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-rgraphviz: ``>=2.50.0,<2.51.0``
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

      mamba install bioconductor-biocgraph

   and update with::

      mamba update bioconductor-biocgraph

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biocgraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocgraph:<tag>

   (see `bioconductor-biocgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocgraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocgraph
   :alt:   (downloads)
.. |docker_bioconductor-biocgraph| image:: https://quay.io/repository/biocontainers/bioconductor-biocgraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocgraph
.. _`bioconductor-biocgraph/tags`: https://quay.io/repository/biocontainers/bioconductor-biocgraph?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocgraph";
        var versions = ["1.68.0","1.64.0","1.62.0","1.60.0","1.56.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocgraph/README.html
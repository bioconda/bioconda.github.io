:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kegggraph'
.. highlight: bash

bioconductor-kegggraph
======================

.. conda:recipe:: bioconductor-kegggraph
   :replaces_section_title:
   :noindex:

   KEGGgraph\: A graph approach to KEGG PATHWAY in R and Bioconductor

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/KEGGgraph.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-kegggraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kegggraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kegggraph/meta.yaml>`_
   :links: biotools: :biotools:`kegggraph`

   KEGGGraph is an interface between KEGG pathway and graph object as well as a collection of tools to analyze\, dissect and visualize these graphs. It parses the regularly updated KGML \(KEGG XML\) files into graph models maintaining all essential pathway attributes. The package offers functionalities including parsing\, graph operation\, visualization and etc.


.. conda:package:: bioconductor-kegggraph

   |downloads_bioconductor-kegggraph| |docker_bioconductor-kegggraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  </span></summary>
      

      ``1.60.0-0``,  ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.1-0``,  ``1.38.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends bioconductor-rgraphviz: ``>=2.44.0,<2.45.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcurl: 
   :depends r-xml: ``>=2.3-0``
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

      mamba install bioconductor-kegggraph

   and update with::

      mamba update bioconductor-kegggraph

  To create a new environment, run::

      mamba create --name myenvname bioconductor-kegggraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kegggraph:<tag>

   (see `bioconductor-kegggraph/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kegggraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kegggraph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kegggraph
   :alt:   (downloads)
.. |docker_bioconductor-kegggraph| image:: https://quay.io/repository/biocontainers/bioconductor-kegggraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kegggraph
.. _`bioconductor-kegggraph/tags`: https://quay.io/repository/biocontainers/bioconductor-kegggraph?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kegggraph";
        var versions = ["1.60.0","1.58.0","1.54.0","1.52.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kegggraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kegggraph/README.html
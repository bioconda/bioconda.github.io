:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-degraph'
.. highlight: bash

bioconductor-degraph
====================

.. conda:recipe:: bioconductor-degraph
   :replaces_section_title:
   :noindex:

   Two\-sample tests on a graph

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DEGraph.html
   :license: GPL-3
   :recipe: /`bioconductor-degraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degraph/meta.yaml>`_
   :links: biotools: :biotools:`degraph`, doi: :doi:`10.1214/11-AOAS528`

   DEGraph implements recent hypothesis testing methods which directly assess whether a particular gene network is differentially expressed between two conditions. This is to be contrasted with the more classical two\-step approaches which first test individual genes\, then test gene sets for enrichment in differentially expressed genes. These recent methods take into account the topology of the network to yield more powerful detection procedures. DEGraph provides methods to easily test all KEGG pathways for differential expression on any gene expression data set and tools to visualize the results.


.. conda:package:: bioconductor-degraph

   |downloads_bioconductor-degraph| |docker_bioconductor-degraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-kegggraph: ``>=1.62.0,<1.63.0``
   :depends bioconductor-ncigraph: ``>=1.50.0,<1.51.0``
   :depends bioconductor-rbgl: ``>=1.78.0,<1.79.0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lattice: 
   :depends r-mvtnorm: 
   :depends r-r.methodss3: 
   :depends r-r.utils: 
   :depends r-rrcov: 
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

      mamba install bioconductor-degraph

   and update with::

      mamba update bioconductor-degraph

  To create a new environment, run::

      mamba create --name myenvname bioconductor-degraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-degraph:<tag>

   (see `bioconductor-degraph/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-degraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-degraph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-degraph
   :alt:   (downloads)
.. |docker_bioconductor-degraph| image:: https://quay.io/repository/biocontainers/bioconductor-degraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-degraph
.. _`bioconductor-degraph/tags`: https://quay.io/repository/biocontainers/bioconductor-degraph?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-degraph";
        var versions = ["1.54.0","1.52.0","1.50.0","1.46.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-degraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-degraph/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathview'
.. highlight: bash

bioconductor-pathview
=====================

.. conda:recipe:: bioconductor-pathview
   :replaces_section_title:
   :noindex:

   a tool set for pathway based data integration and visualization

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/pathview.html
   :license: GPL (>=3.0)
   :recipe: /`bioconductor-pathview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathview/meta.yaml>`_
   :links: biotools: :biotools:`pathview`

   Pathview is a tool set for pathway based data integration and visualization. It maps and renders a wide variety of biological data on relevant pathway graphs. All users need is to supply their data and specify the target pathway. Pathview automatically downloads the pathway graph data\, parses the data file\, maps user data to the pathway\, and render pathway graph with the mapped data. In addition\, Pathview also seamlessly integrates with pathway and gene set \(enrichment\) analysis tools for large\-scale and fully automated analysis.


.. conda:package:: bioconductor-pathview

   |downloads_bioconductor-pathview| |docker_bioconductor-pathview|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.1-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.1-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.5-0``,  ``1.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-kegggraph: ``>=1.62.0,<1.63.0``
   :depends bioconductor-keggrest: ``>=1.42.0,<1.43.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-png: 
   :depends r-xml: 
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

      mamba install bioconductor-pathview

   and update with::

      mamba update bioconductor-pathview

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pathview

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathview:<tag>

   (see `bioconductor-pathview/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathview| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathview.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathview
   :alt:   (downloads)
.. |docker_bioconductor-pathview| image:: https://quay.io/repository/biocontainers/bioconductor-pathview/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathview
.. _`bioconductor-pathview/tags`: https://quay.io/repository/biocontainers/bioconductor-pathview?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pathview";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathview/README.html
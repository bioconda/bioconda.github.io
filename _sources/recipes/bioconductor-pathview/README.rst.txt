:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathview'
.. highlight: bash

bioconductor-pathview
=====================

.. conda:recipe:: bioconductor-pathview
   :replaces_section_title:
   :noindex:

   a tool set for pathway based data integration and visualization

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/pathview.html
   :license: GPL (>=3.0)
   :recipe: /`bioconductor-pathview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathview/meta.yaml>`_
   :links: biotools: :biotools:`pathview`

   Pathview is a tool set for pathway based data integration and visualization. It maps and renders a wide variety of biological data on relevant pathway graphs. All users need is to supply their data and specify the target pathway. Pathview automatically downloads the pathway graph data\, parses the data file\, maps user data to the pathway\, and render pathway graph with the mapped data. In addition\, Pathview also seamlessly integrates with pathway and gene set \(enrichment\) analysis tools for large\-scale and fully automated analysis.


.. conda:package:: bioconductor-pathview

   |downloads_bioconductor-pathview| |docker_bioconductor-pathview|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.1-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.1-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.5-0``,  ``1.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-graph: ``>=1.72.0,<1.73.0``
   :depends bioconductor-kegggraph: ``>=1.54.0,<1.55.0``
   :depends bioconductor-keggrest: ``>=1.34.0,<1.35.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.14.0,<3.15.0``
   :depends bioconductor-rgraphviz: ``>=2.38.0,<2.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-png: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pathview

   and update with::

      conda update bioconductor-pathview

   or use the docker container::

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
        var versions = ["1.34.0","1.32.0","1.30.1","1.30.0","1.28.0"];
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
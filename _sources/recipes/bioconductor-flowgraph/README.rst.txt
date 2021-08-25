:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowgraph'
.. highlight: bash

bioconductor-flowgraph
======================

.. conda:recipe:: bioconductor-flowgraph
   :replaces_section_title:
   :noindex:

   Identifying differential cell populations in flow cytometry data accounting for marker frequency

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/flowGraph.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowgraph/meta.yaml>`_

   Identifies maximal differential cell populations in flow cytometry data taking into account dependencies between cell populations\; flowGraph calculates and plots SpecEnr abundance scores given cell population cell counts.


.. conda:package:: bioconductor-flowgraph

   |downloads_bioconductor-flowgraph| |docker_bioconductor-flowgraph|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: ``>=1.9.5``
   :depends r-effsize: 
   :depends r-furrr: 
   :depends r-future: 
   :depends r-ggiraph: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-htmlwidgets: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-purrr: 
   :depends r-rdpack: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-visnetwork: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowgraph

   and update with::

      conda update bioconductor-flowgraph

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowgraph:<tag>

   (see `bioconductor-flowgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowgraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowgraph
   :alt:   (downloads)
.. |docker_bioconductor-flowgraph| image:: https://quay.io/repository/biocontainers/bioconductor-flowgraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowgraph
.. _`bioconductor-flowgraph/tags`: https://quay.io/repository/biocontainers/bioconductor-flowgraph?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowgraph";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowgraph/README.html
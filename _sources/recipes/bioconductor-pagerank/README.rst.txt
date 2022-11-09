:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pagerank'
.. highlight: bash

bioconductor-pagerank
=====================

.. conda:recipe:: bioconductor-pagerank
   :replaces_section_title:
   :noindex:

   Temporal and Multiplex PageRank for Gene Regulatory Network Analysis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/pageRank.html
   :license: GPL-2
   :recipe: /`bioconductor-pagerank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pagerank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pagerank/meta.yaml>`_

   Implemented temporal PageRank analysis as defined by Rozenshtein and Gionis. Implemented multiplex PageRank as defined by Halu et al. Applied temporal and multiplex PageRank in gene regulatory network analysis.


.. conda:package:: bioconductor-pagerank

   |downloads_bioconductor-pagerank| |docker_bioconductor-pagerank|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-motifmatchr: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pagerank

   and update with::

      conda update bioconductor-pagerank

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pagerank:<tag>

   (see `bioconductor-pagerank/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pagerank| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pagerank.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pagerank
   :alt:   (downloads)
.. |docker_bioconductor-pagerank| image:: https://quay.io/repository/biocontainers/bioconductor-pagerank/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pagerank
.. _`bioconductor-pagerank/tags`: https://quay.io/repository/biocontainers/bioconductor-pagerank?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pagerank";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pagerank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pagerank/README.html
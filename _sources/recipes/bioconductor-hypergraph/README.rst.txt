:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hypergraph'
.. highlight: bash

bioconductor-hypergraph
=======================

.. conda:recipe:: bioconductor-hypergraph
   :replaces_section_title:
   :noindex:

   A package providing hypergraph data structures

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/hypergraph.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hypergraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hypergraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hypergraph/meta.yaml>`_
   :links: biotools: :biotools:`hypergraph`, doi: :doi:`10.1038/nmeth.3252`

   A package that implements some simple capabilities for representing and manipulating hypergraphs.


.. conda:package:: bioconductor-hypergraph

   |downloads_bioconductor-hypergraph| |docker_bioconductor-hypergraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.54.0-1</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.76.0,<1.77.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hypergraph

   and update with::

      conda update bioconductor-hypergraph

   or use the docker container::

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
        var versions = ["1.70.0","1.66.0","1.64.0","1.62.0","1.62.0"];
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
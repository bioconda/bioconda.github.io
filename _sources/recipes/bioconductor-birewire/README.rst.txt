:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-birewire'
.. highlight: bash

bioconductor-birewire
=====================

.. conda:recipe:: bioconductor-birewire
   :replaces_section_title:
   :noindex:

   High\-performing routines for the randomization of a bipartite graph \(or a binary event matrix\)\, undirected and directed signed graph preserving degree distribution \(or marginal totals\)

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/BiRewire.html
   :license: GPL-3
   :recipe: /`bioconductor-birewire <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-birewire>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-birewire/meta.yaml>`_
   :links: biotools: :biotools:`birewire`

   Fast functions for bipartite network rewiring through N consecutive switching steps \(See References\) and for the computation of the minimal number of switching steps to be performed in order to maximise the dissimilarity with respect to the original network. Includes functions for the analysis of the introduced randomness across the switching steps and several other routines to analyse the resulting networks and their natural projections. Extension to undirected networks and directed signed networks is also provided. Starting from version 1.9.7 a more precise bound \(especially for small network\) has been implemented. Starting from version 2.2.0 the analysis routine is more complete and a visual montioring of the underlying Markov Chain has been implemented. Starting from 3.6.0 the library can handle also matrices with NA \(not for the directed signed graphs\).


.. conda:package:: bioconductor-birewire

   |downloads_bioconductor-birewire| |docker_bioconductor-birewire|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.24.0-0</code>,  <code>3.22.0-1</code>,  <code>3.22.0-0</code>,  <code>3.20.0-0</code>,  <code>3.18.0-0</code>,  <code>3.16.0-1</code>,  <code>3.16.0-0</code>,  <code>3.14.0-0</code>,  <code>3.12.0-0</code>,  </span></summary>
      

      ``3.24.0-0``,  ``3.22.0-1``,  ``3.22.0-0``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-1``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.12.0-0``,  ``3.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-slam: 
   :depends r-tsne: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-birewire

   and update with::

      conda update bioconductor-birewire

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-birewire:<tag>

   (see `bioconductor-birewire/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-birewire| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-birewire.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-birewire
   :alt:   (downloads)
.. |docker_bioconductor-birewire| image:: https://quay.io/repository/biocontainers/bioconductor-birewire/status
   :target: https://quay.io/repository/biocontainers/bioconductor-birewire
.. _`bioconductor-birewire/tags`: https://quay.io/repository/biocontainers/bioconductor-birewire?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-birewire";
        var versions = ["3.24.0","3.22.0","3.22.0","3.20.0","3.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-birewire/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-birewire/README.html
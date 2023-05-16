:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-santa'
.. highlight: bash

bioconductor-santa
==================

.. conda:recipe:: bioconductor-santa
   :replaces_section_title:
   :noindex:

   Spatial Analysis of Network Associations

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/SANTA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-santa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-santa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-santa/meta.yaml>`_

   This package provides methods for measuring the strength of association between a network and a phenotype. It does this by measuring clustering of the phenotype across the network \(Knet\). Vertices can also be individually ranked by their strength of association with high\-weight vertices \(Knode\).


.. conda:package:: bioconductor-santa

   |downloads_bioconductor-santa| |docker_bioconductor-santa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.0-2</code>,  <code>2.34.0-1</code>,  <code>2.34.0-0</code>,  <code>2.30.0-2</code>,  <code>2.30.0-1</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-1</code>,  </span></summary>
      

      ``2.34.0-2``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.30.0-2``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-igraph: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-santa

   and update with::

      conda update bioconductor-santa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-santa:<tag>

   (see `bioconductor-santa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-santa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-santa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-santa
   :alt:   (downloads)
.. |docker_bioconductor-santa| image:: https://quay.io/repository/biocontainers/bioconductor-santa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-santa
.. _`bioconductor-santa/tags`: https://quay.io/repository/biocontainers/bioconductor-santa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-santa";
        var versions = ["2.34.0","2.34.0","2.34.0","2.30.0","2.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-santa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-santa/README.html
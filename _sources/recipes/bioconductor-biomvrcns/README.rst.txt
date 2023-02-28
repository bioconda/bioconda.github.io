:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biomvrcns'
.. highlight: bash

bioconductor-biomvrcns
======================

.. conda:recipe:: bioconductor-biomvrcns
   :replaces_section_title:
   :noindex:

   Copy Number study and Segmentation for multivariate biological data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/biomvRCNS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-biomvrcns <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomvrcns>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomvrcns/meta.yaml>`_

   In this package\, a Hidden Semi Markov Model \(HSMM\) and one homogeneous segmentation model are designed and implemented for segmentation genomic data\, with the aim of assisting in transcripts detection using high throughput technology like RNA\-seq or tiling array\, and copy number analysis using aCGH or sequencing.


.. conda:package:: bioconductor-biomvrcns

   |downloads_bioconductor-biomvrcns| |docker_bioconductor-biomvrcns|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-gviz: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-mvtnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biomvrcns

   and update with::

      conda update bioconductor-biomvrcns

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biomvrcns:<tag>

   (see `bioconductor-biomvrcns/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biomvrcns| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biomvrcns.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biomvrcns
   :alt:   (downloads)
.. |docker_bioconductor-biomvrcns| image:: https://quay.io/repository/biocontainers/bioconductor-biomvrcns/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biomvrcns
.. _`bioconductor-biomvrcns/tags`: https://quay.io/repository/biocontainers/bioconductor-biomvrcns?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biomvrcns";
        var versions = ["1.38.0","1.34.0","1.34.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biomvrcns/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biomvrcns/README.html
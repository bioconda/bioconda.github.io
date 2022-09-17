:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsubread'
.. highlight: bash

bioconductor-rsubread
=====================

.. conda:recipe:: bioconductor-rsubread
   :replaces_section_title:
   :noindex:

   Mapping\, quantification and variant analysis of sequencing data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Rsubread.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-rsubread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsubread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsubread/meta.yaml>`_
   :links: biotools: :biotools:`rsubread`

   Alignment\, quantification and analysis of RNA sequencing data \(including both bulk RNA\-seq and scRNA\-seq\) and DNA sequenicng data \(including ATAC\-seq\, ChIP\-seq\, WGS\, WES etc\). Includes functionality for read mapping\, read counting\, SNP calling\, structural variant detection and gene fusion discovery. Can be applied to all major sequencing techologies and to both short and long sequence reads.


.. conda:package:: bioconductor-rsubread

   |downloads_bioconductor-rsubread| |docker_bioconductor-rsubread|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.2-0</code>,  <code>2.8.1-0</code>,  <code>2.8.0-0</code>,  <code>2.6.1-0</code>,  <code>2.4.3-0</code>,  <code>2.4.0-0</code>,  <code>2.2.1-0</code>,  <code>2.0.0-0</code>,  <code>1.34.6-0</code>,  </span></summary>
      

      ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-0``,  ``2.6.1-0``,  ``2.4.3-0``,  ``2.4.0-0``,  ``2.2.1-0``,  ``2.0.0-0``,  ``1.34.6-0``,  ``1.34.4-0``,  ``1.34.0-0``,  ``1.32.4-0``,  ``1.32.2-0``,  ``1.30.9-0``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.25.2-0``,  ``1.23.0-0``,  ``1.22.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rsubread

   and update with::

      conda update bioconductor-rsubread

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rsubread:<tag>

   (see `bioconductor-rsubread/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rsubread| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsubread.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rsubread
   :alt:   (downloads)
.. |docker_bioconductor-rsubread| image:: https://quay.io/repository/biocontainers/bioconductor-rsubread/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsubread
.. _`bioconductor-rsubread/tags`: https://quay.io/repository/biocontainers/bioconductor-rsubread?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rsubread";
        var versions = ["2.8.2","2.8.1","2.8.0","2.6.1","2.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsubread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsubread/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-decontam'
.. highlight: bash

bioconductor-decontam
=====================

.. conda:recipe:: bioconductor-decontam
   :replaces_section_title:
   :noindex:

   Identify Contaminants in Marker\-gene and Metagenomics Sequencing Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/decontam.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-decontam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decontam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decontam/meta.yaml>`_

   Simple statistical identification of contaminating sequence features in marker\-gene or metagenomics data. Works on any kind of feature derived from environmental sequencing data \(e.g. ASVs\, OTUs\, taxonomic groups\, MAGs\,...\). Requires DNA quantitation data or sequenced negative control samples.


.. conda:package:: bioconductor-decontam

   |downloads_bioconductor-decontam| |docker_bioconductor-decontam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-reshape2: ``>=1.4.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-decontam

   and update with::

      conda update bioconductor-decontam

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-decontam:<tag>

   (see `bioconductor-decontam/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-decontam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-decontam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-decontam
   :alt:   (downloads)
.. |docker_bioconductor-decontam| image:: https://quay.io/repository/biocontainers/bioconductor-decontam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-decontam
.. _`bioconductor-decontam/tags`: https://quay.io/repository/biocontainers/bioconductor-decontam?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-decontam";
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-decontam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-decontam/README.html
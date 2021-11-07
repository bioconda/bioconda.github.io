:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dose'
.. highlight: bash

bioconductor-dose
=================

.. conda:recipe:: bioconductor-dose
   :replaces_section_title:
   :noindex:

   Disease Ontology Semantic and Enrichment analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/DOSE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dose/meta.yaml>`_
   :links: biotools: :biotools:`dose`

   This package implements five methods proposed by Resnik\, Schlicker\, Jiang\, Lin and Wang respectively for measuring semantic similarities among DO terms and gene products. Enrichment analyses including hypergeometric model and gene set enrichment analysis are also implemented for discovering disease associations of high\-throughput biological data.


.. conda:package:: bioconductor-dose

   |downloads_bioconductor-dose| |docker_bioconductor-dose|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.20.0-0</code>,  <code>3.18.0-0</code>,  <code>3.16.0-1</code>,  <code>3.16.0-0</code>,  <code>3.14.0-0</code>,  <code>3.12.0-0</code>,  <code>3.10.2-0</code>,  <code>3.8.0-0</code>,  <code>3.6.1-0</code>,  </span></summary>
      

      ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-1``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.12.0-0``,  ``3.10.2-0``,  ``3.8.0-0``,  ``3.6.1-0``,  ``3.4.0-0``,  ``3.2.0-0``,  ``2.10.7-0``,  ``2.10.6-0``,  ``2.8.3-0``,  ``2.8.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-do.db: ``2.9.*``
   :depends bioconductor-fgsea: ``>=1.20.0,<1.21.0``
   :depends bioconductor-gosemsim: ``>=2.20.0,<2.21.0``
   :depends bioconductor-qvalue: ``>=2.26.0,<2.27.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dose

   and update with::

      conda update bioconductor-dose

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dose:<tag>

   (see `bioconductor-dose/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dose| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dose.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dose
   :alt:   (downloads)
.. |docker_bioconductor-dose| image:: https://quay.io/repository/biocontainers/bioconductor-dose/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dose
.. _`bioconductor-dose/tags`: https://quay.io/repository/biocontainers/bioconductor-dose?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dose";
        var versions = ["3.20.0","3.18.0","3.16.0","3.16.0","3.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dose/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mlp'
.. highlight: bash

bioconductor-mlp
================

.. conda:recipe:: bioconductor-mlp
   :replaces_section_title:
   :noindex:

   Mean Log P Analysis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MLP.html
   :license: GPL-3
   :recipe: /`bioconductor-mlp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlp/meta.yaml>`_
   :links: biotools: :biotools:`mlp`, doi: :doi:`10.1007/978-3-642-24007-2_12`

   Pathway analysis based on p\-values associated to genes from a genes expression analysis of interest. Utility functions enable to extract pathways from the Gene Ontology Biological Process \(GOBP\)\, Molecular Function \(GOMF\) and Cellular Component \(GOCC\)\, Kyoto Encyclopedia of Genes of Genomes \(KEGG\) and Reactome databases. Methodology\, and helper functions to display the results as a table\, barplot of pathway significance\, Gene Ontology graph and pathway significance are available.


.. conda:package:: bioconductor-mlp

   |downloads_bioconductor-mlp| |docker_bioconductor-mlp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.37.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.37.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gplots: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mlp

   and update with::

      conda update bioconductor-mlp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mlp:<tag>

   (see `bioconductor-mlp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mlp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mlp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mlp
   :alt:   (downloads)
.. |docker_bioconductor-mlp| image:: https://quay.io/repository/biocontainers/bioconductor-mlp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mlp
.. _`bioconductor-mlp/tags`: https://quay.io/repository/biocontainers/bioconductor-mlp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mlp";
        var versions = ["1.42.0","1.40.0","1.38.0","1.38.0","1.37.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mlp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mlp/README.html
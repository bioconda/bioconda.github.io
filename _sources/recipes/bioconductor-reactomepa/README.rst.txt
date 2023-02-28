:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reactomepa'
.. highlight: bash

bioconductor-reactomepa
=======================

.. conda:recipe:: bioconductor-reactomepa
   :replaces_section_title:
   :noindex:

   Reactome Pathway Analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/ReactomePA.html
   :license: GPL-2
   :recipe: /`bioconductor-reactomepa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomepa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomepa/meta.yaml>`_
   :links: biotools: :biotools:`reactomepa`

   This package provides functions for pathway analysis based on REACTOME pathway database. It implements enrichment analysis\, gene set enrichment analysis and several functions for visualization.


.. conda:package:: bioconductor-reactomepa

   |downloads_bioconductor-reactomepa| |docker_bioconductor-reactomepa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-dose: ``>=3.24.0,<3.25.0``
   :depends bioconductor-enrichplot: ``>=1.18.0,<1.19.0``
   :depends bioconductor-graphite: ``>=1.44.0,<1.45.0``
   :depends bioconductor-reactome.db: ``>=1.82.0,<1.83.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-ggraph: 
   :depends r-gson: 
   :depends r-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-reactomepa

   and update with::

      conda update bioconductor-reactomepa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reactomepa:<tag>

   (see `bioconductor-reactomepa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reactomepa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactomepa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reactomepa
   :alt:   (downloads)
.. |docker_bioconductor-reactomepa| image:: https://quay.io/repository/biocontainers/bioconductor-reactomepa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactomepa
.. _`bioconductor-reactomepa/tags`: https://quay.io/repository/biocontainers/bioconductor-reactomepa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reactomepa";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactomepa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactomepa/README.html
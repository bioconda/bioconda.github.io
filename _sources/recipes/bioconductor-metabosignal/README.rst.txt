:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metabosignal'
.. highlight: bash

bioconductor-metabosignal
=========================

.. conda:recipe:: bioconductor-metabosignal
   :replaces_section_title:
   :noindex:

   MetaboSignal\: a network\-based approach to overlay and explore metabolic and signaling KEGG pathways

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MetaboSignal.html
   :license: GPL-3
   :recipe: /`bioconductor-metabosignal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabosignal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabosignal/meta.yaml>`_
   :links: biotools: :biotools:`metabosignal`

   MetaboSignal is an R package that allows merging\, analyzing and customizing metabolic and signaling KEGG pathways. It is a network\-based approach designed to explore the topological relationship between genes \(signaling\- or enzymatic\-genes\) and metabolites\, representing a powerful tool to investigate the genetic landscape and regulatory networks of metabolic phenotypes.


.. conda:package:: bioconductor-metabosignal

   |downloads_bioconductor-metabosignal| |docker_bioconductor-metabosignal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.1-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.1-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-ensdb.hsapiens.v75: ``>=2.99.0,<2.100.0``
   :depends bioconductor-hpar: ``>=1.42.0,<1.43.0``
   :depends bioconductor-kegggraph: ``>=1.60.0,<1.61.0``
   :depends bioconductor-keggrest: ``>=1.40.0,<1.41.0``
   :depends bioconductor-mwastools: ``>=1.24.0,<1.25.0``
   :depends bioconductor-mygene: ``>=1.36.0,<1.37.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-rcurl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metabosignal

   and update with::

      conda update bioconductor-metabosignal

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metabosignal:<tag>

   (see `bioconductor-metabosignal/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metabosignal| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metabosignal.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metabosignal
   :alt:   (downloads)
.. |docker_bioconductor-metabosignal| image:: https://quay.io/repository/biocontainers/bioconductor-metabosignal/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metabosignal
.. _`bioconductor-metabosignal/tags`: https://quay.io/repository/biocontainers/bioconductor-metabosignal?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metabosignal";
        var versions = ["1.30.1","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metabosignal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metabosignal/README.html
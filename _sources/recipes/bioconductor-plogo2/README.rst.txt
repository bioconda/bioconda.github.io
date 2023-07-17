:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plogo2'
.. highlight: bash

bioconductor-plogo2
===================

.. conda:recipe:: bioconductor-plogo2
   :replaces_section_title:
   :noindex:

   Plot Gene Ontology and KEGG pathway Annotation and Abundance

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/PloGO2.html
   :license: GPL-2
   :recipe: /`bioconductor-plogo2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plogo2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plogo2/meta.yaml>`_

   Functions for enrichment analysis and plotting gene ontology or KEGG pathway information for multiple data subsets at the same time. It also enables encorporating multiple conditions and abundance data.


.. conda:package:: bioconductor-plogo2

   |downloads_bioconductor-plogo2| |docker_bioconductor-plogo2|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-go.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-gostats: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httr: 
   :depends r-lattice: 
   :depends r-openxlsx: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-plogo2

   and update with::

      conda update bioconductor-plogo2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plogo2:<tag>

   (see `bioconductor-plogo2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plogo2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plogo2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plogo2
   :alt:   (downloads)
.. |docker_bioconductor-plogo2| image:: https://quay.io/repository/biocontainers/bioconductor-plogo2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plogo2
.. _`bioconductor-plogo2/tags`: https://quay.io/repository/biocontainers/bioconductor-plogo2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plogo2";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plogo2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plogo2/README.html
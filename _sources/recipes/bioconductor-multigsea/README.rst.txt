:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multigsea'
.. highlight: bash

bioconductor-multigsea
======================

.. conda:recipe:: bioconductor-multigsea
   :replaces_section_title:
   :noindex:

   Combining GSEA\-based pathway enrichment with multi omics data integration

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/multiGSEA.html
   :license: GPL-3
   :recipe: /`bioconductor-multigsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multigsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multigsea/meta.yaml>`_

   Extracted features from pathways derived from 8 different databases \(KEGG\, Reactome\, Biocarta\, etc.\) can be used on transcriptomic\, proteomic\, and\/or metabolomic level to calculate a combined GSEA\-based enrichment score.


.. conda:package:: bioconductor-multigsea

   |downloads_bioconductor-multigsea| |docker_bioconductor-multigsea|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-fgsea: ``>=1.26.0,<1.27.0``
   :depends bioconductor-graphite: ``>=1.46.0,<1.47.0``
   :depends bioconductor-metaboliteidmapping: ``>=1.0.0,<1.1.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-metap: 
   :depends r-rappdirs: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multigsea

   and update with::

      conda update bioconductor-multigsea

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multigsea:<tag>

   (see `bioconductor-multigsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multigsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multigsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multigsea
   :alt:   (downloads)
.. |docker_bioconductor-multigsea| image:: https://quay.io/repository/biocontainers/bioconductor-multigsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multigsea
.. _`bioconductor-multigsea/tags`: https://quay.io/repository/biocontainers/bioconductor-multigsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multigsea";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multigsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multigsea/README.html
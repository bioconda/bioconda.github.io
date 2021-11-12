:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-citefuse'
.. highlight: bash

bioconductor-citefuse
=====================

.. conda:recipe:: bioconductor-citefuse
   :replaces_section_title:
   :noindex:

   CiteFuse\: multi\-modal analysis of CITE\-seq data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/CiteFuse.html
   :license: GPL-3
   :recipe: /`bioconductor-citefuse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-citefuse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-citefuse/meta.yaml>`_

   CiteFuse pacakage implements a suite of methods and tools for CITE\-seq data from pre\-processing to integrative analytics\, including doublet detection\, network\-based modality integration\, cell type clustering\, differential RNA and protein expression analysis\, ADT evaluation\, ligand\-receptor interaction analysis\, and interactive web\-based visualisation of the analyses.


.. conda:package:: bioconductor-citefuse

   |downloads_bioconductor-citefuse| |docker_bioconductor-citefuse|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-rhdf5: ``>=2.38.0,<2.39.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-scran: ``>=1.22.0,<1.23.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cowplot: 
   :depends r-dbscan: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-ggridges: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-mixtools: 
   :depends r-pheatmap: 
   :depends r-propr: 
   :depends r-randomforest: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-rtsne: 
   :depends r-scales: 
   :depends r-uwot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-citefuse

   and update with::

      conda update bioconductor-citefuse

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-citefuse:<tag>

   (see `bioconductor-citefuse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-citefuse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-citefuse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-citefuse
   :alt:   (downloads)
.. |docker_bioconductor-citefuse| image:: https://quay.io/repository/biocontainers/bioconductor-citefuse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-citefuse
.. _`bioconductor-citefuse/tags`: https://quay.io/repository/biocontainers/bioconductor-citefuse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-citefuse";
        var versions = ["1.6.0","1.4.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-citefuse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-citefuse/README.html
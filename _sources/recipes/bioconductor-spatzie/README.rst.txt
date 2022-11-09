:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatzie'
.. highlight: bash

bioconductor-spatzie
====================

.. conda:recipe:: bioconductor-spatzie
   :replaces_section_title:
   :noindex:

   Identification of enriched motif pairs from chromatin interaction data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/spatzie.html
   :license: GPL-3
   :recipe: /`bioconductor-spatzie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatzie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatzie/meta.yaml>`_

   Identifies motifs that are significantly co\-enriched from enhancer\-promoter interaction data. While enhancer\-promoter annotation is commonly used to define groups of interaction anchors\, spatzie also supports co\-enrichment analysis between preprocessed interaction anchors.  Supports BEDPE interaction data derived from genome\-wide assays such as HiC\, ChIA\-PET\, and HiChIP. Can also be used to look for differentially enriched motif pairs between two interaction experiments.


.. conda:package:: bioconductor-spatzie

   |downloads_bioconductor-spatzie| |docker_bioconductor-spatzie|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicinteractions: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-motifmatchr: ``>=1.20.0,<1.21.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-tfbstools: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spatzie

   and update with::

      conda update bioconductor-spatzie

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatzie:<tag>

   (see `bioconductor-spatzie/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatzie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatzie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatzie
   :alt:   (downloads)
.. |docker_bioconductor-spatzie| image:: https://quay.io/repository/biocontainers/bioconductor-spatzie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatzie
.. _`bioconductor-spatzie/tags`: https://quay.io/repository/biocontainers/bioconductor-spatzie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatzie";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatzie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatzie/README.html
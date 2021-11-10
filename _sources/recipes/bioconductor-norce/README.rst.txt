:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-norce'
.. highlight: bash

bioconductor-norce
==================

.. conda:recipe:: bioconductor-norce
   :replaces_section_title:
   :noindex:

   NoRCE\: Noncoding RNA Sets Cis Annotation and Enrichment

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/NoRCE.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-norce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-norce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-norce/meta.yaml>`_

   While some non\-coding RNAs \(ncRNAs\) have been found to play critical regulatory roles in biological processes\, most remain functionally uncharacterized. This presents a challenge whenever an interesting set of ncRNAs set needs to be analyzed in a functional context. Transcripts located close\-by on the genome are often regulated together\, and this spatial proximity hints at a functional association. Based on this idea\, we present an R package\, NoRCE\, that performs cis enrichment analysis for a given set of ncRNAs. Enrichment is carried out by using the functional annotations of the coding genes located proximally to the input ncRNAs. NoRCE allows incorporating other biological information such as the topologically associating domain \(TAD\) regions\, co\-expression patterns\, and miRNA target information. NoRCE repository includes several data files\, such as cell line specific TAD regions\, functional gene sets\, and cancer expression data. Additionally\, users can input custom data files. Results can be retrieved in a tabular format or viewed as graphs. NoRCE is currently available for the following species\: human\, mouse\, rat\, zebrafish\, fruit fly\, worm and yeast.


.. conda:package:: bioconductor-norce

   |downloads_bioconductor-norce| |docker_bioconductor-norce|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biomart: ``>=2.50.0,<2.51.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-go.db: ``>=3.14.0,<3.15.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-keggrest: ``>=1.34.0,<1.35.0``
   :depends bioconductor-reactome.db: ``>=1.77.0,<1.78.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-rwikipathways: ``>=1.14.0,<1.15.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-zlibbioc: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :depends r-dbplyr: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-png: 
   :depends r-rcurl: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-rsqlite: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-norce

   and update with::

      conda update bioconductor-norce

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-norce:<tag>

   (see `bioconductor-norce/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-norce| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-norce.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-norce
   :alt:   (downloads)
.. |docker_bioconductor-norce| image:: https://quay.io/repository/biocontainers/bioconductor-norce/status
   :target: https://quay.io/repository/biocontainers/bioconductor-norce
.. _`bioconductor-norce/tags`: https://quay.io/repository/biocontainers/bioconductor-norce?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-norce";
        var versions = ["1.6.0","1.4.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-norce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-norce/README.html
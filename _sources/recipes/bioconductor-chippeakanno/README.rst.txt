:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chippeakanno'
.. highlight: bash

bioconductor-chippeakanno
=========================

.. conda:recipe:: bioconductor-chippeakanno
   :replaces_section_title:
   :noindex:

   Batch annotation of the peaks identified from either ChIP\-seq\, ChIP\-chip experiments or any experiments resulted in large number of chromosome ranges

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ChIPpeakAnno.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-chippeakanno <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chippeakanno>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chippeakanno/meta.yaml>`_
   :links: biotools: :biotools:`chippeakanno`

   The package includes functions to retrieve the sequences around the peak\, obtain enriched Gene Ontology \(GO\) terms\, find the nearest gene\, exon\, miRNA or custom features such as most conserved elements and other transcription factor binding sites supplied by users. Starting 2.0.5\, new functions have been added for finding the peaks with bi\-directional promoters with summary statistics \(peaksNearBDP\)\, for summarizing the occurrence of motifs in peaks \(summarizePatternInPeaks\) and for adding other IDs to annotated peaks or enrichedGO \(addGeneIDs\). This package leverages the biomaRt\, IRanges\, Biostrings\, BSgenome\, GO.db\, multtest and stat packages.


.. conda:package:: bioconductor-chippeakanno

   |downloads_bioconductor-chippeakanno| |docker_bioconductor-chippeakanno|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.28.0-0</code>,  <code>3.26.0-0</code>,  <code>3.24.1-0</code>,  <code>3.24.0-0</code>,  <code>3.22.0-0</code>,  <code>3.20.0-0</code>,  <code>3.18.2-0</code>,  <code>3.16.0-0</code>,  <code>3.14.2-0</code>,  </span></summary>
      

      ``3.28.0-0``,  ``3.26.0-0``,  ``3.24.1-0``,  ``3.24.0-0``,  ``3.22.0-0``,  ``3.20.0-0``,  ``3.18.2-0``,  ``3.16.0-0``,  ``3.14.2-0``,  ``3.12.0-0``,  ``3.10.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biomart: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-ensembldb: ``>=2.18.0,<2.19.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicalignments: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-graph: ``>=1.72.0,<1.73.0``
   :depends bioconductor-interactionset: ``>=1.22.0,<1.23.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-keggrest: ``>=1.34.0,<1.35.0``
   :depends bioconductor-multtest: ``>=2.50.0,<2.51.0``
   :depends bioconductor-rbgl: ``>=1.70.0,<1.71.0``
   :depends bioconductor-regioner: ``>=1.26.0,<1.27.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-venndiagram: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chippeakanno

   and update with::

      conda update bioconductor-chippeakanno

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chippeakanno:<tag>

   (see `bioconductor-chippeakanno/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chippeakanno| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chippeakanno.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chippeakanno
   :alt:   (downloads)
.. |docker_bioconductor-chippeakanno| image:: https://quay.io/repository/biocontainers/bioconductor-chippeakanno/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chippeakanno
.. _`bioconductor-chippeakanno/tags`: https://quay.io/repository/biocontainers/bioconductor-chippeakanno?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chippeakanno";
        var versions = ["3.28.0","3.26.0","3.24.1","3.24.0","3.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chippeakanno/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chippeakanno/README.html
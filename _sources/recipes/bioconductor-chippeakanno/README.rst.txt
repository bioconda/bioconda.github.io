:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chippeakanno'
.. highlight: bash

bioconductor-chippeakanno
=========================

.. conda:recipe:: bioconductor-chippeakanno
   :replaces_section_title:
   :noindex:

   Batch annotation of the peaks identified from either ChIP\-seq\, ChIP\-chip experiments\, or any experiments that result in large number of genomic interval data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ChIPpeakAnno.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-chippeakanno <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chippeakanno>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chippeakanno/meta.yaml>`_
   :links: biotools: :biotools:`chippeakanno`

   The package encompasses a range of functions for identifying the closest gene\, exon\, miRNA\, or custom features—such as highly conserved elements and user\-supplied transcription factor binding sites. Additionally\, users can retrieve sequences around the peaks and obtain enriched Gene Ontology \(GO\) or Pathway terms. In version 2.0.5 and beyond\, new functionalities have been introduced. These include features for identifying peaks associated with bi\-directional promoters along with summary statistics \(peaksNearBDP\)\, summarizing motif occurrences in peaks \(summarizePatternInPeaks\)\, and associating additional identifiers with annotated peaks or enrichedGO \(addGeneIDs\). The package integrates with various other packages such as biomaRt\, IRanges\, Biostrings\, BSgenome\, GO.db\, multtest\, and stat to enhance its analytical capabilities.


.. conda:package:: bioconductor-chippeakanno

   |downloads_bioconductor-chippeakanno| |docker_bioconductor-chippeakanno|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.40.0-0</code>,  <code>3.36.0-0</code>,  <code>3.34.1-0</code>,  <code>3.32.0-0</code>,  <code>3.28.0-0</code>,  <code>3.26.0-0</code>,  <code>3.24.1-0</code>,  <code>3.24.0-0</code>,  <code>3.22.0-0</code>,  </span></summary>
      

      ``3.40.0-0``,  ``3.36.0-0``,  ``3.34.1-0``,  ``3.32.0-0``,  ``3.28.0-0``,  ``3.26.0-0``,  ``3.24.1-0``,  ``3.24.0-0``,  ``3.22.0-0``,  ``3.20.0-0``,  ``3.18.2-0``,  ``3.16.0-0``,  ``3.14.2-0``,  ``3.12.0-0``,  ``3.10.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-ensembldb: ``>=2.30.0,<2.31.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-interactionset: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-keggrest: ``>=1.46.0,<1.47.0``
   :depends bioconductor-multtest: ``>=2.62.0,<2.63.0``
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends bioconductor-rbgl: ``>=1.82.0,<1.83.0``
   :depends bioconductor-regioner: ``>=1.38.0,<1.39.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-universalmotif: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dbi: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-venndiagram: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-chippeakanno

   and update with::

      mamba update bioconductor-chippeakanno

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chippeakanno

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["3.40.0","3.36.0","3.34.1","3.32.0","3.28.0"];
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
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-norce'
.. highlight: bash

bioconductor-norce
==================

.. conda:recipe:: bioconductor-norce
   :replaces_section_title:
   :noindex:

   NoRCE\: Noncoding RNA Sets Cis Annotation and Enrichment

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/NoRCE.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-norce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-norce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-norce/meta.yaml>`_

   While some non\-coding RNAs \(ncRNAs\) are assigned critical regulatory roles\, most remain functionally uncharacterized. This presents a challenge whenever an interesting set of ncRNAs needs to be analyzed in a functional context. Transcripts located close\-by on the genome are often regulated together. This genomic proximity on the sequence can hint to a functional association. We present a tool\, NoRCE\, that performs cis enrichment analysis for a given set of ncRNAs. Enrichment is carried out using the functional annotations of the coding genes located proximal to the input ncRNAs. Other biologically relevant information such as topologically associating domain \(TAD\) boundaries\, co\-expression patterns\, and miRNA target prediction information can be incorporated to conduct a richer enrichment analysis. To this end\, NoRCE includes several relevant datasets as part of its data repository\, including cell\-line specific TAD boundaries\, functional gene sets\, and expression data for coding \& ncRNAs specific to cancer. Additionally\, the users can utilize custom data files in their investigation. Enrichment results can be retrieved in a tabular format or visualized in several different ways. NoRCE is currently available for the following species\: human\, mouse\, rat\, zebrafish\, fruit fly\, worm\, and yeast.


.. conda:package:: bioconductor-norce

   |downloads_bioconductor-norce| |docker_bioconductor-norce|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-keggrest: ``>=1.42.0,<1.43.0``
   :depends bioconductor-reactome.db: ``>=1.86.0,<1.87.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rwikipathways: ``>=1.22.0,<1.23.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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
   :depends r-stringr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-norce

   and update with::

      mamba update bioconductor-norce

  To create a new environment, run::

      mamba create --name myenvname bioconductor-norce

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
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
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mosca'
.. highlight: bash

mosca
=====

.. conda:recipe:: mosca
   :replaces_section_title:
   :noindex:

   MOSCA \- Meta\-Omics Software for Community Analysis

   :homepage: https://github.com/iquasere/MOSCA
   :documentation: https://github.com/iquasere/MOSCA/blob/master/README.md
   
   :license: GPL / GNU General Public License v3 (GPL-3.0)
   :recipe: /`mosca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosca/meta.yaml>`_

   MOSCA \(portuguese for fly\) is a pipeline designed for performing metagenomics \(MG\)\,
   metatranscriptomics \(MT\) and metaproteomics \(MP\) integrated data analysis\, 
   in a mostly local and fully automated workflow. Metagenomics is used to build 
   a reference database for MT and MP\, beginning with preprocessing of data for
   removal of Illumina adapters and lower quality regions\, folowed by assembly
   of reads into contigs\, gene calling on the contigs and homology\-based and 
   domain\-based annotation of identified proteins\, using the UniProt and COG 
   databases\, respectively. If available\, MT reads are then aligned to the ORFs 
   for gene expression quantification\, and MP spectra are submitted for
   Peptide\-to\-Spectrum matching\, with the annotated ORFs as reference database.
   Final steps include differential expression analysis for both MT and MP\, and
   metabolic pathways analysis through KEGG Pathways.



.. conda:package:: mosca

   |downloads_mosca| |docker_mosca|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends bioconductor-deseq2: ``1.22.1.*``
   :depends bioconductor-edger: ``3.24.3.*``
   :depends biopython: 
   :depends blast: 
   :depends bowtie2: 
   :depends checkm-genome: ``>=1.1.0``
   :depends diamond: 
   :depends fastqc: 
   :depends fraggenescan: 
   :depends htseq: 
   :depends krona: 
   :depends lxml: 
   :depends maxbin2: 
   :depends maxquant: 
   :depends megahit: 
   :depends openpyxl: 
   :depends pandas: 
   :depends perl: 
   :depends progressbar33: 
   :depends python: 
   :depends quast: 
   :depends r-optparse: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends recognizer: 
   :depends reportlab: 
   :depends scikit-learn: 
   :depends seqkit: 
   :depends seqtk: 
   :depends sortmerna: ``2.1.*``
   :depends spades: 
   :depends svn: 
   :depends tqdm: ``>=4.33.0``
   :depends trimmomatic: 
   :depends upimapi: 
   :depends xlrd: ``>=0.9.0``
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mosca

   and update with::

      conda update mosca

   or use the docker container::

      docker pull quay.io/biocontainers/mosca:<tag>

   (see `mosca/tags`_ for valid values for ``<tag>``)


.. |downloads_mosca| image:: https://img.shields.io/conda/dn/bioconda/mosca.svg?style=flat
   :target: https://anaconda.org/bioconda/mosca
   :alt:   (downloads)
.. |docker_mosca| image:: https://quay.io/repository/biocontainers/mosca/status
   :target: https://quay.io/repository/biocontainers/mosca
.. _`mosca/tags`: https://quay.io/repository/biocontainers/mosca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mosca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mosca/README.html
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
      
      

      ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends bioconductor-deseq2: ``>=1.10.1``
   :depends bioconductor-edger: ``>=3.14.0``
   :depends bioconductor-pcamethods: ``1.82.0.*``
   :depends bioconductor-rots: ``1.18.0.*``
   :depends bioconductor-vsn: ``3.58.0.*``
   :depends biopython: ``>=1.78``
   :depends blast: ``>=2.5.0``
   :depends bowtie2: ``2.3.*``
   :depends checkm-genome: ``>=1.1.0``
   :depends diamond: ``>=2.0.2``
   :depends fastqc: ``>=0.11.9``
   :depends fraggenescan: ``>=1.31``
   :depends htseq: ``0.12.*``
   :depends keggcharter: ``>=0.1.1``
   :depends krona: ``>=2.7.1``
   :depends lxml: ``>=4.6.1``
   :depends maxbin2: ``>=2.2.7``
   :depends maxquant: ``>=1.6.10``
   :depends megahit: ``>=1.2.9``
   :depends metaphlan: ``3.*``
   :depends openpyxl: ``>=3.0.3``
   :depends pandas: ``>=1.1.4``
   :depends peptide-shaker: ``1.16.*``
   :depends perl: 
   :depends progressbar33: ``>=2.4``
   :depends python: ``>=3.6``
   :depends quast: ``>=5.0.2``
   :depends r-optparse: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: ``>=1.1.2``
   :depends recognizer: ``>=1.4.0``
   :depends reportlab: ``>=3.5.45``
   :depends samtools: ``>=1.11``
   :depends scikit-learn: ``>=0.23.1``
   :depends searchgui: ``3.3.*``
   :depends seqkit: ``>=0.13.2``
   :depends seqtk: 
   :depends snakemake: ``>=5.27.4``
   :depends sortmerna: ``2.1b.*``
   :depends spades: ``>=3.14.1``
   :depends svn: ``>=1.9.7``
   :depends tqdm: ``>=4.33.0``
   :depends trimmomatic: ``>=0.39``
   :depends upimapi: ``>=1.0.4``
   :depends xlrd: ``1.2.*``
   :depends xlsxwriter: ``>=1.3.7``
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
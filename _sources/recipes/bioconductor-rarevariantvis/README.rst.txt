:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rarevariantvis'
.. highlight: bash

bioconductor-rarevariantvis
===========================

.. conda:recipe:: bioconductor-rarevariantvis
   :replaces_section_title:
   :noindex:

   A suite for analysis of rare genomic variants in whole genome sequencing data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RareVariantVis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rarevariantvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rarevariantvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rarevariantvis/meta.yaml>`_
   :links: biotools: :biotools:`rarevariantvis`, doi: :doi:`10.1093/bioinformatics/btw359`

   Second version of RareVariantVis package aims to provide comprehensive information about rare variants for your genome data. It annotates\, filters and presents genomic variants \(especially rare ones\) in a global\, per chromosome way. For discovered rare variants CRISPR guide RNAs are designed\, so the user can plan further functional studies. Large structural variants\, including copy number variants are also supported. Package accepts variants directly from variant caller \- for example GATK or Speedseq. Output of package are lists of variants together with adequate visualization. Visualization of variants is performed in two ways \- standard that outputs png figures and interactive that uses JavaScript d3 package. Interactive visualization allows to analyze trio\/family data\, for example in search for causative variants in rare Mendelian diseases\, in point\-and\-click interface. The package includes homozygous region caller and allows to analyse whole human genomes in less than 30 minutes on a desktop computer. RareVariantVis disclosed novel causes of several rare monogenic disorders\, including one with non\-coding causative variant \- keratolythic winter erythema.


.. conda:package:: bioconductor-rarevariantvis

   |downloads_bioconductor-rarevariantvis| |docker_bioconductor-rarevariantvis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-1</code>,  </span></summary>
      

      ``2.28.0-0``,  ``2.26.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicscores: ``>=2.12.0,<2.13.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-phastcons100way.ucsc.hg19: ``>=3.7.0,<3.8.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-googlevis: 
   :depends r-gtools: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-rarevariantvis

   and update with::

      mamba update bioconductor-rarevariantvis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rarevariantvis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rarevariantvis:<tag>

   (see `bioconductor-rarevariantvis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rarevariantvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rarevariantvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rarevariantvis
   :alt:   (downloads)
.. |docker_bioconductor-rarevariantvis| image:: https://quay.io/repository/biocontainers/bioconductor-rarevariantvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rarevariantvis
.. _`bioconductor-rarevariantvis/tags`: https://quay.io/repository/biocontainers/bioconductor-rarevariantvis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rarevariantvis";
        var versions = ["2.28.0","2.26.0","2.22.0","2.20.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rarevariantvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rarevariantvis/README.html
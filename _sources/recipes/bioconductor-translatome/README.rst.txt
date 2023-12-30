:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-translatome'
.. highlight: bash

bioconductor-translatome
========================

.. conda:recipe:: bioconductor-translatome
   :replaces_section_title:
   :noindex:

   Comparison between multiple levels of gene expression

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/tRanslatome.html
   :license: GPL-3
   :recipe: /`bioconductor-translatome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-translatome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-translatome/meta.yaml>`_

   Detection of differentially expressed genes \(DEGs\) from the comparison of two biological conditions \(treated vs. untreated\, diseased vs. normal\, mutant vs. wild\-type\) among different levels of gene expression \(transcriptome \,translatome\, proteome\)\, using several statistical methods\: Rank Product\, Translational Efficiency\, t\-test\, Limma\, ANOTA\, DESeq\, edgeR. Possibility to plot the results with scatterplots\, histograms\, MA plots\, standard deviation \(SD\) plots\, coefficient of variation \(CV\) plots. Detection of significantly enriched post\-transcriptional regulatory factors \(RBPs\, miRNAs\, etc\) and Gene Ontology terms in the lists of DEGs previously identified for the two expression levels. Comparison of GO terms enriched only in one of the levels or in both. Calculation of the semantic similarity score between the lists of enriched GO terms coming from the two expression levels. Visual examination and comparison of the enriched terms with heatmaps\, radar plots and barplots.


.. conda:package:: bioconductor-translatome

   |downloads_bioconductor-translatome| |docker_bioconductor-translatome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.5-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-anota: ``>=1.50.0,<1.51.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-gosemsim: ``>=2.28.0,<2.29.0``
   :depends bioconductor-heatplus: ``>=3.10.0,<3.11.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-rankprod: ``>=3.28.0,<3.29.0``
   :depends bioconductor-topgo: ``>=2.54.0,<2.55.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gplots: 
   :depends r-plotrix: 
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

      mamba install bioconductor-translatome

   and update with::

      mamba update bioconductor-translatome

  To create a new environment, run::

      mamba create --name myenvname bioconductor-translatome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-translatome:<tag>

   (see `bioconductor-translatome/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-translatome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-translatome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-translatome
   :alt:   (downloads)
.. |docker_bioconductor-translatome| image:: https://quay.io/repository/biocontainers/bioconductor-translatome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-translatome
.. _`bioconductor-translatome/tags`: https://quay.io/repository/biocontainers/bioconductor-translatome?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-translatome";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-translatome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-translatome/README.html
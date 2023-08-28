:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-parathyroidse'
.. highlight: bash

bioconductor-parathyroidse
==========================

.. conda:recipe:: bioconductor-parathyroidse
   :replaces_section_title:
   :noindex:

   RangedSummarizedExperiment for RNA\-Seq of primary cultures of parathyroid tumors by Haglund et al.\, J Clin Endocrinol Metab 2012.

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/parathyroidSE.html
   :license: LGPL
   :recipe: /`bioconductor-parathyroidse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-parathyroidse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-parathyroidse/meta.yaml>`_

   This package provides RangedSummarizedExperiment objects of read counts in genes and exonic parts for paired\-end RNA\-Seq data from experiments on primary cultures of parathyroid tumors.  The data were presented in the article \"Evidence of a Functional Estrogen Receptor in Parathyroid Adenomas\" by Haglund F\, Ma R\, Huss M\, Sulaiman L\, Lu M\, Nilsson IL\, Hoog A\, Juhlin CC\, Hartman J\, Larsson C\, J Clin Endocrinol Metab. jc.2012\-2484\, Epub 2012 Sep 28\, PMID\: 23024189.  The sequencing was performed on tumor cultures from 4 patients at 2 time points over 3 conditions \(DPN\, OHT and control\).  One control sample was omitted by the paper authors due to low quality. The package vignette describes the creation of the object from raw sequencing data provided by NCBI Gene Expression Omnibus under accession number GSE37211.  The gene and exon features are the GRCh37 Ensembl annotations.


.. conda:package:: bioconductor-parathyroidse

   |downloads_bioconductor-parathyroidse| |docker_bioconductor-parathyroidse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-parathyroidse

   and update with::

      mamba update bioconductor-parathyroidse

  To create a new environment, run::

      mamba create --name myenvname bioconductor-parathyroidse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-parathyroidse:<tag>

   (see `bioconductor-parathyroidse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-parathyroidse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-parathyroidse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-parathyroidse
   :alt:   (downloads)
.. |docker_bioconductor-parathyroidse| image:: https://quay.io/repository/biocontainers/bioconductor-parathyroidse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-parathyroidse
.. _`bioconductor-parathyroidse/tags`: https://quay.io/repository/biocontainers/bioconductor-parathyroidse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-parathyroidse";
        var versions = ["1.38.0","1.36.0","1.32.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-parathyroidse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-parathyroidse/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gigsea'
.. highlight: bash

bioconductor-gigsea
===================

.. conda:recipe:: bioconductor-gigsea
   :replaces_section_title:
   :noindex:

   Genotype Imputed Gene Set Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GIGSEA.html
   :license: LGPL-3
   :recipe: /`bioconductor-gigsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gigsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gigsea/meta.yaml>`_

   We presented the Genotype\-imputed Gene Set Enrichment Analysis \(GIGSEA\)\, a novel method that uses GWAS\-and\-eQTL\-imputed trait\-associated differential gene expression to interrogate gene set enrichment for the trait\-associated SNPs. By incorporating eQTL from large gene expression studies\, e.g. GTEx\, GIGSEA appropriately addresses such challenges for SNP enrichment as gene size\, gene boundary\, SNP distal regulation\, and multiple\-marker regulation. The weighted linear regression model\, taking as weights both imputation accuracy and model completeness\, was used to perform the enrichment test\, properly adjusting the bias due to redundancy in different gene sets. The permutation test\, furthermore\, is used to evaluate the significance of enrichment\, whose efficiency can be largely elevated by expressing the computational intensive part in terms of large matrix operation. We have shown the appropriate type I error rates for GIGSEA \(\<5\%\)\, and the preliminary results also demonstrate its good performance to uncover the real signal.


.. conda:package:: bioconductor-gigsea

   |downloads_bioconductor-gigsea| |docker_bioconductor-gigsea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-locfdr: 
   :depends r-mass: 
   :depends r-matrix: 
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

      mamba install bioconductor-gigsea

   and update with::

      mamba update bioconductor-gigsea

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gigsea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gigsea:<tag>

   (see `bioconductor-gigsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gigsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gigsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gigsea
   :alt:   (downloads)
.. |docker_bioconductor-gigsea| image:: https://quay.io/repository/biocontainers/bioconductor-gigsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gigsea
.. _`bioconductor-gigsea/tags`: https://quay.io/repository/biocontainers/bioconductor-gigsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gigsea";
        var versions = ["1.20.0","1.20.0","1.18.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gigsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gigsea/README.html
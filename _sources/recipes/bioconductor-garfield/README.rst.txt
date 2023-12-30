:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-garfield'
.. highlight: bash

bioconductor-garfield
=====================

.. conda:recipe:: bioconductor-garfield
   :replaces_section_title:
   :noindex:

   GWAS Analysis of Regulatory or Functional Information Enrichment with LD correction

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/garfield.html
   :license: GPL-3
   :recipe: /`bioconductor-garfield <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-garfield>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-garfield/meta.yaml>`_

   GARFIELD is a non\-parametric functional enrichment analysis approach described in the paper GARFIELD\: GWAS analysis of regulatory or functional information enrichment with LD correction. Briefly\, it is a method that leverages GWAS findings with regulatory or functional annotations \(primarily from ENCODE and Roadmap epigenomics data\) to find features relevant to a phenotype of interest. It performs greedy pruning of GWAS SNPs \(LD r2 \> 0.1\) and then annotates them based on functional information overlap. Next\, it quantifies Fold Enrichment \(FE\) at various GWAS significance cutoffs and assesses them by permutation testing\, while matching for minor allele frequency\, distance to nearest transcription start site and number of LD proxies \(r2 \> 0.8\).


.. conda:package:: bioconductor-garfield

   |downloads_bioconductor-garfield| |docker_bioconductor-garfield|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-garfield

   and update with::

      mamba update bioconductor-garfield

  To create a new environment, run::

      mamba create --name myenvname bioconductor-garfield

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-garfield:<tag>

   (see `bioconductor-garfield/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-garfield| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-garfield.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-garfield
   :alt:   (downloads)
.. |docker_bioconductor-garfield| image:: https://quay.io/repository/biocontainers/bioconductor-garfield/status
   :target: https://quay.io/repository/biocontainers/bioconductor-garfield
.. _`bioconductor-garfield/tags`: https://quay.io/repository/biocontainers/bioconductor-garfield?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-garfield";
        var versions = ["1.30.0","1.30.0","1.28.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-garfield/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-garfield/README.html
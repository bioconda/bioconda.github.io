:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-differentialregulation'
.. highlight: bash

bioconductor-differentialregulation
===================================

.. conda:recipe:: bioconductor-differentialregulation
   :replaces_section_title:
   :noindex:

   Differentially regulated genes from scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/DifferentialRegulation.html
   :license: GPL-3
   :recipe: /`bioconductor-differentialregulation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-differentialregulation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-differentialregulation/meta.yaml>`_

   DifferentialRegulation is a method for detecting differentially regulated genes between two groups of samples \(e.g.\, healthy vs. disease\, or treated vs. untreated samples\)\, by targeting differences in the balance of spliced and unspliced mRNA abundances\, obtained from single\-cell RNA\-sequencing \(scRNA\-seq\) data. DifferentialRegulation accounts for the sample\-to\-sample variability\, and embeds multiple samples in a Bayesian hierarchical model. In particular\, when reads are compatible with multiple genes or multiple splicing versions of a gene \(unspliced spliced or ambiguous\)\, the method allocates these multi\-mapping reads to the gene of origin and their splicing version. Parameters are inferred via Markov chain Monte Carlo \(MCMC\) techniques \(Metropolis\-within\-Gibbs\).


.. conda:package:: bioconductor-differentialregulation

   |downloads_bioconductor-differentialregulation| |docker_bioconductor-differentialregulation|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-bandits: ``>=1.14.0,<1.15.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dorng: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-differentialregulation

   and update with::

      conda update bioconductor-differentialregulation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-differentialregulation:<tag>

   (see `bioconductor-differentialregulation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-differentialregulation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-differentialregulation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-differentialregulation
   :alt:   (downloads)
.. |docker_bioconductor-differentialregulation| image:: https://quay.io/repository/biocontainers/bioconductor-differentialregulation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-differentialregulation
.. _`bioconductor-differentialregulation/tags`: https://quay.io/repository/biocontainers/bioconductor-differentialregulation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-differentialregulation";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-differentialregulation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-differentialregulation/README.html
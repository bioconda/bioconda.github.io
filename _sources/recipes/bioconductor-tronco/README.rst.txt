:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tronco'
.. highlight: bash

bioconductor-tronco
===================

.. conda:recipe:: bioconductor-tronco
   :replaces_section_title:
   :noindex:

   TRONCO\, an R package for TRanslational ONCOlogy

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TRONCO.html
   :license: GPL-3
   :recipe: /`bioconductor-tronco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tronco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tronco/meta.yaml>`_

   The TRONCO \(TRanslational ONCOlogy\) R package collects algorithms to infer progression models via the approach of Suppes\-Bayes Causal Network\, both from an ensemble of tumors \(cross\-sectional samples\) and within an individual patient \(multi\-region or single\-cell samples\). The package provides parallel implementation of algorithms that process binary matrices where each row represents a tumor sample and each column a single\-nucleotide or a structural variant driving the progression\; a 0\/1 value models the absence\/presence of that alteration in the sample. The tool can import data from plain\, MAF or GISTIC format files\, and can fetch it from the cBioPortal for cancer genomics. Functions for data manipulation and visualization are provided\, as well as functions to import\/export such data to other bioinformatics tools for\, e.g\, clustering or detection of mutually exclusive alterations. Inferred models can be visualized and tested for their confidence via bootstrap and cross\-validation. TRONCO is used for the implementation of the Pipeline for Cancer Inference \(PICNIC\).


.. conda:package:: bioconductor-tronco

   |downloads_bioconductor-tronco| |docker_bioconductor-tronco|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.2-0</code>,  </span></summary>
      

      ``2.32.0-0``,  ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.2-0``,  ``2.14.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rgraphviz: ``>=2.44.0,<2.45.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bnlearn: 
   :depends r-circlize: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-gridextra: 
   :depends r-gtable: 
   :depends r-gtools: 
   :depends r-igraph: 
   :depends r-iterators: 
   :depends r-r.matlab: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :depends r-xtable: 
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

      mamba install bioconductor-tronco

   and update with::

      mamba update bioconductor-tronco

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tronco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tronco:<tag>

   (see `bioconductor-tronco/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tronco| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tronco.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tronco
   :alt:   (downloads)
.. |docker_bioconductor-tronco| image:: https://quay.io/repository/biocontainers/bioconductor-tronco/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tronco
.. _`bioconductor-tronco/tags`: https://quay.io/repository/biocontainers/bioconductor-tronco?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tronco";
        var versions = ["2.32.0","2.30.0","2.26.0","2.24.0","2.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tronco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tronco/README.html
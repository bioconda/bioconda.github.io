:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bdmmacorrect'
.. highlight: bash

bioconductor-bdmmacorrect
=========================

.. conda:recipe:: bioconductor-bdmmacorrect
   :replaces_section_title:
   :noindex:

   Meta\-analysis for the metagenomic read counts data from different cohorts

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BDMMAcorrect.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bdmmacorrect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bdmmacorrect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bdmmacorrect/meta.yaml>`_

   Metagenomic sequencing techniques enable quantitative analyses of the microbiome. However\, combining the microbial data from these experiments is challenging due to the variations between experiments. The existing methods for correcting batch effects do not consider the interactions between variables—microbial taxa in microbial studies—and the overdispersion of the microbiome data. Therefore\, they are not applicable to microbiome data. We develop a new method\, Bayesian Dirichlet\-multinomial regression meta\-analysis \(BDMMA\)\, to simultaneously model the batch effects and detect the microbial taxa associated with phenotypes. BDMMA automatically models the dependence among microbial taxa and is robust to the high dimensionality of the microbiome and their association sparsity.


.. conda:package:: bioconductor-bdmmacorrect

   |downloads_bioconductor-bdmmacorrect| |docker_bioconductor-bdmmacorrect|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.1-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.18.1-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ellipse: 
   :depends r-ggplot2: 
   :depends r-rcpp: ``>=0.12.12``
   :depends r-rcpparmadillo: 
   :depends r-rcppeigen: 
   :depends r-vegan: 
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

      mamba install bioconductor-bdmmacorrect

   and update with::

      mamba update bioconductor-bdmmacorrect

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bdmmacorrect

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bdmmacorrect:<tag>

   (see `bioconductor-bdmmacorrect/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bdmmacorrect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bdmmacorrect.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bdmmacorrect
   :alt:   (downloads)
.. |docker_bioconductor-bdmmacorrect| image:: https://quay.io/repository/biocontainers/bioconductor-bdmmacorrect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bdmmacorrect
.. _`bioconductor-bdmmacorrect/tags`: https://quay.io/repository/biocontainers/bioconductor-bdmmacorrect?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bdmmacorrect";
        var versions = ["1.18.1","1.16.0","1.16.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bdmmacorrect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bdmmacorrect/README.html
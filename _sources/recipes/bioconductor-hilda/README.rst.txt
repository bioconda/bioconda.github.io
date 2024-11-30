:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hilda'
.. highlight: bash

bioconductor-hilda
==================

.. conda:recipe:: bioconductor-hilda
   :replaces_section_title:
   :noindex:

   Conducting statistical inference on comparing the mutational exposures of mutational signatures by using hierarchical latent Dirichlet allocation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/HiLDA.html
   :license: GPL-3
   :recipe: /`bioconductor-hilda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilda/meta.yaml>`_

   A package built under the Bayesian framework of applying hierarchical latent Dirichlet allocation. It statistically tests whether the mutational exposures of mutational signatures \(Shiraishi\-model signatures\) are different between two groups. The package also provides inference and visualization.


.. conda:package:: bioconductor-hilda

   |downloads_bioconductor-hilda| |docker_bioconductor-hilda|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-2</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.3,<1.5.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.2,<3.3.0a0``
   :depends bioconductor-xvector: ``>=0.42.0,<0.43.0``
   :depends bioconductor-xvector: ``>=0.42.0,<0.43.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-abind: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-r2jags: 
   :depends r-rcpp: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-hilda

   and update with::

      mamba update bioconductor-hilda

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hilda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hilda:<tag>

   (see `bioconductor-hilda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hilda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hilda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hilda
   :alt:   (downloads)
.. |docker_bioconductor-hilda| image:: https://quay.io/repository/biocontainers/bioconductor-hilda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hilda
.. _`bioconductor-hilda/tags`: https://quay.io/repository/biocontainers/bioconductor-hilda?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hilda";
        var versions = ["1.16.0","1.14.0","1.12.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hilda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hilda/README.html
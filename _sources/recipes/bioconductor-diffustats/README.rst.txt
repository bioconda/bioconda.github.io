:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffustats'
.. highlight: bash

bioconductor-diffustats
=======================

.. conda:recipe:: bioconductor-diffustats
   :replaces_section_title:
   :noindex:

   Diffusion scores on biological networks

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/diffuStats.html
   :license: GPL-3
   :recipe: /`bioconductor-diffustats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffustats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffustats/meta.yaml>`_
   :links: biotools: :biotools:`diffuStats`, doi: :doi:`10.1093/bioinformatics/btx632`

   Label propagation approaches are a widely used procedure in computational biology for giving context to molecular entities using network data. Node labels\, which can derive from gene expression\, genome\-wide association studies\, protein domains or metabolomics profiling\, are propagated to their neighbours in the network\, effectively smoothing the scores through prior annotated knowledge and prioritising novel candidates. The R package diffuStats contains a collection of diffusion kernels and scoring approaches that facilitates their computation\, characterisation and benchmarking.


.. conda:package:: bioconductor-diffustats

   |downloads_bioconductor-diffustats| |docker_bioconductor-diffustats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-2</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.0-2</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.2-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-2``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.2-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``0.104.0-0``,  ``0.102.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-checkmate: 
   :depends r-expm: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-plyr: 
   :depends r-precrec: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rcppparallel: 
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

      mamba install bioconductor-diffustats

   and update with::

      mamba update bioconductor-diffustats

  To create a new environment, run::

      mamba create --name myenvname bioconductor-diffustats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diffustats:<tag>

   (see `bioconductor-diffustats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diffustats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffustats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffustats
   :alt:   (downloads)
.. |docker_bioconductor-diffustats| image:: https://quay.io/repository/biocontainers/bioconductor-diffustats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffustats
.. _`bioconductor-diffustats/tags`: https://quay.io/repository/biocontainers/bioconductor-diffustats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-diffustats";
        var versions = ["1.20.0","1.18.0","1.18.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffustats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffustats/README.html
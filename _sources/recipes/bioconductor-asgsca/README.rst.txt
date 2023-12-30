:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-asgsca'
.. highlight: bash

bioconductor-asgsca
===================

.. conda:recipe:: bioconductor-asgsca
   :replaces_section_title:
   :noindex:

   Association Studies for multiple SNPs and multiple traits using Generalized Structured Equation Models

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ASGSCA.html
   :license: GPL-3
   :recipe: /`bioconductor-asgsca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asgsca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asgsca/meta.yaml>`_
   :links: biotools: :biotools:`asgsca`, doi: :doi:`10.1002/gepi.21872`

   The package provides tools to model and test the association between multiple genotypes and multiple traits\, taking into account the prior biological knowledge. Genes\, and clinical pathways are incorporated in the model as latent variables. The method is based on Generalized Structured Component Analysis \(GSCA\).


.. conda:package:: bioconductor-asgsca

   |downloads_bioconductor-asgsca| |docker_bioconductor-asgsca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-asgsca

   and update with::

      mamba update bioconductor-asgsca

  To create a new environment, run::

      mamba create --name myenvname bioconductor-asgsca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-asgsca:<tag>

   (see `bioconductor-asgsca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-asgsca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-asgsca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-asgsca
   :alt:   (downloads)
.. |docker_bioconductor-asgsca| image:: https://quay.io/repository/biocontainers/bioconductor-asgsca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-asgsca
.. _`bioconductor-asgsca/tags`: https://quay.io/repository/biocontainers/bioconductor-asgsca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-asgsca";
        var versions = ["1.36.0","1.34.0","1.32.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-asgsca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-asgsca/README.html
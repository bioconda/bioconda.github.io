:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-watermelon'
.. highlight: bash

bioconductor-watermelon
=======================

.. conda:recipe:: bioconductor-watermelon
   :replaces_section_title:
   :noindex:

   Illumina 450 and EPIC methylation array normalization and metrics

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/wateRmelon.html
   :license: GPL-3
   :recipe: /`bioconductor-watermelon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-watermelon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-watermelon/meta.yaml>`_
   :links: biotools: :biotools:`watermelon`

   15 flavours of betas and three performance metrics\, with methods for objects produced by methylumi and minfi packages.


.. conda:package:: bioconductor-watermelon

   |downloads_bioconductor-watermelon| |docker_bioconductor-watermelon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.0.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.0.0-1``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminaio: ``>=0.44.0,<0.45.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-lumi: ``>=2.54.0,<2.55.0``
   :depends bioconductor-methylumi: ``>=2.48.0,<2.49.0``
   :depends bioconductor-roc: ``>=1.78.0,<1.79.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrixstats: 
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

      mamba install bioconductor-watermelon

   and update with::

      mamba update bioconductor-watermelon

  To create a new environment, run::

      mamba create --name myenvname bioconductor-watermelon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-watermelon:<tag>

   (see `bioconductor-watermelon/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-watermelon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-watermelon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-watermelon
   :alt:   (downloads)
.. |docker_bioconductor-watermelon| image:: https://quay.io/repository/biocontainers/bioconductor-watermelon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-watermelon
.. _`bioconductor-watermelon/tags`: https://quay.io/repository/biocontainers/bioconductor-watermelon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-watermelon";
        var versions = ["2.8.0","2.6.0","2.4.0","2.0.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-watermelon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-watermelon/README.html
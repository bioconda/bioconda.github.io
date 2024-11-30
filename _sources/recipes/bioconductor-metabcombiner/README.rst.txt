:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metabcombiner'
.. highlight: bash

bioconductor-metabcombiner
==========================

.. conda:recipe:: bioconductor-metabcombiner
   :replaces_section_title:
   :noindex:

   Method for Combining LC\-MS Metabolomics Feature Measurements

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/metabCombiner.html
   :license: GPL-3
   :recipe: /`bioconductor-metabcombiner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabcombiner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabcombiner/meta.yaml>`_

   This package aligns LC\-HRMS metabolomics datasets acquired from biologically similar specimens analyzed under similar\, but not necessarily identical\, conditions. Peak\-picked and simply aligned metabolomics feature tables \(consisting of m\/z\, rt\, and per\-sample abundance measurements\, plus optional identifiers \& adduct annotations\) are accepted as input. The package outputs a combined table of feature pair alignments\, organized into groups of similar m\/z\, and ranked by a similarity score. Input tables are assumed to be acquired using similar \(but not necessarily identical\) analytical methods.


.. conda:package:: bioconductor-metabcombiner

   |downloads_bioconductor-metabcombiner| |docker_bioconductor-metabcombiner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  <code>1.0.1-0</code>,  </span></summary>
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-dplyr: ``>=1.0``
   :depends r-matrixstats: 
   :depends r-mgcv: 
   :depends r-rlang: 
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

      mamba install bioconductor-metabcombiner

   and update with::

      mamba update bioconductor-metabcombiner

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metabcombiner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metabcombiner:<tag>

   (see `bioconductor-metabcombiner/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metabcombiner| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metabcombiner.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metabcombiner
   :alt:   (downloads)
.. |docker_bioconductor-metabcombiner| image:: https://quay.io/repository/biocontainers/bioconductor-metabcombiner/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metabcombiner
.. _`bioconductor-metabcombiner/tags`: https://quay.io/repository/biocontainers/bioconductor-metabcombiner?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metabcombiner";
        var versions = ["1.12.0","1.10.0","1.8.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metabcombiner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metabcombiner/README.html
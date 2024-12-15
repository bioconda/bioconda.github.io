:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simd'
.. highlight: bash

bioconductor-simd
=================

.. conda:recipe:: bioconductor-simd
   :replaces_section_title:
   :noindex:

   Statistical Inferences with MeDIP\-seq Data \(SIMD\) to infer the methylation level for each CpG site

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SIMD.html
   :license: GPL-3
   :recipe: /`bioconductor-simd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simd/meta.yaml>`_

   This package provides a inferential analysis method for detecting differentially expressed CpG sites in MeDIP\-seq data. It uses statistical framework and EM algorithm\, to identify differentially expressed CpG sites. The methods on this package are described in the article \'Methylation\-level Inferences and Detection of Differential Methylation with Medip\-seq Data\' by Yan Zhou\, Jiadi Zhu\, Mingtao Zhao\, Baoxue Zhang\, Chunfu Jiang and Xiyan Yang \(2018\, pending publication\).


.. conda:package:: bioconductor-simd

   |downloads_bioconductor-simd| |docker_bioconductor-simd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0a0``
   :depends bioconductor-methylmnm: ``>=1.44.0,<1.45.0``
   :depends bioconductor-methylmnm: ``>=1.44.0,<1.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-statmod: 
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

      mamba install bioconductor-simd

   and update with::

      mamba update bioconductor-simd

  To create a new environment, run::

      mamba create --name myenvname bioconductor-simd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simd:<tag>

   (see `bioconductor-simd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simd
   :alt:   (downloads)
.. |docker_bioconductor-simd| image:: https://quay.io/repository/biocontainers/bioconductor-simd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simd
.. _`bioconductor-simd/tags`: https://quay.io/repository/biocontainers/bioconductor-simd?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simd";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simd/README.html
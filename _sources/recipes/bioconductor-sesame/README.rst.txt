:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sesame'
.. highlight: bash

bioconductor-sesame
===================

.. conda:recipe:: bioconductor-sesame
   :replaces_section_title:
   :noindex:

   SEnsible Step\-wise Analysis of DNA MEthylation BeadChips

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/sesame.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sesame <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sesame>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sesame/meta.yaml>`_

   Tools For analyzing Illumina Infinium DNA methylation arrays. SeSAMe provides utilities to support analyses of multiple generations of Infinium DNA methylation BeadChips\, including preprocessing\, quality control\, visualization and inference. SeSAMe features accurate detection calling\, intelligent inference of ethnicity\, sex and advanced quality control routines.


.. conda:package:: bioconductor-sesame

   |downloads_bioconductor-sesame| |docker_bioconductor-sesame|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.4-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.3-0</code>,  <code>1.8.2-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.4-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.3-0``,  ``1.8.2-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-illuminaio: ``>=0.44.0,<0.45.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-sesamedata: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-wheatmap: ``>=0.2.0``
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

      mamba install bioconductor-sesame

   and update with::

      mamba update bioconductor-sesame

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sesame

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sesame:<tag>

   (see `bioconductor-sesame/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sesame| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sesame.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sesame
   :alt:   (downloads)
.. |docker_bioconductor-sesame| image:: https://quay.io/repository/biocontainers/bioconductor-sesame/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sesame
.. _`bioconductor-sesame/tags`: https://quay.io/repository/biocontainers/bioconductor-sesame?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sesame";
        var versions = ["1.20.0","1.18.4","1.16.0","1.12.0","1.10.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sesame/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sesame/README.html
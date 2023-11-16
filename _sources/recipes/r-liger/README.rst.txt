:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-liger'
.. highlight: bash

r-liger
=======

.. conda:recipe:: r-liger
   :replaces_section_title:
   :noindex:

   Uses an extension of nonnegative matrix factorization to identify shared and dataset\-specific factors. See Welch J\, Kozareva V\, et al \(2019\) \<doi\:10.1016\/j.cell.2019.05.006\>\, and Liu J\, Gao C\, Sodicoff J\, et al \(2020\) \<doi\:10.1038\/s41596\-020\-0391\-8\> for more details.

   :homepage: https://github.com/MacoskoLab/liger
   :license: GPL3 / GPL-3
   :recipe: /`r-liger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-liger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-liger/meta.yaml>`_

   


.. conda:package:: r-liger

   |downloads_r-liger| |docker_r-liger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-0</code>,  <code>1.0.0-5</code>,  <code>1.0.0-4</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.5.0.9000-3</code>,  <code>0.5.0.9000-2</code>,  </span></summary>
      

      ``1.0.1-0``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.5.0.9000-3``,  ``0.5.0.9000-2``,  ``0.5.0.9000-1``,  ``0.5.0.9000-0``,  ``0.4.2.9000-1``,  ``0.4.2.9000-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends openjdk: ``>=6``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-doparallel: 
   :depends r-dosnow: 
   :depends r-dplyr: 
   :depends r-fnn: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-hdf5r: 
   :depends r-hmisc: 
   :depends r-ica: 
   :depends r-irlba: 
   :depends r-mclust: 
   :depends r-patchwork: 
   :depends r-plyr: 
   :depends r-psych: 
   :depends r-rann: 
   :depends r-rann.l1: 
   :depends r-rcpp: ``>=0.12.10``
   :depends r-rcpparmadillo: 
   :depends r-rcppeigen: 
   :depends r-rcppprogress: 
   :depends r-reticulate: 
   :depends r-rtsne: 
   :depends r-scattermore: ``>=0.7``
   :depends r-snow: 
   :depends r-uwot: 
   :depends umap-learn: 
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

      mamba install r-liger

   and update with::

      mamba update r-liger

  To create a new environment, run::

      mamba create --name myenvname r-liger

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-liger:<tag>

   (see `r-liger/tags`_ for valid values for ``<tag>``)


.. |downloads_r-liger| image:: https://img.shields.io/conda/dn/bioconda/r-liger.svg?style=flat
   :target: https://anaconda.org/bioconda/r-liger
   :alt:   (downloads)
.. |docker_r-liger| image:: https://quay.io/repository/biocontainers/r-liger/status
   :target: https://quay.io/repository/biocontainers/r-liger
.. _`r-liger/tags`: https://quay.io/repository/biocontainers/r-liger?tab=tags


.. raw:: html

    <script>
        var package = "r-liger";
        var versions = ["1.0.1","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-liger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-liger/README.html
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
   :documentation: https://welch-lab.github.io/liger/index.html
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-liger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-liger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-liger/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cell.2019.05.006`

   


.. conda:package:: r-liger

   |downloads_r-liger| |docker_r-liger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-5</code>,  <code>1.0.0-4</code>,  <code>1.0.0-3</code>,  <code>1.0.0-2</code>,  </span></summary>
      

      ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.1-0``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.5.0.9000-3``,  ``0.5.0.9000-2``,  ``0.5.0.9000-1``,  ``0.5.0.9000-0``,  ``0.4.2.9000-1``,  ``0.4.2.9000-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-cli: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hdf5r: 
   :depends r-ica: 
   :depends r-irlba: 
   :depends r-leidenalg: ``>=1.1.1``
   :depends r-lifecycle: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-mclust: 
   :depends r-rann: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: ``>=0.12.10``
   :depends r-rcpparmadillo: 
   :depends r-rcppprogress: 
   :depends r-rlang: 
   :depends r-rtsne: 
   :depends r-scales: 
   :depends r-uwot: 
   :depends r-viridis: 
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
        var versions = ["2.1.0","2.0.1","2.0.0","2.0.0","1.0.1"];
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
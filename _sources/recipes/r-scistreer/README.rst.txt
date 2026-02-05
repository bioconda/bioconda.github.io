:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scistreer'
.. highlight: bash

r-scistreer
===========

.. conda:recipe:: r-scistreer
   :replaces_section_title:
   :noindex:

   Fast maximum\-likelihood phylogeny inference from noisy single\-cell data using the \'ScisTree\' algorithm by Yufeng Wu \(2019\) \<doi\:10.1093\/bioinformatics\/btz676\>. \'scistreer\' provides an \'R\' interface and improves speed via \'Rcpp\' and \'RcppParallel\'\, making the method applicable to massive single\-cell datasets \(\>10\,000 cells\).

   :homepage: https://github.com/kharchenkolab/scistreer, https://kharchenkolab.github.io/scistreer/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-scistreer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scistreer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scistreer/meta.yaml>`_

   


.. conda:package:: r-scistreer

   |downloads_r-scistreer| |docker_r-scistreer|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-ggtree: ``>=4.0.4,<4.1.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-paralleldist: 
   :depends r-patchwork: 
   :depends r-phangorn: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rcppparallel: 
   :depends r-reshape2: 
   :depends r-rhpcblasctl: 
   :depends r-stringr: 
   :depends r-tidygraph: 
   :depends tbb-devel: ``>=2022.3.0,<2022.4.0a0``
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

      mamba install r-scistreer

   and update with::

      mamba update r-scistreer

  To create a new environment, run::

      mamba create --name myenvname r-scistreer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-scistreer:<tag>

   (see `r-scistreer/tags`_ for valid values for ``<tag>``)


.. |downloads_r-scistreer| image:: https://img.shields.io/conda/dn/bioconda/r-scistreer.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scistreer
   :alt:   (downloads)
.. |docker_r-scistreer| image:: https://quay.io/repository/biocontainers/r-scistreer/status
   :target: https://quay.io/repository/biocontainers/r-scistreer
.. _`r-scistreer/tags`: https://quay.io/repository/biocontainers/r-scistreer?tab=tags


.. raw:: html

    <script>
        var package = "r-scistreer";
        var versions = ["1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scistreer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scistreer/README.html
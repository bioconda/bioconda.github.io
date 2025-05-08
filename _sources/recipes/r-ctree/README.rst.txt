:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ctree'
.. highlight: bash

r-ctree
=======

.. conda:recipe:: r-ctree
   :replaces_section_title:
   :noindex:

   Clone trees for Cancer Evolution studies from bulk sequencing data.

   :homepage: https://github.com/caravagnalab/ctree
   :documentation: https://caravagnalab.github.io/ctree/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-ctree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ctree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ctree/meta.yaml>`_

   The ctree package implements clones trees for cancer evolutionary studies. 
   These models are built from Cancer Cell Franctions \(CCFs\) clusters computed via 
   tumour subclonal deconvolution\, using either one or more tumour biopsies at once. 
   They can be used to model evolutionary trajectories from bulk sequencing data\, 
   especially if whole\-genome sequencing is available. The package implements S3 
   objects for the mutation trees\, as well as a Monte Carlo sampler to generate them\, 
   as well as functions to plot and analyze the trees. The sibling of a clone tree is 
   a mutation tree\, which is built from binary mutation profiles\; refer to the mtree 
   package for mutation trees.



.. conda:package:: r-ctree

   |downloads_r-ctree| |docker_r-ctree|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-clisymbols: 
   :depends r-covr: 
   :depends r-crayon: 
   :depends r-dplyr: 
   :depends r-easypar: 
   :depends r-entropy: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-ggrepel: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-matrixcalc: 
   :depends r-matrixstats: 
   :depends r-pio: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-tidygraph: 
   :depends r-tidyverse: 
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

      mamba install r-ctree

   and update with::

      mamba update r-ctree

  To create a new environment, run::

      mamba create --name myenvname r-ctree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-ctree:<tag>

   (see `r-ctree/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ctree| image:: https://img.shields.io/conda/dn/bioconda/r-ctree.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ctree
   :alt:   (downloads)
.. |docker_r-ctree| image:: https://quay.io/repository/biocontainers/r-ctree/status
   :target: https://quay.io/repository/biocontainers/r-ctree
.. _`r-ctree/tags`: https://quay.io/repository/biocontainers/r-ctree?tab=tags


.. raw:: html

    <script>
        var package = "r-ctree";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ctree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ctree/README.html
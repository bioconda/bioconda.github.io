:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-conos'
.. highlight: bash

r-conos
=======

.. conda:recipe:: r-conos
   :replaces_section_title:
   :noindex:

   Wires together large collections of single\-cell RNA\-seq datasets\, which allows for both the identification of recurrent cell clusters and the propagation of information between datasets in multi\-sample or atlas\-scale collections. \'Conos\' focuses on the uniform mapping of homologous cell types across heterogeneous sample collections. For instance\, users could investigate a collection of dozens of peripheral blood samples from cancer patients combined with dozens of controls\, which perhaps includes samples of a related tissue such as lymph nodes. This package interacts with data available through the \'conosPanel\' package\, which is available in a \'drat\' repository. To access this data package\, see the instructions at \<https\:\/\/github.com\/kharchenkolab\/conos\>. The size of the \'conosPanel\' package is approximately 12 MB.

   :homepage: https://github.com/kharchenkolab/conos
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-conos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-conos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-conos/meta.yaml>`_

   


.. conda:package:: r-conos

   |downloads_r-conos| |docker_r-conos|

   :versions:
      
      

      ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``

      

   
   :depends bioconductor-complexheatmap: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-abind: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-dendextend: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-irlba: 
   :depends r-leidenalg: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-n2r: 
   :depends r-r6: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rcppeigen: 
   :depends r-rcppprogress: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-rtsne: 
   :depends r-sccore: ``>=1.0.0``
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

      mamba install r-conos

   and update with::

      mamba update r-conos

  To create a new environment, run::

      mamba create --name myenvname r-conos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-conos:<tag>

   (see `r-conos/tags`_ for valid values for ``<tag>``)


.. |downloads_r-conos| image:: https://img.shields.io/conda/dn/bioconda/r-conos.svg?style=flat
   :target: https://anaconda.org/bioconda/r-conos
   :alt:   (downloads)
.. |docker_r-conos| image:: https://quay.io/repository/biocontainers/r-conos/status
   :target: https://quay.io/repository/biocontainers/r-conos
.. _`r-conos/tags`: https://quay.io/repository/biocontainers/r-conos?tab=tags


.. raw:: html

    <script>
        var package = "r-conos";
        var versions = ["1.5.0","1.5.0","1.5.0","1.5.0","1.4.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-conos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-conos/README.html
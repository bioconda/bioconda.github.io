:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-orthos'
.. highlight: bash

bioconductor-orthos
===================

.. conda:recipe:: bioconductor-orthos
   :replaces_section_title:
   :noindex:

   \`orthos\` is an R package for variance decomposition using conditional variational auto\-encoders

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/orthos.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-orthos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orthos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orthos/meta.yaml>`_

   \`orthos\` decomposes RNA\-seq contrasts\, for example obtained from a gene knock\-out or compound treatment experiment\, into unspecific and experiment\-specific components. Original and decomposed contrasts can be efficiently queried against a large database of contrasts \(derived from ARCHS4\, https\:\/\/maayanlab.cloud\/archs4\/\) to identify similar experiments. \`orthos\` furthermore provides plotting functions to visualize the results of such a search for similar contrasts.


.. conda:package:: bioconductor-orthos

   |downloads_bioconductor-orthos| |docker_bioconductor-orthos|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-basilisk: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-hdf5array: ``>=1.34.0,<1.35.0``
   :depends bioconductor-orthosdata: ``>=1.4.0,<1.5.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-colorspace: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-ggsci: 
   :depends r-keras: 
   :depends r-plyr: 
   :depends r-reticulate: 
   :depends r-rlang: 
   :depends r-tensorflow: 
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

      mamba install bioconductor-orthos

   and update with::

      mamba update bioconductor-orthos

  To create a new environment, run::

      mamba create --name myenvname bioconductor-orthos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-orthos:<tag>

   (see `bioconductor-orthos/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-orthos| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-orthos.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-orthos
   :alt:   (downloads)
.. |docker_bioconductor-orthos| image:: https://quay.io/repository/biocontainers/bioconductor-orthos/status
   :target: https://quay.io/repository/biocontainers/bioconductor-orthos
.. _`bioconductor-orthos/tags`: https://quay.io/repository/biocontainers/bioconductor-orthos?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-orthos";
        var versions = ["1.4.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-orthos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-orthos/README.html
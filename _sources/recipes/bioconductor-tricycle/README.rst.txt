:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tricycle'
.. highlight: bash

bioconductor-tricycle
=====================

.. conda:recipe:: bioconductor-tricycle
   :replaces_section_title:
   :noindex:

   tricycle\: Transferable Representation and Inference of cell cycle

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/tricycle.html
   :license: GPL-3
   :recipe: /`bioconductor-tricycle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tricycle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tricycle/meta.yaml>`_

   The package contains functions to infer and visualize cell cycle process using Single Cell RNASeq data. It exploits the idea of transfer learning\, projecting new data to the previous learned biologically interpretable space. We provide a pre\-learned cell cycle space\, which could be used to infer cell cycle time of human and mouse single cell samples. In addition\, we also offer functions to visualize cell cycle time on different embeddings and functions to build new reference.


.. conda:package:: bioconductor-tricycle

   |downloads_bioconductor-tricycle| |docker_bioconductor-tricycle|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circular: 
   :depends r-dplyr: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-rcolorbrewer: 
   :depends r-scattermore: 
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

      mamba install bioconductor-tricycle

   and update with::

      mamba update bioconductor-tricycle

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tricycle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tricycle:<tag>

   (see `bioconductor-tricycle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tricycle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tricycle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tricycle
   :alt:   (downloads)
.. |docker_bioconductor-tricycle| image:: https://quay.io/repository/biocontainers/bioconductor-tricycle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tricycle
.. _`bioconductor-tricycle/tags`: https://quay.io/repository/biocontainers/bioconductor-tricycle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tricycle";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tricycle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tricycle/README.html
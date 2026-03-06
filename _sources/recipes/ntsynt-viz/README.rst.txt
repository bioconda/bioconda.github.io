:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntsynt-viz'
.. highlight: bash

ntsynt-viz
==========

.. conda:recipe:: ntsynt-viz
   :replaces_section_title:
   :noindex:

   Visualizing multi\-genome synteny patterns

   :homepage: https://github.com/bcgsc/ntSynt-viz
   :license: GPL-3.0
   :recipe: /`ntsynt-viz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntsynt-viz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntsynt-viz/meta.yaml>`_

   


.. conda:package:: ntsynt-viz

   |downloads_ntsynt-viz| |docker_ntsynt-viz|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-ggtree: 
   :depends bioconductor-treeio: 
   :depends intervaltree: 
   :depends python: ``>=3.8``
   :depends quicktree: 
   :depends r-argparse: 
   :depends r-base: 
   :depends r-dplyr: 
   :depends r-gggenomes: ``>=1.1.0``
   :depends r-ggpubr: 
   :depends r-phytools: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends snakemake: 
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

      mamba install ntsynt-viz

   and update with::

      mamba update ntsynt-viz

  To create a new environment, run::

      mamba create --name myenvname ntsynt-viz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ntsynt-viz:<tag>

   (see `ntsynt-viz/tags`_ for valid values for ``<tag>``)


.. |downloads_ntsynt-viz| image:: https://img.shields.io/conda/dn/bioconda/ntsynt-viz.svg?style=flat
   :target: https://anaconda.org/bioconda/ntsynt-viz
   :alt:   (downloads)
.. |docker_ntsynt-viz| image:: https://quay.io/repository/biocontainers/ntsynt-viz/status
   :target: https://quay.io/repository/biocontainers/ntsynt-viz
.. _`ntsynt-viz/tags`: https://quay.io/repository/biocontainers/ntsynt-viz?tab=tags


.. raw:: html

    <script>
        var package = "ntsynt-viz";
        var versions = ["1.0.2","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntsynt-viz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntsynt-viz/README.html
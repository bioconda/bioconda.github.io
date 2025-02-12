:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scevan'
.. highlight: bash

r-scevan
========

.. conda:recipe:: r-scevan
   :replaces_section_title:
   :noindex:

   Single CEll Variational Aneuploidy aNalysis

   :homepage: https://github.com/AntonioDeFalco/SCEVAN/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-scevan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scevan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scevan/meta.yaml>`_

   


.. conda:package:: r-scevan

   |downloads_r-scevan| |docker_r-scevan|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-fgsea: 
   :depends bioconductor-ggtree: 
   :depends bioconductor-scran: 
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-optparse: 
   :depends r-paralleldist: 
   :depends r-pheatmap: 
   :depends r-rtsne: 
   :depends r-tidytree: 
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

      mamba install r-scevan

   and update with::

      mamba update r-scevan

  To create a new environment, run::

      mamba create --name myenvname r-scevan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-scevan:<tag>

   (see `r-scevan/tags`_ for valid values for ``<tag>``)


.. |downloads_r-scevan| image:: https://img.shields.io/conda/dn/bioconda/r-scevan.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scevan
   :alt:   (downloads)
.. |docker_r-scevan| image:: https://quay.io/repository/biocontainers/r-scevan/status
   :target: https://quay.io/repository/biocontainers/r-scevan
.. _`r-scevan/tags`: https://quay.io/repository/biocontainers/r-scevan?tab=tags


.. raw:: html

    <script>
        var package = "r-scevan";
        var versions = ["1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scevan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scevan/README.html
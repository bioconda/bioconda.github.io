:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-epitrace'
.. highlight: bash

r-epitrace
==========

.. conda:recipe:: r-epitrace
   :replaces_section_title:
   :noindex:

   Inference of cell age and phylogeny from single cell ATAC data.

   :homepage: https://epitrace.readthedocs.io
   :developer docs: https://github.com/MagpiePKU/EpiTrace
   :license: GPL / GPL-3.0-or-later
   :recipe: /`r-epitrace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-epitrace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-epitrace/meta.yaml>`_

   


.. conda:package:: r-epitrace

   |downloads_r-epitrace| |docker_r-epitrace|

   :versions:
      
      

      ``0.0.1.3-0``

      

   
   :depends bioconductor-genomicranges: 
   :depends bioconductor-ggtree: 
   :depends bioconductor-plyranges: 
   :depends bioconductor-sparsematrixstats: 
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-easylift: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-nnls: 
   :depends r-rcolorbrewer: 
   :depends r-seurat: ``>=4.0``
   :depends r-seuratobject: 
   :depends r-signac: ``>=1.5.0``
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-wgcna: ``>=1.7``
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

      mamba install r-epitrace

   and update with::

      mamba update r-epitrace

  To create a new environment, run::

      mamba create --name myenvname r-epitrace

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-epitrace:<tag>

   (see `r-epitrace/tags`_ for valid values for ``<tag>``)


.. |downloads_r-epitrace| image:: https://img.shields.io/conda/dn/bioconda/r-epitrace.svg?style=flat
   :target: https://anaconda.org/bioconda/r-epitrace
   :alt:   (downloads)
.. |docker_r-epitrace| image:: https://quay.io/repository/biocontainers/r-epitrace/status
   :target: https://quay.io/repository/biocontainers/r-epitrace
.. _`r-epitrace/tags`: https://quay.io/repository/biocontainers/r-epitrace?tab=tags


.. raw:: html

    <script>
        var package = "r-epitrace";
        var versions = ["0.0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-epitrace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-epitrace/README.html
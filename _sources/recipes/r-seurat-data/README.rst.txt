:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-seurat-data'
.. highlight: bash

r-seurat-data
=============

.. conda:recipe:: r-seurat-data
   :replaces_section_title:
   :noindex:

   Single cell RNA sequencing datasets can be large\, consisting of matrices that contain expression data for several thousand features across several thousand cells. This package is designed to easily install\, manage\, and learn about various single\-cell datasets\, provided Seurat objects and distributed as independent packages.

   :homepage: http://www.satijalab.org/seurat
   :developer docs: https://github.com/satijalab/seurat-data
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-seurat-data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seurat-data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seurat-data/meta.yaml>`_

   


.. conda:package:: r-seurat-data

   |downloads_r-seurat-data| |docker_r-seurat-data|

   :versions:
      
      

      ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-crayon: 
   :depends r-rappdirs: 
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

      mamba install r-seurat-data

   and update with::

      mamba update r-seurat-data

  To create a new environment, run::

      mamba create --name myenvname r-seurat-data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-seurat-data:<tag>

   (see `r-seurat-data/tags`_ for valid values for ``<tag>``)


.. |downloads_r-seurat-data| image:: https://img.shields.io/conda/dn/bioconda/r-seurat-data.svg?style=flat
   :target: https://anaconda.org/bioconda/r-seurat-data
   :alt:   (downloads)
.. |docker_r-seurat-data| image:: https://quay.io/repository/biocontainers/r-seurat-data/status
   :target: https://quay.io/repository/biocontainers/r-seurat-data
.. _`r-seurat-data/tags`: https://quay.io/repository/biocontainers/r-seurat-data?tab=tags


.. raw:: html

    <script>
        var package = "r-seurat-data";
        var versions = ["0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-seurat-data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-seurat-data/README.html
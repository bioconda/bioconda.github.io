:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-seurat-disk'
.. highlight: bash

r-seurat-disk
=============

.. conda:recipe:: r-seurat-disk
   :replaces_section_title:
   :noindex:

   The h5Seurat file format is specifically designed for the storage and analysis of multi\-modal single\-cell and spatially\-resolved expression experiments\, for example\, from CITE\-seq or 10X Visium technologies. It holds all molecular information and associated metadata\, including \(for example\) nearest\-neighbor graphs\, dimensional reduction information\, spatial coordinates and image data\, and cluster labels. We also support rapid and on\-disk conversion between h5Seurat and AnnData objects\, with the goal of enhancing interoperability between Seurat and Scanpy.

   :homepage: https://mojaveazure.github.io/seurat-disk/
   :developer docs: https://github.com/mojaveazure/seurat-disk
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-seurat-disk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seurat-disk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seurat-disk/meta.yaml>`_

   


.. conda:package:: r-seurat-disk

   |downloads_r-seurat-disk| |docker_r-seurat-disk|

   :versions:
      
      

      ``0.0.0.9021-1``,  ``0.0.0.9021-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: ``>=2.0.1``
   :depends r-crayon: ``>=1.3.4``
   :depends r-hdf5r: ``>=1.3.0``
   :depends r-matrix: ``>=1.2.18``
   :depends r-r6: ``>=2.4.1``
   :depends r-rlang: ``>=0.4.4``
   :depends r-seurat: ``>=3.2.0``
   :depends r-seuratobject: ``>=4.0.0``
   :depends r-stringi: ``>=1.4.6``
   :depends r-withr: ``>=2.1.2``
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

      mamba install r-seurat-disk

   and update with::

      mamba update r-seurat-disk

  To create a new environment, run::

      mamba create --name myenvname r-seurat-disk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-seurat-disk:<tag>

   (see `r-seurat-disk/tags`_ for valid values for ``<tag>``)


.. |downloads_r-seurat-disk| image:: https://img.shields.io/conda/dn/bioconda/r-seurat-disk.svg?style=flat
   :target: https://anaconda.org/bioconda/r-seurat-disk
   :alt:   (downloads)
.. |docker_r-seurat-disk| image:: https://quay.io/repository/biocontainers/r-seurat-disk/status
   :target: https://quay.io/repository/biocontainers/r-seurat-disk
.. _`r-seurat-disk/tags`: https://quay.io/repository/biocontainers/r-seurat-disk?tab=tags


.. raw:: html

    <script>
        var package = "r-seurat-disk";
        var versions = ["0.0.0.9021","0.0.0.9021"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-seurat-disk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-seurat-disk/README.html
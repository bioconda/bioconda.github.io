:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-seurat-disk'
.. highlight: bash

r-seurat-disk
=============

.. conda:recipe:: r-seurat-disk
   :replaces_section_title:
   :noindex:

   The h5Seurat file format is specifically designed for the storage and analysis of multi\-modal single\-cell and spatially\-resolved expression experiments\, for example\, from CITE\-seq or 10X Visium technologies. It holds all molecular information and associated metadata\, including \(for example\) nearest\-neighbor graphs\, dimensional reduction information\, spatial coordinates and image data\, and cluster labels. We also support rapid and on\-disk conversion between h5Seurat and AnnData objects\, with the goal of enhancing interoperability between Seurat and Scanpy.

   :homepage: https://mojaveazure.github.io/seurat-disk
   :developer docs: https://github.com/mojaveazure/seurat-disk
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-seurat-disk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seurat-disk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seurat-disk/meta.yaml>`_

   


.. conda:package:: r-seurat-disk

   |downloads_r-seurat-disk| |docker_r-seurat-disk|

   :versions:
      
      

      ``0.0.0.9021-2``,  ``0.0.0.9021-1``,  ``0.0.0.9021-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cli: ``>=2.0.1``
   :depends on r-crayon: ``>=1.3.4``
   :depends on r-hdf5r: ``>=1.3.0``
   :depends on r-matrix: ``>=1.2.18``
   :depends on r-r6: ``>=2.4.1``
   :depends on r-rlang: ``>=0.4.4``
   :depends on r-seurat: ``>=3.2.0``
   :depends on r-seuratobject: ``>=4.0.0``
   :depends on r-stringi: ``>=1.4.6``
   :depends on r-withr: ``>=2.1.2``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install r-seurat-disk

to add into an existing workspace instead, run::

    pixi add r-seurat-disk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-seurat-disk

Alternatively, to install into a new environment, run::

    conda create -n envname r-seurat-disk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-seurat-disk:<tag>

(see `r-seurat-disk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-seurat-disk| image:: https://img.shields.io/conda/dn/bioconda/r-seurat-disk.svg?style=flat
   :target: https://anaconda.org/bioconda/r-seurat-disk
   :alt:   (downloads)
.. |docker_r-seurat-disk| image:: https://quay.io/repository/biocontainers/r-seurat-disk/status
   :target: https://quay.io/repository/biocontainers/r-seurat-disk
.. _`r-seurat-disk/tags`: https://quay.io/repository/biocontainers/r-seurat-disk?tab=tags


.. raw:: html

    <script>
        var package = "r-seurat-disk";
        var versions = ["0.0.0.9021","0.0.0.9021","0.0.0.9021"];
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
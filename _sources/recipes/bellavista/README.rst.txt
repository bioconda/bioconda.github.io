:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bellavista'
.. highlight: bash

bellavista
==========

.. conda:recipe:: bellavista
   :replaces_section_title:
   :noindex:

   Python package for interactive visualization of imaging\-based spatial transcriptomics.

   :homepage: https://github.com/pkosurilab/BellaVista
   :license: MIT
   :recipe: /`bellavista <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bellavista>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bellavista/meta.yaml>`_

   


.. conda:package:: bellavista

   |downloads_bellavista| |docker_bellavista|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends on dask-core: ``>=2022.02.0``
   :depends on dask-image: 
   :depends on h5py: 
   :depends on imagecodecs: 
   :depends on matplotlib-base: 
   :depends on mesa-libgl-cos6-x86_64: 
   :depends on napari: 
   :depends on napari-ome-zarr: 
   :depends on numpy: 
   :depends on ome-zarr: ``>=0.3.0``
   :depends on pandas: 
   :depends on pyarrow: 
   :depends on pyqt: 
   :depends on python: ``>=3.9``
   :depends on scikit-image: 
   :depends on shapely: 
   :depends on tqdm: 
   :depends on zarr: ``>=2.8.1,<3``

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

    pixi global install bellavista

to add into an existing workspace instead, run::

    pixi add bellavista

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bellavista

Alternatively, to install into a new environment, run::

    conda create -n envname bellavista

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bellavista:<tag>

(see `bellavista/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bellavista| image:: https://img.shields.io/conda/dn/bioconda/bellavista.svg?style=flat
   :target: https://anaconda.org/bioconda/bellavista
   :alt:   (downloads)
.. |docker_bellavista| image:: https://quay.io/repository/biocontainers/bellavista/status
   :target: https://quay.io/repository/biocontainers/bellavista
.. _`bellavista/tags`: https://quay.io/repository/biocontainers/bellavista?tab=tags


.. raw:: html

    <script>
        var package = "bellavista";
        var versions = ["0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bellavista/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bellavista/README.html
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

      

   
   :depends dask-core: ``>=2022.02.0``
   :depends dask-image: 
   :depends h5py: 
   :depends imagecodecs: 
   :depends matplotlib-base: 
   :depends mesa-libgl-cos6-x86_64: 
   :depends napari: 
   :depends napari-ome-zarr: 
   :depends numpy: 
   :depends ome-zarr: ``>=0.3.0``
   :depends pandas: 
   :depends pyarrow: 
   :depends pyqt: 
   :depends python: ``>=3.9``
   :depends scikit-image: 
   :depends shapely: 
   :depends tqdm: 
   :depends zarr: ``>=2.8.1,<3``
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

      mamba install bellavista

   and update with::

      mamba update bellavista

  To create a new environment, run::

      mamba create --name myenvname bellavista

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bellavista:<tag>

   (see `bellavista/tags`_ for valid values for ``<tag>``)


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
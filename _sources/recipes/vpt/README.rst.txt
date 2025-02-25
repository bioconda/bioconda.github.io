:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vpt'
.. highlight: bash

vpt
===

.. conda:recipe:: vpt
   :replaces_section_title:
   :noindex:

   Command line tool for highly parallelized processing of Vizgen data

   :homepage: https://github.com/Vizgen/vizgen-postprocessing
   :license: Apache-2.0
   :recipe: /`vpt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vpt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vpt/meta.yaml>`_

   


.. conda:package:: vpt

   |downloads_vpt| |docker_vpt|

   :versions:
      
      

      ``1.3.0-0``

      

   
   :depends boto3: ``>=1.17``
   :depends dask-core: ``>=2023.2.0``
   :depends distributed: ``>=2023.2.0``
   :depends fastparquet: 
   :depends fsspec: 
   :depends gcsfs: 
   :depends geopandas: ``>=0.13.2``
   :depends h5py: ``>=3.7.0``
   :depends ipykernel: 
   :depends jinja2: 
   :depends leidenalg: ``>=0.10.1``
   :depends matplotlib-base: ``<=3.7.0``
   :depends numpy: ``>=1.24.3``
   :depends pandas: ``>=2.0.3``
   :depends plotly: ``>=5.17.0``
   :depends pretty_html_table: ``>=0.9.16``
   :depends pyarrow: ``>=8.0.0``
   :depends python: ``>=3.9,<3.11``
   :depends python-dotenv: ``>=0.20.0``
   :depends python-kaleido: 
   :depends pytorch: ``>=2.0.0,!=2.0.1,!=2.1.0``
   :depends pyvips: ``>=2.2.1``
   :depends rasterio: ``>=1.3.0``
   :depends s3fs: 
   :depends scanpy: 
   :depends scipy: ``>=1.8.1``
   :depends shapely: ``>=2.0.0``
   :depends vpt-core: ``>=1.2.0``
   :depends vpt-segmentation-packing: ``>=1.0.0``
   :depends wrapt_timeout_decorator: ``>=1.5.1``
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

      mamba install vpt

   and update with::

      mamba update vpt

  To create a new environment, run::

      mamba create --name myenvname vpt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vpt:<tag>

   (see `vpt/tags`_ for valid values for ``<tag>``)


.. |downloads_vpt| image:: https://img.shields.io/conda/dn/bioconda/vpt.svg?style=flat
   :target: https://anaconda.org/bioconda/vpt
   :alt:   (downloads)
.. |docker_vpt| image:: https://quay.io/repository/biocontainers/vpt/status
   :target: https://quay.io/repository/biocontainers/vpt
.. _`vpt/tags`: https://quay.io/repository/biocontainers/vpt?tab=tags


.. raw:: html

    <script>
        var package = "vpt";
        var versions = ["1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vpt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vpt/README.html
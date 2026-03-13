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

      

   
   :depends on boto3: ``>=1.17``
   :depends on dask-core: ``>=2023.2.0``
   :depends on distributed: ``>=2023.2.0``
   :depends on fastparquet: 
   :depends on fsspec: 
   :depends on gcsfs: 
   :depends on geopandas: ``>=0.13.2``
   :depends on h5py: ``>=3.7.0``
   :depends on ipykernel: 
   :depends on jinja2: 
   :depends on leidenalg: ``>=0.10.1``
   :depends on matplotlib-base: ``<=3.7.0``
   :depends on numpy: ``>=1.24.3``
   :depends on pandas: ``>=2.0.3``
   :depends on plotly: ``>=5.17.0``
   :depends on pretty_html_table: ``>=0.9.16``
   :depends on pyarrow: ``>=8.0.0``
   :depends on python: ``>=3.9,<3.11``
   :depends on python-dotenv: ``>=0.20.0``
   :depends on python-kaleido: 
   :depends on pytorch: ``>=2.0.0,!=2.0.1,!=2.1.0``
   :depends on pyvips: ``>=2.2.1``
   :depends on rasterio: ``>=1.3.0``
   :depends on s3fs: 
   :depends on scanpy: 
   :depends on scipy: ``>=1.8.1``
   :depends on shapely: ``>=2.0.0``
   :depends on vpt-core: ``>=1.2.0``
   :depends on vpt-segmentation-packing: ``>=1.0.0``
   :depends on wrapt_timeout_decorator: ``>=1.5.1``

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

    pixi global install vpt

to add into an existing workspace instead, run::

    pixi add vpt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vpt

Alternatively, to install into a new environment, run::

    conda create -n envname vpt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vpt:<tag>

(see `vpt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vpt-core'
.. highlight: bash

vpt-core
========

.. conda:recipe:: vpt-core
   :replaces_section_title:
   :noindex:

   Core components for the Vizgen Post\-processing Tool

   :homepage: https://github.com/Vizgen/vpt-core
   :license: Apache-2.0
   :recipe: /`vpt-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vpt-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vpt-core/meta.yaml>`_

   


.. conda:package:: vpt-core

   |downloads_vpt-core| |docker_vpt-core|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on boto3: ``>=1.17``
   :depends on fsspec: ``>=2021.10.0``
   :depends on gcsfs: ``>=2021.10.0``
   :depends on geopandas: ``>=0.13.2``
   :depends on geos: ``>=3.10.2``
   :depends on numpy: 
   :depends on pandas: ``>=2.0.3,<3.0.0``
   :depends on pillow: ``>=9.4.0``
   :depends on psutil: 
   :depends on py-opencv: 
   :depends on pyarrow: ``>=8.0.0,<14.0.0``
   :depends on python: ``>=3.9,<3.11``
   :depends on python-dotenv: ``>=0.20.0``
   :depends on rasterio: 
   :depends on s3fs: ``>=2021.10.0``
   :depends on scikit-image: ``>=0.19.3``
   :depends on shapely: 
   :depends on tenacity: ``>=8.2.2``
   :depends on tqdm: 

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

    pixi global install vpt-core

to add into an existing workspace instead, run::

    pixi add vpt-core

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vpt-core

Alternatively, to install into a new environment, run::

    conda create -n envname vpt-core

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vpt-core:<tag>

(see `vpt-core/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vpt-core| image:: https://img.shields.io/conda/dn/bioconda/vpt-core.svg?style=flat
   :target: https://anaconda.org/bioconda/vpt-core
   :alt:   (downloads)
.. |docker_vpt-core| image:: https://quay.io/repository/biocontainers/vpt-core/status
   :target: https://quay.io/repository/biocontainers/vpt-core
.. _`vpt-core/tags`: https://quay.io/repository/biocontainers/vpt-core?tab=tags


.. raw:: html

    <script>
        var package = "vpt-core";
        var versions = ["1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vpt-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vpt-core/README.html
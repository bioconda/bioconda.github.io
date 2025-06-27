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

      

   
   :depends boto3: ``>=1.17``
   :depends fsspec: ``>=2021.10.0``
   :depends gcsfs: ``>=2021.10.0``
   :depends geopandas: ``>=0.13.2``
   :depends geos: ``>=3.10.2``
   :depends numpy: 
   :depends pandas: ``>=2.0.3,<3.0.0``
   :depends pillow: ``>=9.4.0``
   :depends psutil: 
   :depends py-opencv: 
   :depends pyarrow: ``>=8.0.0,<14.0.0``
   :depends python: ``>=3.9,<3.11``
   :depends python-dotenv: ``>=0.20.0``
   :depends rasterio: 
   :depends s3fs: ``>=2021.10.0``
   :depends scikit-image: ``>=0.19.3``
   :depends shapely: 
   :depends tenacity: ``>=8.2.2``
   :depends tqdm: 
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

      mamba install vpt-core

   and update with::

      mamba update vpt-core

  To create a new environment, run::

      mamba create --name myenvname vpt-core

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vpt-core:<tag>

   (see `vpt-core/tags`_ for valid values for ``<tag>``)


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
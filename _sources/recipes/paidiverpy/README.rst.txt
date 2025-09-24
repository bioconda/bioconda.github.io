:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paidiverpy'
.. highlight: bash

paidiverpy
==========

.. conda:recipe:: paidiverpy
   :replaces_section_title:
   :noindex:

   A library to preprocess image data.

   :homepage: https://github.com/paidiver/paidiverpy
   :license: APACHE / Apache-2.0
   :recipe: /`paidiverpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paidiverpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paidiverpy/meta.yaml>`_

   


.. conda:package:: paidiverpy

   |downloads_paidiverpy| |docker_paidiverpy|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends boto3: ``>=1.35.92``
   :depends botocore: ``>=1.35.92``
   :depends dask: ``>=2024.10.0``
   :depends dask-image: ``2024.5.3``
   :depends dask-jobqueue: ``>=0.9.0``
   :depends distributed: ``>=2024.10.0``
   :depends geopandas: ``>=1.0.1``
   :depends geopy: ``>=2.4.1``
   :depends ipython: ``>=8.26.0``
   :depends jsonschema: ``>=4.23.0``
   :depends matplotlib-base: ``>=3.5.0``
   :depends numpy: ``<2.0``
   :depends opencv: ``>=4.11``
   :depends openpyxl: ``>=3.1``
   :depends pandas: ``>=2.2.2``
   :depends pillow: ``>=10.4.0``
   :depends pydantic: 
   :depends python: ``>=3.10``
   :depends python-dotenv: ``>=1.0.1``
   :depends pyyaml: ``>=6.0``
   :depends rawpy: 
   :depends scikit-image: ``>=0.24.0``
   :depends scipy: ``>=1.14``
   :depends shapely: ``2.0.7``
   :depends tqdm: ``>=4.66.4``
   :depends xarray: 
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

      mamba install paidiverpy

   and update with::

      mamba update paidiverpy

  To create a new environment, run::

      mamba create --name myenvname paidiverpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/paidiverpy:<tag>

   (see `paidiverpy/tags`_ for valid values for ``<tag>``)


.. |downloads_paidiverpy| image:: https://img.shields.io/conda/dn/bioconda/paidiverpy.svg?style=flat
   :target: https://anaconda.org/bioconda/paidiverpy
   :alt:   (downloads)
.. |docker_paidiverpy| image:: https://quay.io/repository/biocontainers/paidiverpy/status
   :target: https://quay.io/repository/biocontainers/paidiverpy
.. _`paidiverpy/tags`: https://quay.io/repository/biocontainers/paidiverpy?tab=tags


.. raw:: html

    <script>
        var package = "paidiverpy";
        var versions = ["0.2.1","0.2.0","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paidiverpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paidiverpy/README.html
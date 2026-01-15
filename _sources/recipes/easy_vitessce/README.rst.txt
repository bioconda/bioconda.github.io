:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'easy_vitessce'
.. highlight: bash

easy_vitessce
=============

.. conda:recipe:: easy_vitessce
   :replaces_section_title:
   :noindex:

   A package to easily use Vitessce to create interactive plots for single\-cell data

   :homepage: https://github.com/vitessce/easy_vitessce/
   :license: MIT
   :recipe: /`easy_vitessce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/easy_vitessce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/easy_vitessce/meta.yaml>`_

   


.. conda:package:: easy_vitessce

   |downloads_easy_vitessce| |docker_easy_vitessce|

   :versions:
      
      

      ``0.0.9-0``

      

   
   :depends anndata: ``>=0.11.4``
   :depends black: ``>=21.11b1``
   :depends dask-core: ``2024.11.1``
   :depends distributed: ``<=2024.11.2``
   :depends donfig: ``>=0.3.1``
   :depends numcodecs: ``>=0.5.7,<0.16.0``
   :depends numpy: ``>=1.21.2``
   :depends pandas: ``>=1.1.2``
   :depends python: ``>=3.9``
   :depends scanpy: ``>=1.11.3``
   :depends scipy: ``>=1.2.1``
   :depends spatialdata: ``>=0.3.0``
   :depends spatialdata-plot: ``>=0.2.7``
   :depends vitessce-python: ``>=3.7.9``
   :depends xarray: ``>=2024.10.0,<=2025.3.0``
   :depends zarr: ``>=2.5.0,<3``
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

      mamba install easy_vitessce

   and update with::

      mamba update easy_vitessce

  To create a new environment, run::

      mamba create --name myenvname easy_vitessce

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/easy_vitessce:<tag>

   (see `easy_vitessce/tags`_ for valid values for ``<tag>``)


.. |downloads_easy_vitessce| image:: https://img.shields.io/conda/dn/bioconda/easy_vitessce.svg?style=flat
   :target: https://anaconda.org/bioconda/easy_vitessce
   :alt:   (downloads)
.. |docker_easy_vitessce| image:: https://quay.io/repository/biocontainers/easy_vitessce/status
   :target: https://quay.io/repository/biocontainers/easy_vitessce
.. _`easy_vitessce/tags`: https://quay.io/repository/biocontainers/easy_vitessce?tab=tags


.. raw:: html

    <script>
        var package = "easy_vitessce";
        var versions = ["0.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/easy_vitessce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/easy_vitessce/README.html
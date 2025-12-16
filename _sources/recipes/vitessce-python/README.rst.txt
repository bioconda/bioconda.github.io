:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vitessce-python'
.. highlight: bash

vitessce-python
===============

.. conda:recipe:: vitessce-python
   :replaces_section_title:
   :noindex:

   Jupyter widget facilitating interactive visualization of spatial single\-cell data with Vitessce

   :homepage: https://vitessce.io/
   :documentation: https://github.com/vitessce/vitessce-python/blob/main/README.md
   
   :developer docs: https://github.com/vitessce/vitessce-python
   :license: MIT
   :recipe: /`vitessce-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vitessce-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vitessce-python/meta.yaml>`_

   


.. conda:package:: vitessce-python

   |downloads_vitessce-python| |docker_vitessce-python|

   :versions:
      
      

      ``3.7.9-0``,  ``3.7.7-0``,  ``3.1.0-0``

      

   
   :depends anndata: ``>=0.7.8``
   :depends black: ``>=21.11b1``
   :depends jsonschema: ``>=3.2``
   :depends negspy: ``>=0.2.24``
   :depends numcodecs: ``>=0.5.7,<0.16.0``
   :depends numpy: ``>=1.21.2,<2.3``
   :depends ome-zarr: ``>=0.2.1``
   :depends pandas: ``>=1.1.2``
   :depends python: ``>=3.7``
   :depends scanpy: ``>=1.9.3``
   :depends scipy: ``>=1.2.1``
   :depends tifffile: ``>=2020.10.1``
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

      mamba install vitessce-python

   and update with::

      mamba update vitessce-python

  To create a new environment, run::

      mamba create --name myenvname vitessce-python

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vitessce-python:<tag>

   (see `vitessce-python/tags`_ for valid values for ``<tag>``)


.. |downloads_vitessce-python| image:: https://img.shields.io/conda/dn/bioconda/vitessce-python.svg?style=flat
   :target: https://anaconda.org/bioconda/vitessce-python
   :alt:   (downloads)
.. |docker_vitessce-python| image:: https://quay.io/repository/biocontainers/vitessce-python/status
   :target: https://quay.io/repository/biocontainers/vitessce-python
.. _`vitessce-python/tags`: https://quay.io/repository/biocontainers/vitessce-python?tab=tags


.. raw:: html

    <script>
        var package = "vitessce-python";
        var versions = ["3.7.9","3.7.7","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vitessce-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vitessce-python/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spreadgltools'
.. highlight: bash

spreadgltools
=============

.. conda:recipe:: spreadgltools
   :replaces_section_title:
   :noindex:

   Visualising pathogen dispersal in a high\-performance browser application

   :homepage: https://github.com/GuyBaele/SpreadGL
   :license: MIT / MIT
   :recipe: /`spreadgltools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spreadgltools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spreadgltools/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.06.04.24308447`

   


.. conda:package:: spreadgltools

   |downloads_spreadgltools| |docker_spreadgltools|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends bottleneck: ``>=1.3.7``
   :depends dendropy: ``>=4.5.2``
   :depends gdal: ``>=3.3.0``
   :depends geojson: ``>=3.0.1``
   :depends geopandas: ``>=0.12.2``
   :depends numpy: ``>=1.23.2``
   :depends pandas: ``>=2.2.0``
   :depends pyproj: ``>=3.4.1``
   :depends python: ``>=3.11``
   :depends rasterio: ``>=1.3.6``
   :depends rioxarray: ``>=0.14.0``
   :depends setuptools: ``>=67.4.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install spreadgltools

   and update with::

      mamba update spreadgltools

  To create a new environment, run::

      mamba create --name myenvname spreadgltools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spreadgltools:<tag>

   (see `spreadgltools/tags`_ for valid values for ``<tag>``)


.. |downloads_spreadgltools| image:: https://img.shields.io/conda/dn/bioconda/spreadgltools.svg?style=flat
   :target: https://anaconda.org/bioconda/spreadgltools
   :alt:   (downloads)
.. |docker_spreadgltools| image:: https://quay.io/repository/biocontainers/spreadgltools/status
   :target: https://quay.io/repository/biocontainers/spreadgltools
.. _`spreadgltools/tags`: https://quay.io/repository/biocontainers/spreadgltools?tab=tags


.. raw:: html

    <script>
        var package = "spreadgltools";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spreadgltools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spreadgltools/README.html
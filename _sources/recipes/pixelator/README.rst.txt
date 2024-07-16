:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pixelator'
.. highlight: bash

pixelator
=========

.. conda:recipe:: pixelator
   :replaces_section_title:
   :noindex:

   A command\-line tool and library to process and analyze sequencing data from Molecular Pixelation \(MPX\) assays.

   :homepage: https://github.com/PixelgenTechnologies/pixelator
   :license: MIT / MIT
   :recipe: /`pixelator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pixelator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pixelator/meta.yaml>`_

   


.. conda:package:: pixelator

   |downloads_pixelator| |docker_pixelator|

   :versions:
      
      

      ``0.18.2-0``,  ``0.18.1-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.2-0``,  ``0.15.2-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.1-0``

      

   
   :depends anndata: ``>=0.8.0``
   :depends click: 
   :depends cssselect: 
   :depends cutadapt: ``>=4.2``
   :depends fastp: 
   :depends fastparquet: ``>=2023.8.0,<2024.0.0``
   :depends fsspec: ``>=2023.12.2,<2024.0.0``
   :depends graspologic: ``>=3.3.0,<4.0.0``
   :depends importlib-resources: ``>=5.12.0,<6.0.0``
   :depends lxml: 
   :depends numba: ``>=0.56.4``
   :depends numpy: ``<1.24.0``
   :depends pandas: ``>=2.0.0,<3.0.0``
   :depends plotly: 
   :depends polars: ``>=1.1.0,<2.0``
   :depends pyarrow: ``>=14,<16``
   :depends pydantic: ``>=2.0,<2.5``
   :depends pyfastx: 
   :depends python: ``>=3.10,<3.12``
   :depends python-annoy: ``<=1.17.0``
   :depends ruamel.yaml: ``>=0.17.21,<0.18.0``
   :depends scanpy: 
   :depends scipy: ``<1.13.0``
   :depends semver: ``>=3.0.0,<4.0.0``
   :depends typing_extensions: 
   :depends umi_tools: ``>=1.1.4,<2.0.0``
   :depends xopen: ``<1.9.0``
   :depends yapf: 
   :depends yappi: 
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

      mamba install pixelator

   and update with::

      mamba update pixelator

  To create a new environment, run::

      mamba create --name myenvname pixelator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pixelator:<tag>

   (see `pixelator/tags`_ for valid values for ``<tag>``)


.. |downloads_pixelator| image:: https://img.shields.io/conda/dn/bioconda/pixelator.svg?style=flat
   :target: https://anaconda.org/bioconda/pixelator
   :alt:   (downloads)
.. |docker_pixelator| image:: https://quay.io/repository/biocontainers/pixelator/status
   :target: https://quay.io/repository/biocontainers/pixelator
.. _`pixelator/tags`: https://quay.io/repository/biocontainers/pixelator?tab=tags


.. raw:: html

    <script>
        var package = "pixelator";
        var versions = ["0.18.2","0.18.1","0.17.1","0.17.0","0.16.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pixelator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pixelator/README.html
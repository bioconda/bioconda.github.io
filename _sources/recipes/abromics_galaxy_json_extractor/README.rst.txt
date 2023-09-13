:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abromics_galaxy_json_extractor'
.. highlight: bash

abromics_galaxy_json_extractor
==============================

.. conda:recipe:: abromics_galaxy_json_extractor
   :replaces_section_title:
   :noindex:

   Tool to convert Galaxy AMR output to abromics project

   :homepage: https://gitlab.com/ifb-elixirfr/abromics
   :documentation: https://gitlab.com/ifb-elixirfr/abromics/abromics-galaxy-json-extractor/-/blob/main/docs/_build/html/index.html
   
   :developer docs: https://gitlab.com/ifb-elixirfr/abromics/abromics-galaxy-json-extractor
   :license: GPL / GPLv3
   :recipe: /`abromics_galaxy_json_extractor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abromics_galaxy_json_extractor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abromics_galaxy_json_extractor/meta.yaml>`_

   


.. conda:package:: abromics_galaxy_json_extractor

   |downloads_abromics_galaxy_json_extractor| |docker_abromics_galaxy_json_extractor|

   :versions:
      
      

      ``0.8-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``,  ``0.2-0``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends _libgcc_mutex: 
   :depends _openmp_mutex: 
   :depends biopython: 
   :depends bzip2: 
   :depends ca-certificates: 
   :depends ld_impl_linux-64: 
   :depends libblas: 
   :depends libcblas: 
   :depends libffi: 
   :depends libgcc-ng: 
   :depends libgfortran-ng: 
   :depends libgfortran5: 
   :depends libgomp: 
   :depends liblapack: 
   :depends libnsl: 
   :depends libopenblas: 
   :depends libsqlite: 
   :depends libstdcxx-ng: 
   :depends libzlib: 
   :depends ncurses: 
   :depends numpy: 
   :depends openssl: 
   :depends pandas: 
   :depends pip: 
   :depends python: 
   :depends python-dateutil: 
   :depends python-tzdata: 
   :depends python_abi: 
   :depends pytz: 
   :depends readline: 
   :depends setuptools: 
   :depends six: 
   :depends tk: 
   :depends tzdata: 
   :depends wheel: 
   :depends xz: 
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

      mamba install abromics_galaxy_json_extractor

   and update with::

      mamba update abromics_galaxy_json_extractor

  To create a new environment, run::

      mamba create --name myenvname abromics_galaxy_json_extractor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/abromics_galaxy_json_extractor:<tag>

   (see `abromics_galaxy_json_extractor/tags`_ for valid values for ``<tag>``)


.. |downloads_abromics_galaxy_json_extractor| image:: https://img.shields.io/conda/dn/bioconda/abromics_galaxy_json_extractor.svg?style=flat
   :target: https://anaconda.org/bioconda/abromics_galaxy_json_extractor
   :alt:   (downloads)
.. |docker_abromics_galaxy_json_extractor| image:: https://quay.io/repository/biocontainers/abromics_galaxy_json_extractor/status
   :target: https://quay.io/repository/biocontainers/abromics_galaxy_json_extractor
.. _`abromics_galaxy_json_extractor/tags`: https://quay.io/repository/biocontainers/abromics_galaxy_json_extractor?tab=tags


.. raw:: html

    <script>
        var package = "abromics_galaxy_json_extractor";
        var versions = ["0.8","0.7","0.6","0.5","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abromics_galaxy_json_extractor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abromics_galaxy_json_extractor/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tooldistillator'
.. highlight: bash

tooldistillator
===============

.. conda:recipe:: tooldistillator
   :replaces_section_title:
   :noindex:

   Tool to extract and aggregate information from different tool outputs to JSON parsable files

   :homepage: https://gitlab.com/ifb-elixirfr/abromics
   :documentation: https://gitlab.com/ifb-elixirfr/abromics/tooldistillator/-/blob/main/docs/_build/html/index.html
   
   :developer docs: https://gitlab.com/ifb-elixirfr/abromics/tooldistillator
   :license: GPL / GPLv3
   :recipe: /`tooldistillator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tooldistillator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tooldistillator/meta.yaml>`_

   


.. conda:package:: tooldistillator

   |downloads_tooldistillator| |docker_tooldistillator|

   :versions:
      
      

      ``0.9.2-0``,  ``0.9.1-0``,  ``0.9-0``,  ``0.8.5.0-0``,  ``0.8.4.1-0``,  ``0.8.4.0-0``

      

   
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

      mamba install tooldistillator

   and update with::

      mamba update tooldistillator

  To create a new environment, run::

      mamba create --name myenvname tooldistillator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tooldistillator:<tag>

   (see `tooldistillator/tags`_ for valid values for ``<tag>``)


.. |downloads_tooldistillator| image:: https://img.shields.io/conda/dn/bioconda/tooldistillator.svg?style=flat
   :target: https://anaconda.org/bioconda/tooldistillator
   :alt:   (downloads)
.. |docker_tooldistillator| image:: https://quay.io/repository/biocontainers/tooldistillator/status
   :target: https://quay.io/repository/biocontainers/tooldistillator
.. _`tooldistillator/tags`: https://quay.io/repository/biocontainers/tooldistillator?tab=tags


.. raw:: html

    <script>
        var package = "tooldistillator";
        var versions = ["0.9.2","0.9.1","0.9","0.8.5.0","0.8.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tooldistillator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tooldistillator/README.html
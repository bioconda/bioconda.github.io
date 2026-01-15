:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyhoward'
.. highlight: bash

pyhoward
========

.. conda:recipe:: pyhoward
   :replaces_section_title:
   :noindex:

   HOWARD \- Highly Open Workflow for Annotation \& Ranking toward genomic variant Discovery

   :homepage: https://github.com/bioinfo-chru-strasbourg/howard
   :license: AGPL-3.0-only
   :recipe: /`pyhoward <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhoward>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhoward/meta.yaml>`_

   


.. conda:package:: pyhoward

   |downloads_pyhoward| |docker_pyhoward|

   :versions:
      
      

      ``0.13.0-0``

      

   
   :depends beautifulsoup4: ``>=4.12.0,<4.13.dev0``
   :depends bio: ``>=1.7.0,<1.8.dev0``
   :depends coloredlogs: ``>=15.0.0,<15.1.dev0``
   :depends coverage: ``>=7.5.0,<7.6.dev0``
   :depends cyvcf2: ``>=0.31.0,<0.32.dev0``
   :depends dask-core: ``>=2023.12.0,<2023.13.dev0``
   :depends fastparquet: ``>=2024.5.0,<2024.6.dev0``
   :depends flake8: ``>=7.1.0,<7.2.dev0``
   :depends genomepy: ``>=0.16.0,<0.17.dev0``
   :depends htslib: ``1.22.*``
   :depends jproperties: ``>=2.1.0,<2.2.dev0``
   :depends lazy: ``>=1.6.0,<1.7.dev0``
   :depends markdown: ``>=3.6.0,<3.7.dev0``
   :depends markdown2: ``>=2.5.0,<2.6.dev0``
   :depends md-toc: ``>=9.0.0,<9.1.dev0``
   :depends mgzip: ``>=0.2.0,<0.3.dev0``
   :depends numpy: ``>=1.26.0,<1.27.dev0``
   :depends pandas: ``>=2.2.0,<2.3.dev0``
   :depends pgzip: ``>=0.3.0,<0.4.dev0``
   :depends polars: ``>=0.20.0,<0.21.dev0``
   :depends psutil: ``>=6.0.0,<6.1.dev0``
   :depends py-bgzip: ``>=0.4.0,<0.5.dev0``
   :depends pyarrow: ``>=16.1.0,<16.2.dev0``
   :depends pybigwig: ``>=0.3.0,<0.4.dev0``
   :depends pyfaidx: ``>=0.8.0,<0.9.dev0``
   :depends pyfiglet: ``>=1.0.0,<1.1.dev0``
   :depends pynose: ``>=1.5.0,<1.6.dev0``
   :depends pypandoc: ``>=1.14.0,<1.15.dev0``
   :depends pysam: ``>=0.22.0,<0.23.dev0``
   :depends pytest: ``>=8.2.0,<8.3.dev0``
   :depends python: ``>=3.10,<3.11``
   :depends python-duckdb: ``>=1.0.0,<1.1.dev0``
   :depends pyvcf3: ``>=1.0.0,<1.1.dev0``
   :depends tabulate: ``>=0.9.0,<0.10.dev0``
   :depends termcolor: ``>=2.5.0,<2.6.dev0``
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

      mamba install pyhoward

   and update with::

      mamba update pyhoward

  To create a new environment, run::

      mamba create --name myenvname pyhoward

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyhoward:<tag>

   (see `pyhoward/tags`_ for valid values for ``<tag>``)


.. |downloads_pyhoward| image:: https://img.shields.io/conda/dn/bioconda/pyhoward.svg?style=flat
   :target: https://anaconda.org/bioconda/pyhoward
   :alt:   (downloads)
.. |docker_pyhoward| image:: https://quay.io/repository/biocontainers/pyhoward/status
   :target: https://quay.io/repository/biocontainers/pyhoward
.. _`pyhoward/tags`: https://quay.io/repository/biocontainers/pyhoward?tab=tags


.. raw:: html

    <script>
        var package = "pyhoward";
        var versions = ["0.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyhoward/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyhoward/README.html
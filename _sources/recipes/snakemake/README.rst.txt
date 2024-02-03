:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake'
.. highlight: bash

snakemake
=========

.. conda:recipe:: snakemake
   :replaces_section_title:
   :noindex:

   A popular workflow management system aiming at full in\-silico reproducibility.

   :homepage: https://snakemake.github.io
   :license: MIT
   :recipe: /`snakemake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bts480`, biotools: :biotools:`Snakemake`

   Snakemake is a workflow management system that aims to reduce the complexity of creating 
   workflows by providing a fast and comfortable execution environment\, together with a clean 
   and modern specification language in python style. Snakemake workflows are essentially Python 
   scripts extended by declarative code to define rules. Rules describe how to create output 
   files from input files.



.. conda:package:: snakemake

   |downloads_snakemake| |docker_snakemake|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.4.3-0</code>,  <code>8.4.2-0</code>,  <code>8.4.1-0</code>,  <code>8.4.0-0</code>,  <code>8.3.2-0</code>,  <code>8.2.3-0</code>,  <code>8.2.1-0</code>,  <code>8.2.0-0</code>,  <code>8.1.3-1</code>,  </span></summary>
      

      ``8.4.3-0``,  ``8.4.2-0``,  ``8.4.1-0``,  ``8.4.0-0``,  ``8.3.2-0``,  ``8.2.3-0``,  ``8.2.1-0``,  ``8.2.0-0``,  ``8.1.3-1``,  ``8.1.3-0``,  ``8.1.2-0``,  ``8.1.1-0``,  ``8.1.0-0``,  ``8.0.1-0``,  ``8.0.0-0``,  ``7.32.4-1``,  ``7.32.4-0``,  ``7.32.3-1``,  ``7.32.3-0``,  ``7.32.2-0``,  ``7.32.1-0``,  ``7.32.0-0``,  ``7.31.1-0``,  ``7.31.0-2``,  ``7.31.0-1``,  ``7.31.0-0``,  ``7.30.2-1``,  ``7.30.2-0``,  ``7.30.1-0``,  ``7.30.0-0``,  ``7.29.0-0``,  ``7.28.3-0``,  ``7.28.2-0``,  ``7.28.1-0``,  ``7.26.0-0``,  ``7.25.4-0``,  ``7.25.3-0``,  ``7.25.2-0``,  ``7.25.1-0``,  ``7.25.0-1``,  ``7.25.0-0``,  ``7.24.2-0``,  ``7.24.0-1``,  ``7.24.0-0``,  ``7.22.0-0``,  ``7.21.0-0``,  ``7.20.0-0``,  ``7.19.1-0``,  ``7.19.0-0``,  ``7.18.2-1``,  ``7.18.2-0``,  ``7.18.1-0``,  ``7.18.0-0``,  ``7.17.1-0``,  ``7.17.0-0``,  ``7.16.0-0``,  ``7.15.2-0``,  ``7.15.1-0``,  ``7.14.2-0``,  ``7.14.1-0``,  ``7.14.0-0``,  ``7.12.1-0``,  ``7.12.0-0``,  ``7.11.0-0``,  ``7.9.0-0``,  ``7.8.5-0``,  ``7.8.3-0``,  ``7.8.2-0``,  ``7.8.1-0``,  ``7.8.0-0``,  ``7.7.0-0``,  ``7.6.2-0``,  ``7.6.1-1``,  ``7.6.1-0``,  ``7.6.0-0``,  ``7.5.0-0``,  ``7.3.8-0``,  ``7.3.7-0``,  ``7.3.6-0``,  ``7.3.5-0``,  ``7.3.4-0``,  ``7.3.3-0``,  ``7.3.2-0``,  ``7.3.1-1``,  ``7.3.1-0``,  ``7.3.0-0``,  ``7.2.1-0``,  ``7.1.1-0``,  ``7.1.0-0``,  ``7.0.4-0``,  ``7.0.3-0``,  ``7.0.2-0``,  ``7.0.1-1``,  ``7.0.1-0``,  ``7.0.0-0``,  ``6.15.5-0``,  ``6.15.3-0``,  ``6.15.2-0``,  ``6.15.1-0``,  ``6.15.0-0``,  ``6.14.0-0``,  ``6.13.1-0``,  ``6.13.0-0``,  ``6.12.3-0``,  ``6.12.2-0``,  ``6.12.1-0``,  ``6.12.0-0``,  ``6.11.1-0``,  ``6.11.0-0``,  ``6.10.0-0``,  ``6.9.1-0``,  ``6.9.0-0``,  ``6.8.2-0``,  ``6.8.1-0``,  ``6.8.0-0``,  ``6.7.0-0``,  ``6.6.1-0``,  ``6.6.0-0``,  ``6.5.3-0``,  ``6.5.2-0``,  ``6.5.1-0``,  ``6.5.0-0``,  ``6.4.1-0``,  ``6.4.0-0``,  ``6.3.0-0``,  ``6.2.1-0``,  ``6.2.0-0``,  ``6.1.2-1``,  ``6.1.2-0``,  ``6.1.1-0``,  ``6.1.0-1``,  ``6.1.0-0``,  ``6.0.5-1``,  ``6.0.5-0``,  ``6.0.3-0``,  ``6.0.2-0``,  ``6.0.1-0``,  ``6.0.0-0``,  ``5.32.2-0``,  ``5.32.1-0``,  ``5.32.0-0``,  ``5.31.1-1``,  ``5.31.1-0``,  ``5.31.0-0``,  ``5.30.2-0``,  ``5.30.1-0``,  ``5.29.0-0``,  ``5.28.0-0``,  ``5.27.4-0``,  ``5.26.1-1``,  ``5.26.1-0``,  ``5.26.0-0``,  ``5.25.0-1``,  ``5.25.0-0``,  ``5.24.2-0``,  ``5.24.1-0``,  ``5.24.0-1``,  ``5.24.0-0``,  ``5.23.0-2``,  ``5.23.0-1``,  ``5.23.0-0``,  ``5.22.1-0``,  ``5.22.0-0``,  ``5.21.0-0``,  ``5.20.1-1``,  ``5.20.1-0``,  ``5.20.0-0``,  ``5.19.3-0``,  ``5.19.2-0``,  ``5.19.1-0``,  ``5.19.0-0``,  ``5.18.1-0``,  ``5.18.0-0``,  ``5.17.0-0``,  ``5.16.0-0``,  ``5.15.0-0``,  ``5.14.0-1``,  ``5.14.0-0``,  ``5.13.0-0``,  ``5.12.3-0``,  ``5.12.2-0``,  ``5.12.1-0``,  ``5.11.2-0``,  ``5.11.1-0``,  ``5.11.0-0``,  ``5.10.0-0``,  ``5.9.1-0``,  ``5.8.2-0``,  ``5.8.1-0``,  ``5.7.4-0``,  ``5.7.1-0``,  ``5.7.0-0``,  ``5.6.0-0``,  ``5.5.4-2``,  ``5.5.4-1``,  ``5.5.4-0``,  ``5.5.3-0``,  ``5.5.2-0``,  ``5.5.1-0``,  ``5.5.0-0``,  ``5.4.5-0``,  ``5.4.4-0``,  ``5.4.3-0``,  ``5.4.2-0``,  ``5.4.1-0``,  ``5.4.0-0``,  ``5.3.1-0``,  ``5.3.0-2``,  ``5.3.0-1``,  ``5.2.4-1``,  ``5.2.2-1``,  ``5.2.1-0``,  ``5.2.0-0``,  ``5.1.5-0``,  ``5.1.4-2``,  ``5.1.4-0``,  ``5.1.3-0``,  ``5.1.2-0``,  ``5.1.1-0``,  ``5.0.0-0``,  ``4.8.1-0``,  ``4.8.0-0``,  ``4.7.0-0``,  ``4.6.0-0``,  ``4.5.1-0``,  ``4.5.0-0``,  ``4.4.0-0``,  ``4.3.1-0``,  ``4.3.0-0``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.13.3-0``,  ``3.13.2-0``,  ``3.13.0-1``,  ``3.12.0-1``,  ``3.11.2-1``,  ``3.11.2-0``,  ``3.11.1-1``,  ``3.11.1-0``,  ``3.11.0-1``,  ``3.10.2-1``,  ``3.10.1-1``,  ``3.10.1-0``,  ``3.10.0-0``,  ``3.9.1-0``,  ``3.9.0-0``,  ``3.8.2-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.1-0``,  ``3.7.0-0``,  ``3.6.1-0``,  ``3.6.0-0``,  ``3.5.5-1``,  ``3.5.4-1``,  ``3.5.3-1``,  ``3.5.2-1``,  ``3.5.1-1``,  ``3.4.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends eido: 
   :depends pandas: 
   :depends peppy: 
   :depends pygments: 
   :depends slack_sdk: 
   :depends snakemake-minimal: ``8.4.3.*``
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

      mamba install snakemake

   and update with::

      mamba update snakemake

  To create a new environment, run::

      mamba create --name myenvname snakemake

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake:<tag>

   (see `snakemake/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake| image:: https://img.shields.io/conda/dn/bioconda/snakemake.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake
   :alt:   (downloads)
.. |docker_snakemake| image:: https://quay.io/repository/biocontainers/snakemake/status
   :target: https://quay.io/repository/biocontainers/snakemake
.. _`snakemake/tags`: https://quay.io/repository/biocontainers/snakemake?tab=tags


.. raw:: html

    <script>
        var package = "snakemake";
        var versions = ["8.4.3","8.4.2","8.4.1","8.4.0","8.3.2"];
    </script>


.. conda:package:: snakemake-minimal

   |downloads_snakemake-minimal| |docker_snakemake-minimal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.4.3-0</code>,  <code>8.4.2-0</code>,  <code>8.4.1-0</code>,  <code>8.4.0-0</code>,  <code>8.3.2-0</code>,  <code>8.2.3-0</code>,  <code>8.2.1-0</code>,  <code>8.2.0-0</code>,  <code>8.1.3-1</code>,  </span></summary>
      

      ``8.4.3-0``,  ``8.4.2-0``,  ``8.4.1-0``,  ``8.4.0-0``,  ``8.3.2-0``,  ``8.2.3-0``,  ``8.2.1-0``,  ``8.2.0-0``,  ``8.1.3-1``,  ``8.1.3-0``,  ``8.1.2-0``,  ``8.1.1-0``,  ``8.1.0-0``,  ``8.0.1-0``,  ``8.0.0-0``,  ``7.32.4-1``,  ``7.32.4-0``,  ``7.32.3-1``,  ``7.32.3-0``,  ``7.32.2-0``,  ``7.32.1-0``,  ``7.32.0-0``,  ``7.31.1-0``,  ``7.31.0-2``,  ``7.31.0-1``,  ``7.31.0-0``,  ``7.30.2-1``,  ``7.30.2-0``,  ``7.30.1-0``,  ``7.30.0-0``,  ``7.29.0-0``,  ``7.28.3-0``,  ``7.28.2-0``,  ``7.28.1-0``,  ``7.26.0-0``,  ``7.25.4-0``,  ``7.25.3-0``,  ``7.25.2-0``,  ``7.25.1-0``,  ``7.25.0-1``,  ``7.25.0-0``,  ``7.24.2-0``,  ``7.24.0-1``,  ``7.24.0-0``,  ``7.22.0-0``,  ``7.21.0-0``,  ``7.20.0-0``,  ``7.19.1-0``,  ``7.19.0-0``,  ``7.18.2-1``,  ``7.18.2-0``,  ``7.18.1-0``,  ``7.18.0-0``,  ``7.17.1-0``,  ``7.17.0-0``,  ``7.16.0-0``,  ``7.15.2-0``,  ``7.15.1-0``,  ``7.14.2-0``,  ``7.14.1-0``,  ``7.14.0-0``,  ``7.12.1-0``,  ``7.12.0-0``,  ``7.11.0-0``,  ``7.9.0-0``,  ``7.8.5-0``,  ``7.8.3-0``,  ``7.8.2-0``,  ``7.8.1-0``,  ``7.8.0-0``,  ``7.7.0-0``,  ``7.6.2-0``,  ``7.6.1-1``,  ``7.6.1-0``,  ``7.6.0-0``,  ``7.5.0-0``,  ``7.3.8-0``,  ``7.3.7-0``,  ``7.3.6-0``,  ``7.3.5-0``,  ``7.3.4-0``,  ``7.3.3-0``,  ``7.3.2-0``,  ``7.3.1-1``,  ``7.3.1-0``,  ``7.3.0-0``,  ``7.2.1-0``,  ``7.1.1-0``,  ``7.1.0-0``,  ``7.0.4-0``,  ``7.0.3-0``,  ``7.0.2-0``,  ``7.0.1-1``,  ``7.0.1-0``,  ``7.0.0-0``,  ``6.15.5-0``,  ``6.15.3-0``,  ``6.15.2-0``,  ``6.15.1-0``,  ``6.15.0-0``,  ``6.14.0-0``,  ``6.13.1-0``,  ``6.13.0-0``,  ``6.12.3-0``,  ``6.12.2-0``,  ``6.12.1-0``,  ``6.12.0-0``,  ``6.11.1-0``,  ``6.11.0-0``,  ``6.10.0-0``,  ``6.9.1-0``,  ``6.9.0-0``,  ``6.8.2-0``,  ``6.8.1-0``,  ``6.8.0-0``,  ``6.7.0-0``,  ``6.6.1-0``,  ``6.6.0-0``,  ``6.5.3-0``,  ``6.5.2-0``,  ``6.5.1-0``,  ``6.5.0-0``,  ``6.4.1-0``,  ``6.4.0-0``,  ``6.3.0-0``,  ``6.2.1-0``,  ``6.2.0-0``,  ``6.1.2-1``,  ``6.1.2-0``,  ``6.1.1-0``,  ``6.1.0-1``,  ``6.1.0-0``,  ``6.0.5-1``,  ``6.0.5-0``,  ``6.0.3-0``,  ``6.0.2-0``,  ``6.0.1-0``,  ``6.0.0-0``,  ``5.32.2-0``,  ``5.32.1-0``,  ``5.32.0-0``,  ``5.31.1-1``,  ``5.31.1-0``,  ``5.31.0-0``,  ``5.30.2-0``,  ``5.30.1-0``,  ``5.29.0-0``,  ``5.28.0-0``,  ``5.27.4-0``,  ``5.26.1-1``,  ``5.26.1-0``,  ``5.26.0-0``,  ``5.25.0-1``,  ``5.25.0-0``,  ``5.24.2-0``,  ``5.24.1-0``,  ``5.24.0-1``,  ``5.24.0-0``,  ``5.23.0-2``,  ``5.22.1-0``,  ``5.22.0-0``,  ``5.21.0-0``,  ``5.20.1-1``,  ``5.20.1-0``,  ``5.20.0-0``,  ``5.19.3-0``,  ``5.19.2-0``,  ``5.19.1-0``,  ``5.19.0-0``,  ``5.18.1-0``,  ``5.18.0-0``,  ``5.17.0-0``,  ``5.16.0-0``,  ``5.15.0-0``,  ``5.14.0-1``,  ``5.14.0-0``,  ``5.13.0-0``,  ``5.12.3-0``,  ``5.12.2-0``,  ``5.12.1-0``,  ``5.11.2-0``,  ``5.11.1-0``,  ``5.11.0-0``,  ``5.10.0-0``,  ``5.9.1-0``,  ``5.8.2-0``,  ``5.8.1-0``,  ``5.7.4-0``,  ``5.7.1-0``,  ``5.7.0-0``,  ``5.6.0-0``,  ``5.5.4-2``,  ``5.5.4-1``,  ``5.5.4-0``,  ``5.5.3-0``,  ``5.5.2-0``,  ``5.5.1-0``,  ``5.5.0-0``,  ``5.4.5-0``,  ``5.4.4-1``,  ``5.4.3-1``,  ``5.4.3-0``,  ``5.4.2-1``,  ``5.4.2-0``,  ``5.4.1-0``,  ``5.4.0-0``,  ``5.3.1-0``,  ``5.3.0-2``,  ``5.3.0-1``,  ``5.3.0-0``,  ``5.2.4-0``,  ``5.2.2-1``,  ``5.2.2-0``,  ``5.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: 
   :depends conda-inject: ``>=1.3.1,<2.0``
   :depends configargparse: 
   :depends connection_pool: ``>=0.0.3``
   :depends datrie: 
   :depends docutils: 
   :depends dpath: ``>=2.1.6,<3.0.0``
   :depends gitpython: 
   :depends humanfriendly: 
   :depends immutables: 
   :depends jinja2: ``>=3.0,<4.0``
   :depends jsonschema: 
   :depends nbformat: 
   :depends packaging: 
   :depends psutil: 
   :depends pulp: ``>=2.3.1,<2.9``
   :depends python: ``>=3.11,<3.13``
   :depends pyyaml: 
   :depends requests: ``>=2.8.1``
   :depends reretry: 
   :depends smart_open: ``>=3.0``
   :depends snakemake-interface-common: ``>=1.15.0,<2.0``
   :depends snakemake-interface-executor-plugins: ``>=8.1.3,<9.0``
   :depends snakemake-interface-storage-plugins: ``>=3.0.0,<4.0``
   :depends stopit: 
   :depends tabulate: 
   :depends throttler: 
   :depends toposort: ``>=1.10``
   :depends wrapt: 
   :depends yte: ``>=1.5.1,<2.0``
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

      mamba install snakemake-minimal

   and update with::

      mamba update snakemake-minimal

  To create a new environment, run::

      mamba create --name myenvname snakemake-minimal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-minimal:<tag>

   (see `snakemake-minimal/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-minimal| image:: https://img.shields.io/conda/dn/bioconda/snakemake-minimal.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-minimal
   :alt:   (downloads)
.. |docker_snakemake-minimal| image:: https://quay.io/repository/biocontainers/snakemake/status
   :target: https://quay.io/repository/biocontainers/snakemake
.. _`snakemake-minimal/tags`: https://quay.io/repository/biocontainers/snakemake-minimal?tab=tags


.. raw:: html

    <script>
        var package = "snakemake";
        var versions = ["8.4.3","8.4.2","8.4.1","8.4.0","8.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tb-profiler'
.. highlight: bash

tb-profiler
===========

.. conda:recipe:: tb-profiler
   :replaces_section_title:
   :noindex:

   Profiling tool for Mycobacterium tuberculosis to detect drug resistance and lineage from WGS data

   :homepage: https://github.com/jodyphelan/TBProfiler
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tb-profiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb-profiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tb-profiler/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13073-019-0650-x`

   


.. conda:package:: tb-profiler

   |downloads_tb-profiler| |docker_tb-profiler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.0.0-0</code>,  <code>5.0.1-1</code>,  <code>5.0.1-0</code>,  <code>5.0.0-0</code>,  <code>4.4.2-0</code>,  <code>4.4.1-0</code>,  <code>4.4.0-0</code>,  <code>4.3.0-0</code>,  <code>4.2.0-0</code>,  </span></summary>
      

      ``6.0.0-0``,  ``5.0.1-1``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.4.2-0``,  ``4.4.1-0``,  ``4.4.0-0``,  ``4.3.0-0``,  ``4.2.0-0``,  ``4.1.1-1``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.3-0``,  ``4.0.2-1``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.0.8-0``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.8.14-0``,  ``2.8.13-0``,  ``2.8.12-2``,  ``2.8.12-1``,  ``2.8.12-0``,  ``2.8.11-0``,  ``2.8.10-0``,  ``2.8.9-0``,  ``2.8.8-0``,  ``2.8.6-0``,  ``2.8.5-0``,  ``2.8.4-0``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.4-0``,  ``2.7.3-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7-0``,  ``2.6.1-2``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6-0``,  ``2.5-1``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``,  ``2.2-1``,  ``2.2-0``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends docxtpl: 
   :depends filelock: 
   :depends git: 
   :depends iqtree: 
   :depends jinja2: 
   :depends joblib: 
   :depends pathogen-profiler: ``>=4.0.0``
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends rich-argparse: 
   :depends tqdm: 
   :depends usher: 
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

      mamba install tb-profiler

   and update with::

      mamba update tb-profiler

  To create a new environment, run::

      mamba create --name myenvname tb-profiler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tb-profiler:<tag>

   (see `tb-profiler/tags`_ for valid values for ``<tag>``)


.. |downloads_tb-profiler| image:: https://img.shields.io/conda/dn/bioconda/tb-profiler.svg?style=flat
   :target: https://anaconda.org/bioconda/tb-profiler
   :alt:   (downloads)
.. |docker_tb-profiler| image:: https://quay.io/repository/biocontainers/tb-profiler/status
   :target: https://quay.io/repository/biocontainers/tb-profiler
.. _`tb-profiler/tags`: https://quay.io/repository/biocontainers/tb-profiler?tab=tags


.. raw:: html

    <script>
        var package = "tb-profiler";
        var versions = ["6.0.0","5.0.1","5.0.1","5.0.0","4.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tb-profiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tb-profiler/README.html
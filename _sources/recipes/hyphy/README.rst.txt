:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hyphy'
.. highlight: bash

hyphy
=====

.. conda:recipe:: hyphy
   :replaces_section_title:
   :noindex:

   An open\-source software package for comparative sequence analysis using stochastic evolutionary models.

   :homepage: https://hyphy.org
   :developer docs: https://github.com/veg/hyphy
   :license: MIT / MIT
   :recipe: /`hyphy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hyphy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hyphy/meta.yaml>`_
   :links: doi: :doi:`10.1093/molbev/msz197`

   HyPhy \(Hypothesis Testing using Phylogenies\) is an open\-source software package for the analysis of genetic sequences
   \(in particular the inference of natural selection\) using techniques in phylogenetics\, molecular evolution\, and machine learning.



.. conda:package:: hyphy

   |downloads_hyphy| |docker_hyphy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.79-0</code>,  <code>2.5.78-0</code>,  <code>2.5.77-0</code>,  <code>2.5.76-0</code>,  <code>2.5.75-0</code>,  <code>2.5.74-0</code>,  <code>2.5.73-0</code>,  <code>2.5.71-0</code>,  <code>2.5.70-0</code>,  </span></summary>
      

      ``2.5.79-0``,  ``2.5.78-0``,  ``2.5.77-0``,  ``2.5.76-0``,  ``2.5.75-0``,  ``2.5.74-0``,  ``2.5.73-0``,  ``2.5.71-0``,  ``2.5.70-0``,  ``2.5.69-0``,  ``2.5.65-1``,  ``2.5.65-0``,  ``2.5.64-1``,  ``2.5.64-0``,  ``2.5.63-0``,  ``2.5.62-1``,  ``2.5.62-0``,  ``2.5.61-0``,  ``2.5.60-1``,  ``2.5.60-0``,  ``2.5.59-0``,  ``2.5.58-0``,  ``2.5.57-0``,  ``2.5.50-2``,  ``2.5.50-1``,  ``2.5.50-0``,  ``2.5.49-0``,  ``2.5.48-0``,  ``2.5.47-0``,  ``2.5.46-0``,  ``2.5.42-0``,  ``2.5.41-1``,  ``2.5.41-0``,  ``2.5.40-1``,  ``2.5.40-0``,  ``2.5.39-0``,  ``2.5.38-0``,  ``2.5.36-1``,  ``2.5.36-0``,  ``2.5.33-0``,  ``2.5.32-0``,  ``2.5.31-0``,  ``2.5.30-1``,  ``2.5.30-0``,  ``2.5.29-1``,  ``2.5.29-0``,  ``2.5.28-0``,  ``2.5.26-0``,  ``2.5.25-0``,  ``2.5.24-0``,  ``2.5.23-0``,  ``2.5.22.1-0``,  ``2.5.22-0``,  ``2.5.21-0``,  ``2.5.20-0``,  ``2.5.19-0``,  ``2.5.17-0``,  ``2.5.16-0``,  ``2.5.15-0``,  ``2.5.14-0``,  ``2.5.12-1``,  ``2.5.12-0``,  ``2.5.11-0``,  ``2.5.10-0``,  ``2.5.9-0``,  ``2.5.8-1``,  ``2.5.8-0``,  ``2.5.7-0``,  ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.4-1``,  ``2.5.4-0``,  ``2.5.3-0``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.3.14-1``,  ``2.3.14-0``,  ``2.3.12-1``,  ``2.3.12-0``,  ``2.3.11-2``,  ``2.3.11-1``,  ``2.3.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcurl: ``>=8.14.1,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openmpi: ``>=4.1.6,<5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install hyphy

   and update with::

      mamba update hyphy

  To create a new environment, run::

      mamba create --name myenvname hyphy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hyphy:<tag>

   (see `hyphy/tags`_ for valid values for ``<tag>``)


.. |downloads_hyphy| image:: https://img.shields.io/conda/dn/bioconda/hyphy.svg?style=flat
   :target: https://anaconda.org/bioconda/hyphy
   :alt:   (downloads)
.. |docker_hyphy| image:: https://quay.io/repository/biocontainers/hyphy/status
   :target: https://quay.io/repository/biocontainers/hyphy
.. _`hyphy/tags`: https://quay.io/repository/biocontainers/hyphy?tab=tags


.. raw:: html

    <script>
        var package = "hyphy";
        var versions = ["2.5.79","2.5.78","2.5.77","2.5.76","2.5.75"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hyphy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hyphy/README.html
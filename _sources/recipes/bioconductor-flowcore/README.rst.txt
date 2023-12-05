:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowcore'
.. highlight: bash

bioconductor-flowcore
=====================

.. conda:recipe:: bioconductor-flowcore
   :replaces_section_title:
   :noindex:

   flowCore\: Basic structures for flow cytometry data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/flowCore.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcore/meta.yaml>`_
   :links: biotools: :biotools:`flowcore`, doi: :doi:`10.1186/1471-2105-10-106`

   Provides S4 data structures and basic functions to deal with flow cytometry data.


.. conda:package:: bioconductor-flowcore

   |downloads_bioconductor-flowcore| |docker_bioconductor-flowcore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.6.0-2</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-2</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.48.1-0``,  ``1.48.0-0``,  ``1.46.2-0``,  ``1.44.0-0``,  ``1.42.3-0``,  ``1.42.0-0``,  ``1.38.2-1``,  ``1.38.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-cytolib: ``>=2.14.0,<2.15.0``
   :depends bioconductor-cytolib: ``>=2.14.0,<2.15.0a0``
   :depends bioconductor-rprotobuflib: ``>=2.14.0,<2.15.0``
   :depends bioconductor-rprotobuflib: ``>=2.14.0,<2.15.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: ``>=1.81.0.0``
   :depends r-cpp11: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
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

      mamba install bioconductor-flowcore

   and update with::

      mamba update bioconductor-flowcore

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowcore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowcore:<tag>

   (see `bioconductor-flowcore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowcore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowcore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowcore
   :alt:   (downloads)
.. |docker_bioconductor-flowcore| image:: https://quay.io/repository/biocontainers/bioconductor-flowcore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowcore
.. _`bioconductor-flowcore/tags`: https://quay.io/repository/biocontainers/bioconductor-flowcore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowcore";
        var versions = ["2.14.0","2.12.0","2.10.0","2.10.0","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowcore/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gaga'
.. highlight: bash

bioconductor-gaga
=================

.. conda:recipe:: bioconductor-gaga
   :replaces_section_title:
   :noindex:

   GaGa hierarchical model for high\-throughput data analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/gaga.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gaga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gaga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gaga/meta.yaml>`_
   :links: biotools: :biotools:`gaga`, doi: :doi:`10.1214/09-aoas244`

   Implements the GaGa model for high\-throughput data analysis\, including differential expression analysis\, supervised gene clustering and classification. Additionally\, it performs sequential sample size calculations using the GaGa and LNNGV models \(the latter from EBarrays package\).


.. conda:package:: bioconductor-gaga

   |downloads_bioconductor-gaga| |docker_bioconductor-gaga|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.48.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-1</code>,  <code>2.44.0-0</code>,  <code>2.40.0-2</code>,  <code>2.40.0-1</code>,  <code>2.40.0-0</code>,  <code>2.38.0-0</code>,  <code>2.36.0-1</code>,  </span></summary>
      

      ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-1``,  ``2.44.0-0``,  ``2.40.0-2``,  ``2.40.0-1``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-1``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-1``,  ``2.28.1-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-ebarrays: ``>=2.66.0,<2.67.0``
   :depends bioconductor-ebarrays: ``>=2.66.0,<2.67.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-coda: 
   :depends r-mgcv: 
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

      mamba install bioconductor-gaga

   and update with::

      mamba update bioconductor-gaga

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gaga

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gaga:<tag>

   (see `bioconductor-gaga/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gaga| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gaga.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gaga
   :alt:   (downloads)
.. |docker_bioconductor-gaga| image:: https://quay.io/repository/biocontainers/bioconductor-gaga/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gaga
.. _`bioconductor-gaga/tags`: https://quay.io/repository/biocontainers/bioconductor-gaga?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gaga";
        var versions = ["2.48.0","2.46.0","2.44.0","2.44.0","2.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gaga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gaga/README.html
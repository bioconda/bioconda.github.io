:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macorrplot'
.. highlight: bash

bioconductor-macorrplot
=======================

.. conda:recipe:: bioconductor-macorrplot
   :replaces_section_title:
   :noindex:

   Visualize artificial correlation in microarray data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/maCorrPlot.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-macorrplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macorrplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macorrplot/meta.yaml>`_
   :links: biotools: :biotools:`macorrplot`, doi: :doi:`10.1038/nmeth.3252`

   Graphically displays correlation in microarray data that is due to insufficient normalization


.. conda:package:: bioconductor-macorrplot

   |downloads_bioconductor-macorrplot| |docker_bioconductor-macorrplot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.76.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  </span></summary>
      

      ``1.76.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-lattice: 
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

      mamba install bioconductor-macorrplot

   and update with::

      mamba update bioconductor-macorrplot

  To create a new environment, run::

      mamba create --name myenvname bioconductor-macorrplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-macorrplot:<tag>

   (see `bioconductor-macorrplot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-macorrplot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macorrplot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macorrplot
   :alt:   (downloads)
.. |docker_bioconductor-macorrplot| image:: https://quay.io/repository/biocontainers/bioconductor-macorrplot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macorrplot
.. _`bioconductor-macorrplot/tags`: https://quay.io/repository/biocontainers/bioconductor-macorrplot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-macorrplot";
        var versions = ["1.76.0","1.72.0","1.70.0","1.68.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macorrplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macorrplot/README.html
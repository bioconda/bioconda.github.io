:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cghregions'
.. highlight: bash

bioconductor-cghregions
=======================

.. conda:recipe:: bioconductor-cghregions
   :replaces_section_title:
   :noindex:

   Dimension Reduction for Array CGH Data with Minimal Information Loss.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CGHregions.html
   :license: GPL (http://www.gnu.org/copyleft/gpl.html)
   :recipe: /`bioconductor-cghregions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghregions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghregions/meta.yaml>`_
   :links: biotools: :biotools:`cghregions`, doi: :doi:`10.1002/9783527678679.dg00687`

   Dimension Reduction for Array CGH Data with Minimal Information Loss


.. conda:package:: bioconductor-cghregions

   |downloads_bioconductor-cghregions| |docker_bioconductor-cghregions|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.56.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-cghbase: ``>=1.60.0,<1.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-cghregions

   and update with::

      mamba update bioconductor-cghregions

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cghregions

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cghregions:<tag>

   (see `bioconductor-cghregions/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cghregions| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cghregions.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cghregions
   :alt:   (downloads)
.. |docker_bioconductor-cghregions| image:: https://quay.io/repository/biocontainers/bioconductor-cghregions/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cghregions
.. _`bioconductor-cghregions/tags`: https://quay.io/repository/biocontainers/bioconductor-cghregions?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cghregions";
        var versions = ["1.58.0","1.56.0","1.52.0","1.50.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cghregions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cghregions/README.html
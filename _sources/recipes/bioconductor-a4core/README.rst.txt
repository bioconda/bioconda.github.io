:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-a4core'
.. highlight: bash

bioconductor-a4core
===================

.. conda:recipe:: bioconductor-a4core
   :replaces_section_title:
   :noindex:

   Automated Affymetrix Array Analysis Core Package

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/a4Core.html
   :license: GPL-3
   :recipe: /`bioconductor-a4core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4core/meta.yaml>`_
   :links: biotools: :biotools:`a4core`, doi: :doi:`10.1038/nmeth.3252`

   Utility functions for the Automated Affymetrix Array Analysis set of packages.


.. conda:package:: bioconductor-a4core

   |downloads_bioconductor-a4core| |docker_bioconductor-a4core|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-glmnet: 
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

      mamba install bioconductor-a4core

   and update with::

      mamba update bioconductor-a4core

  To create a new environment, run::

      mamba create --name myenvname bioconductor-a4core

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-a4core:<tag>

   (see `bioconductor-a4core/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-a4core| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-a4core.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-a4core
   :alt:   (downloads)
.. |docker_bioconductor-a4core| image:: https://quay.io/repository/biocontainers/bioconductor-a4core/status
   :target: https://quay.io/repository/biocontainers/bioconductor-a4core
.. _`bioconductor-a4core/tags`: https://quay.io/repository/biocontainers/bioconductor-a4core?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-a4core";
        var versions = ["1.50.0","1.48.0","1.46.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-a4core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-a4core/README.html
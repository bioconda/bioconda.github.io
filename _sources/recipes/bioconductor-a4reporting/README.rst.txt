:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-a4reporting'
.. highlight: bash

bioconductor-a4reporting
========================

.. conda:recipe:: bioconductor-a4reporting
   :replaces_section_title:
   :noindex:

   Automated Affymetrix Array Analysis Reporting Package

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/a4Reporting.html
   :license: GPL-3
   :recipe: /`bioconductor-a4reporting <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4reporting>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4reporting/meta.yaml>`_
   :links: biotools: :biotools:`a4reporting`, doi: :doi:`10.1038/nmeth.3252`

   Utility functions to facilitate the reporting of the Automated Affymetrix Array Analysis Reporting set of packages.


.. conda:package:: bioconductor-a4reporting

   |downloads_bioconductor-a4reporting| |docker_bioconductor-a4reporting|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-xtable: 
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

      mamba install bioconductor-a4reporting

   and update with::

      mamba update bioconductor-a4reporting

  To create a new environment, run::

      mamba create --name myenvname bioconductor-a4reporting

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-a4reporting:<tag>

   (see `bioconductor-a4reporting/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-a4reporting| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-a4reporting.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-a4reporting
   :alt:   (downloads)
.. |docker_bioconductor-a4reporting| image:: https://quay.io/repository/biocontainers/bioconductor-a4reporting/status
   :target: https://quay.io/repository/biocontainers/bioconductor-a4reporting
.. _`bioconductor-a4reporting/tags`: https://quay.io/repository/biocontainers/bioconductor-a4reporting?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-a4reporting";
        var versions = ["1.54.0","1.50.0","1.50.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-a4reporting/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-a4reporting/README.html
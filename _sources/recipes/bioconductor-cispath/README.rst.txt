:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cispath'
.. highlight: bash

bioconductor-cispath
====================

.. conda:recipe:: bioconductor-cispath
   :replaces_section_title:
   :noindex:

   Visualization and management of the protein\-protein interaction networks.

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cisPath.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-cispath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cispath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cispath/meta.yaml>`_
   :links: biotools: :biotools:`cispath`, doi: :doi:`10.1186/1752-0509-9-s1-s1`

   cisPath is an R package that uses web browsers to visualize and manage protein\-protein interaction networks.


.. conda:package:: bioconductor-cispath

   |downloads_bioconductor-cispath| |docker_bioconductor-cispath|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-2</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-2``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-cispath

   and update with::

      mamba update bioconductor-cispath

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cispath

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cispath:<tag>

   (see `bioconductor-cispath/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cispath| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cispath.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cispath
   :alt:   (downloads)
.. |docker_bioconductor-cispath| image:: https://quay.io/repository/biocontainers/bioconductor-cispath/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cispath
.. _`bioconductor-cispath/tags`: https://quay.io/repository/biocontainers/bioconductor-cispath?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cispath";
        var versions = ["1.46.0","1.42.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cispath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cispath/README.html
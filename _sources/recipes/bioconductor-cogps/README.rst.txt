:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cogps'
.. highlight: bash

bioconductor-cogps
==================

.. conda:recipe:: bioconductor-cogps
   :replaces_section_title:
   :noindex:

   cancer outlier Gene Profile Sets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/coGPS.html
   :license: GPL-2
   :recipe: /`bioconductor-cogps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogps/meta.yaml>`_
   :links: biotools: :biotools:`cogps`, doi: :doi:`10.1038/nmeth.3252`

   Gene Set Enrichment Analysis of P\-value based statistics for outlier gene detection in dataset merged from multiple studies


.. conda:package:: bioconductor-cogps

   |downloads_bioconductor-cogps| |docker_bioconductor-cogps|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-cogps

   and update with::

      mamba update bioconductor-cogps

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cogps

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cogps:<tag>

   (see `bioconductor-cogps/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cogps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cogps.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cogps
   :alt:   (downloads)
.. |docker_bioconductor-cogps| image:: https://quay.io/repository/biocontainers/bioconductor-cogps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cogps
.. _`bioconductor-cogps/tags`: https://quay.io/repository/biocontainers/bioconductor-cogps?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cogps";
        var versions = ["1.50.0","1.46.0","1.44.0","1.42.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cogps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cogps/README.html
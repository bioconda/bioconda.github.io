:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.atdschip.tiling'
.. highlight: bash

bioconductor-pd.atdschip.tiling
===============================

.. conda:recipe:: bioconductor-pd.atdschip.tiling
   :replaces_section_title:
   :noindex:

   Platform Design Info for Affymetrix Atdschip\_tiling

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/pd.atdschip.tiling.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.atdschip.tiling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.atdschip.tiling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.atdschip.tiling/meta.yaml>`_

   Platform Design Info for Affymetrix Atdschip\_tiling


.. conda:package:: bioconductor-pd.atdschip.tiling

   |downloads_bioconductor-pd.atdschip.tiling| |docker_bioconductor-pd.atdschip.tiling|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.44.0-0</code>,  <code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.36.0-0</code>,  <code>0.32.0-1</code>,  <code>0.32.0-0</code>,  <code>0.30.0-0</code>,  <code>0.28.0-1</code>,  <code>0.28.0-0</code>,  </span></summary>
      

      ``0.44.0-0``,  ``0.40.0-0``,  ``0.38.0-0``,  ``0.36.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.20.0-1``,  ``0.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-oligo: ``>=1.70.0,<1.71.0``
   :depends bioconductor-oligoclasses: ``>=1.68.0,<1.69.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
   :depends r-rsqlite: ``>=0.10.0``
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

      mamba install bioconductor-pd.atdschip.tiling

   and update with::

      mamba update bioconductor-pd.atdschip.tiling

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pd.atdschip.tiling

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.atdschip.tiling:<tag>

   (see `bioconductor-pd.atdschip.tiling/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.atdschip.tiling| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.atdschip.tiling.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.atdschip.tiling
   :alt:   (downloads)
.. |docker_bioconductor-pd.atdschip.tiling| image:: https://quay.io/repository/biocontainers/bioconductor-pd.atdschip.tiling/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.atdschip.tiling
.. _`bioconductor-pd.atdschip.tiling/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.atdschip.tiling?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.atdschip.tiling";
        var versions = ["0.44.0","0.40.0","0.38.0","0.36.0","0.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.atdschip.tiling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.atdschip.tiling/README.html
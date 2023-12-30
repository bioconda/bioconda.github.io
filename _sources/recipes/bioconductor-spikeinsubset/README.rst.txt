:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spikeinsubset'
.. highlight: bash

bioconductor-spikeinsubset
==========================

.. conda:recipe:: bioconductor-spikeinsubset
   :replaces_section_title:
   :noindex:

   Part of Affymetrix\'s Spike\-In Experiment Data

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/SpikeInSubset.html
   :license: LGPL
   :recipe: /`bioconductor-spikeinsubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spikeinsubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spikeinsubset/meta.yaml>`_

   Includes probe\-level and expression data for the HGU133 and HGU95 spike\-in experiments


.. conda:package:: bioconductor-spikeinsubset

   |downloads_bioconductor-spikeinsubset| |docker_bioconductor-spikeinsubset|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
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

      mamba install bioconductor-spikeinsubset

   and update with::

      mamba update bioconductor-spikeinsubset

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spikeinsubset

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spikeinsubset:<tag>

   (see `bioconductor-spikeinsubset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spikeinsubset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spikeinsubset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spikeinsubset
   :alt:   (downloads)
.. |docker_bioconductor-spikeinsubset| image:: https://quay.io/repository/biocontainers/bioconductor-spikeinsubset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spikeinsubset
.. _`bioconductor-spikeinsubset/tags`: https://quay.io/repository/biocontainers/bioconductor-spikeinsubset?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spikeinsubset";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spikeinsubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spikeinsubset/README.html
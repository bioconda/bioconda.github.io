:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowmeans'
.. highlight: bash

bioconductor-flowmeans
======================

.. conda:recipe:: bioconductor-flowmeans
   :replaces_section_title:
   :noindex:

   Non\-parametric Flow Cytometry Data Gating

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowMeans.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowmeans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmeans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmeans/meta.yaml>`_

   Identifies cell populations in Flow Cytometry data using non\-parametric clustering and segmented\-regression\-based change point detection. Note\: R 2.11.0 or newer is required.


.. conda:package:: bioconductor-flowmeans

   |downloads_bioconductor-flowmeans| |docker_bioconductor-flowmeans|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.66.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  </span></summary>
      

      ``1.66.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-feature: 
   :depends r-rrcov: 
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

      mamba install bioconductor-flowmeans

   and update with::

      mamba update bioconductor-flowmeans

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowmeans

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowmeans:<tag>

   (see `bioconductor-flowmeans/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowmeans| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowmeans.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowmeans
   :alt:   (downloads)
.. |docker_bioconductor-flowmeans| image:: https://quay.io/repository/biocontainers/bioconductor-flowmeans/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowmeans
.. _`bioconductor-flowmeans/tags`: https://quay.io/repository/biocontainers/bioconductor-flowmeans?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowmeans";
        var versions = ["1.66.0","1.62.0","1.60.0","1.58.0","1.54.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowmeans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowmeans/README.html
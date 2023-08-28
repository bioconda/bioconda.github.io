:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-starank'
.. highlight: bash

bioconductor-starank
====================

.. conda:recipe:: bioconductor-starank
   :replaces_section_title:
   :noindex:

   Stability Ranking

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/staRank.html
   :license: GPL
   :recipe: /`bioconductor-starank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-starank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-starank/meta.yaml>`_

   Detecting all relevant variables from a data set is challenging\, especially when only few samples are available and data is noisy. Stability ranking provides improved variable rankings of increased robustness using resampling or subsampling.


.. conda:package:: bioconductor-starank

   |downloads_bioconductor-starank| |docker_bioconductor-starank|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.24.1-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.1-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-cellhts2: ``>=2.64.0,<2.65.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-starank

   and update with::

      mamba update bioconductor-starank

  To create a new environment, run::

      mamba create --name myenvname bioconductor-starank

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-starank:<tag>

   (see `bioconductor-starank/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-starank| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-starank.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-starank
   :alt:   (downloads)
.. |docker_bioconductor-starank| image:: https://quay.io/repository/biocontainers/bioconductor-starank/status
   :target: https://quay.io/repository/biocontainers/bioconductor-starank
.. _`bioconductor-starank/tags`: https://quay.io/repository/biocontainers/bioconductor-starank?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-starank";
        var versions = ["1.42.0","1.40.0","1.36.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-starank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-starank/README.html
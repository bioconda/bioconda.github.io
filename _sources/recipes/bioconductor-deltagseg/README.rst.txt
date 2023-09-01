:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deltagseg'
.. highlight: bash

bioconductor-deltagseg
======================

.. conda:recipe:: bioconductor-deltagseg
   :replaces_section_title:
   :noindex:

   deltaGseg

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/deltaGseg.html
   :license: GPL-2
   :recipe: /`bioconductor-deltagseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deltagseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deltagseg/meta.yaml>`_

   Identifying distinct subpopulations through multiscale time series analysis


.. conda:package:: bioconductor-deltagseg

   |downloads_bioconductor-deltagseg| |docker_bioconductor-deltagseg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.37.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.37.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-changepoint: 
   :depends r-fbasics: 
   :depends r-ggplot2: 
   :depends r-pvclust: 
   :depends r-reshape: 
   :depends r-scales: 
   :depends r-tseries: 
   :depends r-wavethresh: 
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

      mamba install bioconductor-deltagseg

   and update with::

      mamba update bioconductor-deltagseg

  To create a new environment, run::

      mamba create --name myenvname bioconductor-deltagseg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deltagseg:<tag>

   (see `bioconductor-deltagseg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deltagseg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deltagseg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deltagseg
   :alt:   (downloads)
.. |docker_bioconductor-deltagseg| image:: https://quay.io/repository/biocontainers/bioconductor-deltagseg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deltagseg
.. _`bioconductor-deltagseg/tags`: https://quay.io/repository/biocontainers/bioconductor-deltagseg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deltagseg";
        var versions = ["1.40.0","1.37.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deltagseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deltagseg/README.html
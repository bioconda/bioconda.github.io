:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-timerquant'
.. highlight: bash

bioconductor-timerquant
=======================

.. conda:recipe:: bioconductor-timerquant
   :replaces_section_title:
   :noindex:

   Timer Quantification

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/TimerQuant.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-timerquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timerquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timerquant/meta.yaml>`_

   Supplementary Data package for tandem timer methods paper by Barry et al. \(2015\) including TimerQuant shiny applications.


.. conda:package:: bioconductor-timerquant

   |downloads_bioconductor-timerquant| |docker_bioconductor-timerquant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.27.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.27.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-desolve: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-locfit: 
   :depends r-shiny: 
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

      mamba install bioconductor-timerquant

   and update with::

      mamba update bioconductor-timerquant

  To create a new environment, run::

      mamba create --name myenvname bioconductor-timerquant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-timerquant:<tag>

   (see `bioconductor-timerquant/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-timerquant| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-timerquant.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-timerquant
   :alt:   (downloads)
.. |docker_bioconductor-timerquant| image:: https://quay.io/repository/biocontainers/bioconductor-timerquant/status
   :target: https://quay.io/repository/biocontainers/bioconductor-timerquant
.. _`bioconductor-timerquant/tags`: https://quay.io/repository/biocontainers/bioconductor-timerquant?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-timerquant";
        var versions = ["1.36.0","1.32.0","1.30.0","1.27.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-timerquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-timerquant/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rain'
.. highlight: bash

bioconductor-rain
=================

.. conda:recipe:: bioconductor-rain
   :replaces_section_title:
   :noindex:

   Rhythmicity Analysis Incorporating Non\-parametric Methods

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/rain.html
   :license: GPL-2
   :recipe: /`bioconductor-rain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rain/meta.yaml>`_
   :links: biotools: :biotools:`rain`

   This package uses non\-parametric methods to detect rhythms in time series. It deals with outliers\, missing values and is optimized for time series comprising 10\-100 measurements. As it does not assume expect any distinct waveform it is optimal or detecting oscillating behavior \(e.g. circadian or cell cycle\) in e.g. genome\- or proteome\-wide biological measurements such as\: micro arrays\, proteome mass spectrometry\, or metabolome measurements.


.. conda:package:: bioconductor-rain

   |downloads_bioconductor-rain| |docker_bioconductor-rain|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-multtest: ``>=2.56.0,<2.57.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gmp: 
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

      mamba install bioconductor-rain

   and update with::

      mamba update bioconductor-rain

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rain

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rain:<tag>

   (see `bioconductor-rain/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rain| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rain.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rain
   :alt:   (downloads)
.. |docker_bioconductor-rain| image:: https://quay.io/repository/biocontainers/bioconductor-rain/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rain
.. _`bioconductor-rain/tags`: https://quay.io/repository/biocontainers/bioconductor-rain?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rain";
        var versions = ["1.34.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rain/README.html
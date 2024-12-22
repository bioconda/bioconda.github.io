:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-peakpanther'
.. highlight: bash

bioconductor-peakpanther
========================

.. conda:recipe:: bioconductor-peakpanther
   :replaces_section_title:
   :noindex:

   Peak Picking and Annotation of High Resolution Experiments

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/peakPantheR.html
   :license: GPL-3
   :recipe: /`bioconductor-peakpanther <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peakpanther>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peakpanther/meta.yaml>`_

   An automated pipeline for the detection\, integration and reporting of predefined features across a large number of mass spectrometry data files. It enables the real time annotation of multiple compounds in a single file\, or the parallel annotation of multiple compounds in multiple files. A graphical user interface as well as command line functions will assist in assessing the quality of annotation and update fitting parameters until a satisfactory result is obtained.


.. conda:package:: bioconductor-peakpanther

   |downloads_bioconductor-peakpanther| |docker_bioconductor-peakpanther|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-msnbase: ``>=2.32.0,<2.33.0``
   :depends bioconductor-mzr: ``>=2.40.0,<2.41.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bslib: 
   :depends r-doparallel: ``>=1.0.11``
   :depends r-dt: ``>=0.15``
   :depends r-foreach: ``>=1.4.4``
   :depends r-ggplot2: ``>=3.5.0``
   :depends r-gridextra: ``>=2.3``
   :depends r-lubridate: 
   :depends r-minpack.lm: ``>=1.2.1``
   :depends r-pracma: ``>=2.2.3``
   :depends r-scales: ``>=0.5.0``
   :depends r-shiny: ``>=1.0.5``
   :depends r-shinycssloaders: ``>=1.0.0``
   :depends r-stringr: ``>=1.2.0``
   :depends r-svglite: ``>=2.1.1``
   :depends r-xml: ``>=3.98.1.10``
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

      mamba install bioconductor-peakpanther

   and update with::

      mamba update bioconductor-peakpanther

  To create a new environment, run::

      mamba create --name myenvname bioconductor-peakpanther

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-peakpanther:<tag>

   (see `bioconductor-peakpanther/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-peakpanther| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-peakpanther.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-peakpanther
   :alt:   (downloads)
.. |docker_bioconductor-peakpanther| image:: https://quay.io/repository/biocontainers/bioconductor-peakpanther/status
   :target: https://quay.io/repository/biocontainers/bioconductor-peakpanther
.. _`bioconductor-peakpanther/tags`: https://quay.io/repository/biocontainers/bioconductor-peakpanther?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-peakpanther";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-peakpanther/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-peakpanther/README.html
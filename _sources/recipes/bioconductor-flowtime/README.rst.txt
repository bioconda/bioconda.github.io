:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowtime'
.. highlight: bash

bioconductor-flowtime
=====================

.. conda:recipe:: bioconductor-flowtime
   :replaces_section_title:
   :noindex:

   Annotation and analysis of biological dynamical systems using flow cytometry

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowTime.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowtime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowtime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowtime/meta.yaml>`_

   This package facilitates analysis of both timecourse and steady state flow cytometry experiments. This package was originially developed for quantifying the function of gene regulatory networks in yeast \(strain W303\) expressing fluorescent reporter proteins using BD Accuri C6 and SORP cytometers. However\, the functions are for the most part general and may be adapted for analysis of other organisms using other flow cytometers. Functions in this package facilitate the annotation of flow cytometry data with experimental metadata\, as often required for publication and general ease\-of\-reuse. Functions for creating\, saving and loading gate sets are also included. In the past\, we have typically generated summary statistics for each flowset for each timepoint and then annotated and analyzed these summary statistics. This method loses a great deal of the power that comes from the large amounts of individual cell data generated in flow cytometry\, by essentially collapsing this data into a bulk measurement after subsetting. In addition to these summary functions\, this package also contains functions to facilitate annotation and analysis of steady\-state or time\-lapse data utilizing all of the data collected from the thousands of individual cells in each sample.


.. conda:package:: bioconductor-flowtime

   |downloads_bioconductor-flowtime| |docker_bioconductor-flowtime|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.17.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: ``>=1.0.0``
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-rlang: 
   :depends r-tibble: 
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

      mamba install bioconductor-flowtime

   and update with::

      mamba update bioconductor-flowtime

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowtime

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowtime:<tag>

   (see `bioconductor-flowtime/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowtime| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowtime.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowtime
   :alt:   (downloads)
.. |docker_bioconductor-flowtime| image:: https://quay.io/repository/biocontainers/bioconductor-flowtime/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowtime
.. _`bioconductor-flowtime/tags`: https://quay.io/repository/biocontainers/bioconductor-flowtime?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowtime";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowtime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowtime/README.html
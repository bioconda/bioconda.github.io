:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-targetsearch'
.. highlight: bash

bioconductor-targetsearch
=========================

.. conda:recipe:: bioconductor-targetsearch
   :replaces_section_title:
   :noindex:

   A package for the analysis of GC\-MS metabolite profiling data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TargetSearch.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-targetsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetsearch/meta.yaml>`_

   This packages provides a flexible\, fast and accurate method for targeted pre\-processing of GC\-MS data. The user provides a \(often very large\) set of GC chromatograms and a metabolite library of targets. The package will automatically search those targets in the chromatograms resulting in a data matrix that can be used for further data analysis.


.. conda:package:: bioconductor-targetsearch

   |downloads_bioconductor-targetsearch| |docker_bioconductor-targetsearch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.1-1</code>,  <code>2.4.1-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.50.1-1</code>,  <code>1.50.1-0</code>,  <code>1.50.0-0</code>,  </span></summary>
      

      ``2.4.1-1``,  ``2.4.1-0``,  ``2.2.0-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.50.1-1``,  ``1.50.1-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.3-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.2-0``,  ``1.40.0-0``,  ``1.38.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ncdf4: 
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

      mamba install bioconductor-targetsearch

   and update with::

      mamba update bioconductor-targetsearch

  To create a new environment, run::

      mamba create --name myenvname bioconductor-targetsearch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-targetsearch:<tag>

   (see `bioconductor-targetsearch/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-targetsearch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-targetsearch
   :alt:   (downloads)
.. |docker_bioconductor-targetsearch| image:: https://quay.io/repository/biocontainers/bioconductor-targetsearch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetsearch
.. _`bioconductor-targetsearch/tags`: https://quay.io/repository/biocontainers/bioconductor-targetsearch?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-targetsearch";
        var versions = ["2.4.1","2.4.1","2.2.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-targetsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-targetsearch/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dapar'
.. highlight: bash

bioconductor-dapar
==================

.. conda:recipe:: bioconductor-dapar
   :replaces_section_title:
   :noindex:

   Tools for the Differential Analysis of Proteins Abundance with R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DAPAR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dapar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dapar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dapar/meta.yaml>`_

   The package DAPAR is a Bioconductor distributed R package which provides all the necessary functions to analyze quantitative data from label\-free proteomics experiments. Contrarily to most other similar R packages\, it is endowed with rich and user\-friendly graphical interfaces\, so that no programming skill is required \(see \`Prostar\` package\).


.. conda:package:: bioconductor-dapar

   |downloads_bioconductor-dapar| |docker_bioconductor-dapar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.2-0</code>,  <code>1.32.2-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.3-0</code>,  <code>1.22.6-0</code>,  <code>1.22.0-0</code>,  <code>1.20.2-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.2-0``,  ``1.32.2-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.3-0``,  ``1.22.6-0``,  ``1.22.0-0``,  ``1.20.2-0``,  ``1.18.1-0``,  ``1.16.7-0``,  ``1.14.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-dapardata: ``>=1.36.0,<1.37.0``
   :depends bioconductor-msnbase: ``>=2.32.0,<2.33.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-foreach: 
   :depends r-highcharter: 
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

      mamba install bioconductor-dapar

   and update with::

      mamba update bioconductor-dapar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dapar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dapar:<tag>

   (see `bioconductor-dapar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dapar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dapar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dapar
   :alt:   (downloads)
.. |docker_bioconductor-dapar| image:: https://quay.io/repository/biocontainers/bioconductor-dapar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dapar
.. _`bioconductor-dapar/tags`: https://quay.io/repository/biocontainers/bioconductor-dapar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dapar";
        var versions = ["1.38.0","1.34.2","1.32.2","1.30.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dapar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dapar/README.html
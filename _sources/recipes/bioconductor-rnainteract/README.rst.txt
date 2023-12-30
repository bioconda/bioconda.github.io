:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnainteract'
.. highlight: bash

bioconductor-rnainteract
========================

.. conda:recipe:: bioconductor-rnainteract
   :replaces_section_title:
   :noindex:

   Estimate Pairwise Interactions from multidimensional features

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RNAinteract.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnainteract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnainteract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnainteract/meta.yaml>`_

   RNAinteract estimates genetic interactions from multi\-dimensional read\-outs like features extracted from images. The screen is assumed to be performed in multi\-well plates or similar designs. Starting from a list of features \(e.g. cell number\, area\, fluorescence intensity\) per well\, genetic interactions are estimated. The packages provides functions for reporting interacting gene pairs\, plotting heatmaps and double RNAi plots. An HTML report can be written for quality control and analysis.


.. conda:package:: bioconductor-rnainteract

   |downloads_bioconductor-rnainteract| |docker_bioconductor-rnainteract|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-cellhts2: ``>=2.66.0,<2.67.0``
   :depends bioconductor-geneplotter: ``>=1.80.0,<1.81.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-splots: ``>=1.68.0,<1.69.0``
   :depends r-abind: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gplots: 
   :depends r-hwriter: 
   :depends r-ics: 
   :depends r-icsnp: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-locfit: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-rnainteract

   and update with::

      mamba update bioconductor-rnainteract

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnainteract

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnainteract:<tag>

   (see `bioconductor-rnainteract/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnainteract| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnainteract.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnainteract
   :alt:   (downloads)
.. |docker_bioconductor-rnainteract| image:: https://quay.io/repository/biocontainers/bioconductor-rnainteract/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnainteract
.. _`bioconductor-rnainteract/tags`: https://quay.io/repository/biocontainers/bioconductor-rnainteract?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnainteract";
        var versions = ["1.50.0","1.48.0","1.46.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnainteract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnainteract/README.html
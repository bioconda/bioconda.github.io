:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-esetvis'
.. highlight: bash

bioconductor-esetvis
====================

.. conda:recipe:: bioconductor-esetvis
   :replaces_section_title:
   :noindex:

   Visualizations of expressionSet Bioconductor object

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/esetVis.html
   :license: GPL-3
   :recipe: /`bioconductor-esetvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-esetvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-esetvis/meta.yaml>`_
   :links: biotools: :biotools:`esetvis`, doi: :doi:`10.1038/nmeth.3252`

   Utility functions for visualization of expressionSet \(or SummarizedExperiment\) Bioconductor object\, including spectral map\, tsne and linear discriminant analysis. Static plot via the ggplot2 package or interactive via the ggvis or rbokeh packages are available.


.. conda:package:: bioconductor-esetvis

   |downloads_bioconductor-esetvis| |docker_bioconductor-esetvis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.1-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.1-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.3-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-mlp: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-hexbin: 
   :depends r-mass: 
   :depends r-mpm: 
   :depends r-rtsne: 
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

      mamba install bioconductor-esetvis

   and update with::

      mamba update bioconductor-esetvis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-esetvis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-esetvis:<tag>

   (see `bioconductor-esetvis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-esetvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-esetvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-esetvis
   :alt:   (downloads)
.. |docker_bioconductor-esetvis| image:: https://quay.io/repository/biocontainers/bioconductor-esetvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-esetvis
.. _`bioconductor-esetvis/tags`: https://quay.io/repository/biocontainers/bioconductor-esetvis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-esetvis";
        var versions = ["1.26.1","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-esetvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-esetvis/README.html
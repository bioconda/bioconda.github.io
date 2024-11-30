:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ebimage'
.. highlight: bash

bioconductor-ebimage
====================

.. conda:recipe:: bioconductor-ebimage
   :replaces_section_title:
   :noindex:

   Image processing and analysis toolbox for R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/EBImage.html
   :license: LGPL-3.0-only
   :recipe: /`bioconductor-ebimage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebimage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebimage/meta.yaml>`_
   :links: biotools: :biotools:`ebimage`

   EBImage provides general purpose functionality for image processing and analysis. In the context of \(high\-throughput\) microscopy\-based cellular assays\, EBImage offers tools to segment cells and extract quantitative cellular descriptors. This allows the automation of such tasks using the R programming language and facilitates the use of other tools in the R environment for signal processing\, statistical modeling\, machine learning and visualization with image data.


.. conda:package:: bioconductor-ebimage

   |downloads_bioconductor-ebimage| |docker_bioconductor-ebimage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.44.0-1</code>,  <code>4.44.0-0</code>,  <code>4.42.0-0</code>,  <code>4.40.0-1</code>,  <code>4.40.0-0</code>,  <code>4.36.0-2</code>,  <code>4.36.0-1</code>,  <code>4.36.0-0</code>,  <code>4.34.0-0</code>,  </span></summary>
      

      ``4.44.0-1``,  ``4.44.0-0``,  ``4.42.0-0``,  ``4.40.0-1``,  ``4.40.0-0``,  ``4.36.0-2``,  ``4.36.0-1``,  ``4.36.0-0``,  ``4.34.0-0``,  ``4.32.0-1``,  ``4.32.0-0``,  ``4.30.0-0``,  ``4.28.0-0``,  ``4.26.0-1``,  ``4.24.0-0``,  ``4.22.1-0``,  ``4.20.0-0``,  ``4.18.3-0``,  ``4.13.0-0``,  ``4.12.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-abind: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fftwtools: ``>=0.9-7``
   :depends r-htmltools: 
   :depends r-htmlwidgets: 
   :depends r-jpeg: 
   :depends r-locfit: 
   :depends r-png: 
   :depends r-rcurl: 
   :depends r-tiff: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-ebimage

   and update with::

      mamba update bioconductor-ebimage

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ebimage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ebimage:<tag>

   (see `bioconductor-ebimage/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ebimage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ebimage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ebimage
   :alt:   (downloads)
.. |docker_bioconductor-ebimage| image:: https://quay.io/repository/biocontainers/bioconductor-ebimage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ebimage
.. _`bioconductor-ebimage/tags`: https://quay.io/repository/biocontainers/bioconductor-ebimage?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ebimage";
        var versions = ["4.44.0","4.44.0","4.42.0","4.40.0","4.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ebimage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ebimage/README.html
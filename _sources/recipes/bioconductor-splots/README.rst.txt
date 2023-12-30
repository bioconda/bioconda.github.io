:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splots'
.. highlight: bash

bioconductor-splots
===================

.. conda:recipe:: bioconductor-splots
   :replaces_section_title:
   :noindex:

   Visualization of high\-throughput assays in microtitre plate or slide format

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/splots.html
   :license: LGPL
   :recipe: /`bioconductor-splots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splots/meta.yaml>`_
   :links: biotools: :biotools:`splots`, doi: :doi:`10.1038/nmeth.3252`

   This package is here to support legacy usages of it\, but it should not be used for new code development. It provides a single function\, plotScreen\, for visualising data in microtitre plate or slide format. As a better alternative for such functionality\, please consider the platetools package on CRAN \(https\:\/\/cran.r\-project.org\/package\=platetools and https\:\/\/github.com\/Swarchal\/platetools\)\, or ggplot2 \(geom\_raster\, facet\_wrap\) as exemplified in the vignette of this package.


.. conda:package:: bioconductor-splots

   |downloads_bioconductor-splots| |docker_bioconductor-splots|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-splots

   and update with::

      mamba update bioconductor-splots

  To create a new environment, run::

      mamba create --name myenvname bioconductor-splots

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-splots:<tag>

   (see `bioconductor-splots/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splots| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splots.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splots
   :alt:   (downloads)
.. |docker_bioconductor-splots| image:: https://quay.io/repository/biocontainers/bioconductor-splots/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splots
.. _`bioconductor-splots/tags`: https://quay.io/repository/biocontainers/bioconductor-splots?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-splots";
        var versions = ["1.68.0","1.66.0","1.64.0","1.60.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splots/README.html
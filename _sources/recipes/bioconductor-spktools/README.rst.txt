:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spktools'
.. highlight: bash

bioconductor-spktools
=====================

.. conda:recipe:: bioconductor-spktools
   :replaces_section_title:
   :noindex:

   Methods for Spike\-in Arrays

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/spkTools.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-spktools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spktools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spktools/meta.yaml>`_
   :links: biotools: :biotools:`spktools`, doi: :doi:`10.1093/nar/gkn430`

   The package contains functions that can be used to compare expression measures on different array platforms.


.. conda:package:: bioconductor-spktools

   |downloads_bioconductor-spktools| |docker_bioconductor-spktools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.62.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  </span></summary>
      

      ``1.62.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gtools: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-spktools

   and update with::

      mamba update bioconductor-spktools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spktools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spktools:<tag>

   (see `bioconductor-spktools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spktools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spktools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spktools
   :alt:   (downloads)
.. |docker_bioconductor-spktools| image:: https://quay.io/repository/biocontainers/bioconductor-spktools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spktools
.. _`bioconductor-spktools/tags`: https://quay.io/repository/biocontainers/bioconductor-spktools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spktools";
        var versions = ["1.62.0","1.58.0","1.56.0","1.54.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spktools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spktools/README.html
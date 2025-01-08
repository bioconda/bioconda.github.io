:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-les'
.. highlight: bash

bioconductor-les
================

.. conda:recipe:: bioconductor-les
   :replaces_section_title:
   :noindex:

   Identifying Differential Effects in Tiling Microarray Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/les.html
   :license: GPL-3
   :recipe: /`bioconductor-les <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-les>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-les/meta.yaml>`_
   :links: biotools: :biotools:`les`, doi: :doi:`10.1089/cmb.2008.0226`

   The \'les\' package estimates Loci of Enhanced Significance \(LES\) in tiling microarray data. These are regions of regulation such as found in differential transcription\, CHiP\-chip\, or DNA modification analysis. The package provides a universal framework suitable for identifying differential effects in tiling microarray data sets\, and is independent of the underlying statistics at the level of single probes.


.. conda:package:: bioconductor-les

   |downloads_bioconductor-les| |docker_bioconductor-les|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-boot: 
   :depends r-fdrtool: 
   :depends r-gplots: 
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

      mamba install bioconductor-les

   and update with::

      mamba update bioconductor-les

  To create a new environment, run::

      mamba create --name myenvname bioconductor-les

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-les:<tag>

   (see `bioconductor-les/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-les| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-les.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-les
   :alt:   (downloads)
.. |docker_bioconductor-les| image:: https://quay.io/repository/biocontainers/bioconductor-les/status
   :target: https://quay.io/repository/biocontainers/bioconductor-les
.. _`bioconductor-les/tags`: https://quay.io/repository/biocontainers/bioconductor-les?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-les";
        var versions = ["1.56.0","1.52.0","1.52.0","1.50.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-les/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-les/README.html
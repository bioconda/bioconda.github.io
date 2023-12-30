:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cardinal'
.. highlight: bash

bioconductor-cardinal
=====================

.. conda:recipe:: bioconductor-cardinal
   :replaces_section_title:
   :noindex:

   A mass spectrometry imaging toolbox for statistical analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Cardinal.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cardinal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardinal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardinal/meta.yaml>`_
   :links: biotools: :biotools:`cardinal`, usegalaxy-eu: :usegalaxy-eu:`cardinal_segmentations`

   Implements statistical \& computational tools for analyzing mass spectrometry imaging datasets\, including methods for efficient pre\-processing\, spatial segmentation\, and classification.


.. conda:package:: bioconductor-cardinal

   |downloads_bioconductor-cardinal| |docker_bioconductor-cardinal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.3-0</code>,  <code>3.2.1-0</code>,  <code>3.0.1-1</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.12.0-2</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  </span></summary>
      

      ``3.4.3-0``,  ``3.2.1-0``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.12.0-2``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-2``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.6-0``,  ``2.0.4-0``,  ``2.0.2-0``,  ``1.12.1-1``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-cardinalio: ``>=1.0.0,<1.1.0``
   :depends bioconductor-cardinalio: ``>=1.0.0,<1.1.0a0``
   :depends bioconductor-ebimage: ``>=4.44.0,<4.45.0``
   :depends bioconductor-ebimage: ``>=4.44.0,<4.45.0a0``
   :depends bioconductor-matter: ``>=2.4.0,<2.5.0``
   :depends bioconductor-matter: ``>=2.4.0,<2.5.0a0``
   :depends bioconductor-protgenerics: ``>=1.34.0,<1.35.0``
   :depends bioconductor-protgenerics: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-irlba: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-mclust: 
   :depends r-nlme: 
   :depends r-signal: 
   :depends r-viridislite: 
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

      mamba install bioconductor-cardinal

   and update with::

      mamba update bioconductor-cardinal

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cardinal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cardinal:<tag>

   (see `bioconductor-cardinal/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cardinal| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cardinal.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cardinal
   :alt:   (downloads)
.. |docker_bioconductor-cardinal| image:: https://quay.io/repository/biocontainers/bioconductor-cardinal/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cardinal
.. _`bioconductor-cardinal/tags`: https://quay.io/repository/biocontainers/bioconductor-cardinal?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cardinal";
        var versions = ["3.4.3","3.2.1","3.0.1","3.0.1","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cardinal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cardinal/README.html
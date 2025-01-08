:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ipo'
.. highlight: bash

bioconductor-ipo
================

.. conda:recipe:: bioconductor-ipo
   :replaces_section_title:
   :noindex:

   Automated Optimization of XCMS Data Processing parameters

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/IPO.html
   :license: GPL (>= 2) + file LICENSE
   :recipe: /`bioconductor-ipo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ipo/meta.yaml>`_
   :links: biotools: :biotools:`ipo`

   The outcome of XCMS data processing strongly depends on the parameter settings. IPO \(\`Isotopologue Parameter Optimization\`\) is a parameter optimization tool that is applicable for different kinds of samples and liquid chromatography coupled to high resolution mass spectrometry devices\, fast and free of labeling steps. IPO uses natural\, stable 13C isotopes to calculate a peak picking score. Retention time correction is optimized by minimizing the relative retention time differences within features and grouping parameters are optimized by maximizing the number of features showing exactly one peak from each injection of a pooled sample. The different parameter settings are achieved by design of experiment. The resulting scores are evaluated using response surface models.


.. conda:package:: bioconductor-ipo

   |downloads_bioconductor-ipo| |docker_bioconductor-ipo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-camera: ``>=1.62.0,<1.63.0``
   :depends bioconductor-xcms: ``>=4.4.0,<4.5.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rsm: 
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

      mamba install bioconductor-ipo

   and update with::

      mamba update bioconductor-ipo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ipo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ipo:<tag>

   (see `bioconductor-ipo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ipo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ipo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ipo
   :alt:   (downloads)
.. |docker_bioconductor-ipo| image:: https://quay.io/repository/biocontainers/bioconductor-ipo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ipo
.. _`bioconductor-ipo/tags`: https://quay.io/repository/biocontainers/bioconductor-ipo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ipo";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ipo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ipo/README.html
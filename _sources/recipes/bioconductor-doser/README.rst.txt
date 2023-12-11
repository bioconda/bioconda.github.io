:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-doser'
.. highlight: bash

bioconductor-doser
==================

.. conda:recipe:: bioconductor-doser
   :replaces_section_title:
   :noindex:

   doseR

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/doseR.html
   :license: GPL
   :recipe: /`bioconductor-doser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doser/meta.yaml>`_

   doseR package is a next generation sequencing package for sex chromosome dosage compensation which can be applied broadly to detect shifts in gene expression among an arbitrary number of pre\-defined groups of loci. doseR is a differential gene expression package for count data\, that detects directional shifts in expression for multiple\, specific subsets of genes\, broad utility in systems biology research. doseR has been prepared to manage the nature of the data and the desired set of inferences. doseR uses S4 classes to store count data from sequencing experiment. It contains functions to normalize and filter count data\, as well as to plot and calculate statistics of count data. It contains a framework for linear modeling of count data. The package has been tested using real and simulated data.


.. conda:package:: bioconductor-doser

   |downloads_bioconductor-doser| |docker_bioconductor-doser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-digest: 
   :depends r-lme4: 
   :depends r-matrixstats: 
   :depends r-mclust: 
   :depends r-runit: 
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

      mamba install bioconductor-doser

   and update with::

      mamba update bioconductor-doser

  To create a new environment, run::

      mamba create --name myenvname bioconductor-doser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-doser:<tag>

   (see `bioconductor-doser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-doser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-doser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-doser
   :alt:   (downloads)
.. |docker_bioconductor-doser| image:: https://quay.io/repository/biocontainers/bioconductor-doser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-doser
.. _`bioconductor-doser/tags`: https://quay.io/repository/biocontainers/bioconductor-doser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-doser";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-doser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-doser/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-classifyr'
.. highlight: bash

bioconductor-classifyr
======================

.. conda:recipe:: bioconductor-classifyr
   :replaces_section_title:
   :noindex:

   A framework for cross\-validated classification problems\, with applications to differential variability and differential distribution testing

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ClassifyR.html
   :license: GPL-3
   :recipe: /`bioconductor-classifyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-classifyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-classifyr/meta.yaml>`_
   :links: biotools: :biotools:`classifyr`

   The software formalises a framework for classification and survival model evaluation in R. There are four stages\; Data transformation\, feature selection\, model training\, and prediction. The requirements of variable types and variable order are fixed\, but specialised variables for functions can also be provided. The framework is wrapped in a driver loop that reproducibly carries out a number of cross\-validation schemes. Functions for differential mean\, differential variability\, and differential distribution are included. Additional functions may be developed by the user\, by creating an interface to the framework.


.. conda:package:: bioconductor-classifyr

   |downloads_bioconductor-classifyr| |docker_bioconductor-classifyr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.7-1</code>,  <code>3.4.7-0</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  </span></summary>
      

      ``3.4.7-1``,  ``3.4.7-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.4-0``,  ``2.2.6-0``,  ``2.2.4-0``,  ``2.0.10-0``,  ``1.12.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-generics: 
   :depends r-ggplot2: ``>=3.0.0``
   :depends r-ggpubr: 
   :depends r-ranger: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-survival: 
   :depends r-tidyr: 
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

      mamba install bioconductor-classifyr

   and update with::

      mamba update bioconductor-classifyr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-classifyr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-classifyr:<tag>

   (see `bioconductor-classifyr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-classifyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-classifyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-classifyr
   :alt:   (downloads)
.. |docker_bioconductor-classifyr| image:: https://quay.io/repository/biocontainers/bioconductor-classifyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-classifyr
.. _`bioconductor-classifyr/tags`: https://quay.io/repository/biocontainers/bioconductor-classifyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-classifyr";
        var versions = ["3.4.7","3.4.7","3.2.0","3.2.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-classifyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-classifyr/README.html
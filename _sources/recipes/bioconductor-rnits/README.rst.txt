:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnits'
.. highlight: bash

bioconductor-rnits
==================

.. conda:recipe:: bioconductor-rnits
   :replaces_section_title:
   :noindex:

   R Normalization and Inference of Time Series data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Rnits.html
   :license: GPL-3
   :recipe: /`bioconductor-rnits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnits/meta.yaml>`_

   R\/Bioconductor package for normalization\, curve registration and inference in time course gene expression data.


.. conda:package:: bioconductor-rnits

   |downloads_bioconductor-rnits| |docker_bioconductor-rnits|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-impute: ``>=1.76.0,<1.77.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-qvalue: ``>=2.34.0,<2.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-boot: 
   :depends r-ggplot2: 
   :depends r-reshape2: 
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

      mamba install bioconductor-rnits

   and update with::

      mamba update bioconductor-rnits

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnits

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnits:<tag>

   (see `bioconductor-rnits/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnits| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnits.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnits
   :alt:   (downloads)
.. |docker_bioconductor-rnits| image:: https://quay.io/repository/biocontainers/bioconductor-rnits/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnits
.. _`bioconductor-rnits/tags`: https://quay.io/repository/biocontainers/bioconductor-rnits?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnits";
        var versions = ["1.36.0","1.34.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnits/README.html
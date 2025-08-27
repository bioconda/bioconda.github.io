:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genie3'
.. highlight: bash

bioconductor-genie3
===================

.. conda:recipe:: bioconductor-genie3
   :replaces_section_title:
   :noindex:

   GEne Network Inference with Ensemble of trees

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GENIE3.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-genie3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genie3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genie3/meta.yaml>`_

   This package implements the GENIE3 algorithm for inferring gene regulatory networks from expression data.


.. conda:package:: bioconductor-genie3

   |downloads_bioconductor-genie3| |docker_bioconductor-genie3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.3-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-reshape2: 
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

      mamba install bioconductor-genie3

   and update with::

      mamba update bioconductor-genie3

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genie3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genie3:<tag>

   (see `bioconductor-genie3/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genie3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genie3.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genie3
   :alt:   (downloads)
.. |docker_bioconductor-genie3| image:: https://quay.io/repository/biocontainers/bioconductor-genie3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genie3
.. _`bioconductor-genie3/tags`: https://quay.io/repository/biocontainers/bioconductor-genie3?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genie3";
        var versions = ["1.28.0","1.24.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genie3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genie3/README.html
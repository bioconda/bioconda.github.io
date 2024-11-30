:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anf'
.. highlight: bash

bioconductor-anf
================

.. conda:recipe:: bioconductor-anf
   :replaces_section_title:
   :noindex:

   Affinity Network Fusion for Complex Patient Clustering

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ANF.html
   :license: GPL-3
   :recipe: /`bioconductor-anf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anf/meta.yaml>`_

   This package is used for complex patient clustering by integrating multi\-omic data through affinity network fusion.


.. conda:package:: bioconductor-anf

   |downloads_bioconductor-anf| |docker_bioconductor-anf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.13.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.13.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-rcolorbrewer: 
   :depends r-survival: 
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

      mamba install bioconductor-anf

   and update with::

      mamba update bioconductor-anf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-anf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anf:<tag>

   (see `bioconductor-anf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anf
   :alt:   (downloads)
.. |docker_bioconductor-anf| image:: https://quay.io/repository/biocontainers/bioconductor-anf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anf
.. _`bioconductor-anf/tags`: https://quay.io/repository/biocontainers/bioconductor-anf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anf";
        var versions = ["1.22.0","1.20.0","1.16.0","1.13.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anf/README.html
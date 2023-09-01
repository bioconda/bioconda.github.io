:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-edge'
.. highlight: bash

bioconductor-edge
=================

.. conda:recipe:: bioconductor-edge
   :replaces_section_title:
   :noindex:

   Extraction of Differential Gene Expression

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/edge.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-edge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edge/meta.yaml>`_

   The edge package implements methods for carrying out differential expression analyses of genome\-wide gene expression studies. Significance testing using the optimal discovery procedure and generalized likelihood ratio tests \(equivalent to F\-tests and t\-tests\) are implemented for general study designs. Special functions are available to facilitate the analysis of common study designs\, including time course experiments. Other packages such as snm\, sva\, and qvalue are integrated in edge to provide a wide range of tools for gene expression analysis.


.. conda:package:: bioconductor-edge

   |downloads_bioconductor-edge| |docker_bioconductor-edge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.0-0</code>,  <code>2.30.0-1</code>,  <code>2.30.0-0</code>,  <code>2.26.0-2</code>,  <code>2.26.0-1</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  </span></summary>
      

      ``2.32.0-0``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.26.0-2``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-qvalue: ``>=2.32.0,<2.33.0``
   :depends bioconductor-snm: ``>=1.48.0,<1.49.0``
   :depends bioconductor-sva: ``>=3.48.0,<3.49.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
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

      mamba install bioconductor-edge

   and update with::

      mamba update bioconductor-edge

  To create a new environment, run::

      mamba create --name myenvname bioconductor-edge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-edge:<tag>

   (see `bioconductor-edge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-edge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-edge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-edge
   :alt:   (downloads)
.. |docker_bioconductor-edge| image:: https://quay.io/repository/biocontainers/bioconductor-edge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-edge
.. _`bioconductor-edge/tags`: https://quay.io/repository/biocontainers/bioconductor-edge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-edge";
        var versions = ["2.32.0","2.30.0","2.30.0","2.26.0","2.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-edge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-edge/README.html
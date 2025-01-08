:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-noiseq'
.. highlight: bash

bioconductor-noiseq
===================

.. conda:recipe:: bioconductor-noiseq
   :replaces_section_title:
   :noindex:

   Exploratory analysis and differential expression for RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NOISeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-noiseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-noiseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-noiseq/meta.yaml>`_
   :links: biotools: :biotools:`noiseq`

   Analysis of RNA\-seq expression data or other similar kind of data. Exploratory plots to evualuate saturation\, count distribution\, expression per chromosome\, type of detected features\, features length\, etc. Differential expression between two experimental conditions with no parametric assumptions.


.. conda:package:: bioconductor-noiseq

   |downloads_bioconductor-noiseq| |docker_bioconductor-noiseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.50.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-0</code>,  <code>2.38.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-1</code>,  <code>2.34.0-0</code>,  <code>2.31.0-0</code>,  </span></summary>
      

      ``2.50.0-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.31.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.26.1-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrix: ``>=1.2``
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

      mamba install bioconductor-noiseq

   and update with::

      mamba update bioconductor-noiseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-noiseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-noiseq:<tag>

   (see `bioconductor-noiseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-noiseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-noiseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-noiseq
   :alt:   (downloads)
.. |docker_bioconductor-noiseq| image:: https://quay.io/repository/biocontainers/bioconductor-noiseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-noiseq
.. _`bioconductor-noiseq/tags`: https://quay.io/repository/biocontainers/bioconductor-noiseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-noiseq";
        var versions = ["2.50.0","2.46.0","2.44.0","2.42.0","2.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-noiseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-noiseq/README.html
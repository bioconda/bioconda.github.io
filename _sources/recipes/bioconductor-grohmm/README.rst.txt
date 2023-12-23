:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-grohmm'
.. highlight: bash

bioconductor-grohmm
===================

.. conda:recipe:: bioconductor-grohmm
   :replaces_section_title:
   :noindex:

   GRO\-seq Analysis Pipeline

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/groHMM.html
   :license: GPL-3
   :recipe: /`bioconductor-grohmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grohmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grohmm/meta.yaml>`_

   A pipeline for the analysis of GRO\-seq data.


.. conda:package:: bioconductor-grohmm

   |downloads_bioconductor-grohmm| |docker_bioconductor-grohmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
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

      mamba install bioconductor-grohmm

   and update with::

      mamba update bioconductor-grohmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-grohmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-grohmm:<tag>

   (see `bioconductor-grohmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-grohmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-grohmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-grohmm
   :alt:   (downloads)
.. |docker_bioconductor-grohmm| image:: https://quay.io/repository/biocontainers/bioconductor-grohmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-grohmm
.. _`bioconductor-grohmm/tags`: https://quay.io/repository/biocontainers/bioconductor-grohmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-grohmm";
        var versions = ["1.36.0","1.34.0","1.32.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-grohmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-grohmm/README.html
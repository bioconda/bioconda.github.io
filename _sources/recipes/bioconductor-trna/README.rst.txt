:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trna'
.. highlight: bash

bioconductor-trna
=================

.. conda:recipe:: bioconductor-trna
   :replaces_section_title:
   :noindex:

   Analyzing tRNA sequences and structures

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/tRNA.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-trna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trna/meta.yaml>`_

   The tRNA package allows tRNA sequences and structures to be accessed and used for subsetting. In addition\, it provides visualization tools to compare feature parameters of multiple tRNA sets and correlate them to additional data. The tRNA package uses GRanges objects as inputs requiring only few additional column data sets.


.. conda:package:: bioconductor-trna

   |downloads_bioconductor-trna| |docker_bioconductor-trna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-modstrings: ``>=1.18.0,<1.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-structstrings: ``>=1.18.0,<1.19.0``
   :depends bioconductor-xvector: ``>=0.42.0,<0.43.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-scales: 
   :depends r-stringr: 
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

      mamba install bioconductor-trna

   and update with::

      mamba update bioconductor-trna

  To create a new environment, run::

      mamba create --name myenvname bioconductor-trna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trna:<tag>

   (see `bioconductor-trna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trna
   :alt:   (downloads)
.. |docker_bioconductor-trna| image:: https://quay.io/repository/biocontainers/bioconductor-trna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trna
.. _`bioconductor-trna/tags`: https://quay.io/repository/biocontainers/bioconductor-trna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-trna";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trna/README.html
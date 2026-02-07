:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sagenhaft'
.. highlight: bash

bioconductor-sagenhaft
======================

.. conda:recipe:: bioconductor-sagenhaft
   :replaces_section_title:
   :noindex:

   Collection of functions for reading and comparing SAGE libraries

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sagenhaft.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-sagenhaft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sagenhaft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sagenhaft/meta.yaml>`_
   :links: biotools: :biotools:`sagenhaft`, doi: :doi:`10.1038/nmeth.3252`

   This package implements several functions useful for analysis of gene expression data by sequencing tags as done in SAGE \(Serial Analysis of Gene Expressen\) data\, i.e. extraction of a SAGE library from sequence files\, sequence error correction\, library comparison. Sequencing error correction is implementing using an Expectation Maximization Algorithm based on a Mixture Model of tag counts.


.. conda:package:: bioconductor-sagenhaft

   |downloads_bioconductor-sagenhaft| |docker_bioconductor-sagenhaft|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.80.0-0</code>,  <code>1.76.0-0</code>,  <code>1.72.0-1</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  </span></summary>
      

      ``1.80.0-0``,  ``1.76.0-0``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-sparsem: ``>=0.73``
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

      mamba install bioconductor-sagenhaft

   and update with::

      mamba update bioconductor-sagenhaft

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sagenhaft

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sagenhaft:<tag>

   (see `bioconductor-sagenhaft/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sagenhaft| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sagenhaft.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sagenhaft
   :alt:   (downloads)
.. |docker_bioconductor-sagenhaft| image:: https://quay.io/repository/biocontainers/bioconductor-sagenhaft/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sagenhaft
.. _`bioconductor-sagenhaft/tags`: https://quay.io/repository/biocontainers/bioconductor-sagenhaft?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sagenhaft";
        var versions = ["1.80.0","1.76.0","1.72.0","1.72.0","1.70.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sagenhaft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sagenhaft/README.html
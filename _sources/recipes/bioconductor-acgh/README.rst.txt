:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-acgh'
.. highlight: bash

bioconductor-acgh
=================

.. conda:recipe:: bioconductor-acgh
   :replaces_section_title:
   :noindex:

   Classes and functions for Array Comparative Genomic Hybridization data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/aCGH.html
   :license: GPL-2
   :recipe: /`bioconductor-acgh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acgh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acgh/meta.yaml>`_
   :links: biotools: :biotools:`acgh`, doi: :doi:`10.1093/bioinformatics/bti677`

   Functions for reading aCGH data from image analysis output files and clone information files\, creation of aCGH S3 objects for storing these data. Basic methods for accessing\/replacing\, subsetting\, printing and plotting aCGH objects.


.. conda:package:: bioconductor-acgh

   |downloads_bioconductor-acgh| |docker_bioconductor-acgh|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.80.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-1</code>,  <code>1.76.0-0</code>,  <code>1.72.0-2</code>,  <code>1.72.0-1</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  </span></summary>
      

      ``1.80.0-0``,  ``1.78.0-0``,  ``1.76.0-1``,  ``1.76.0-0``,  ``1.72.0-2``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-multtest: ``>=2.58.0,<2.59.0``
   :depends bioconductor-multtest: ``>=2.58.0,<2.59.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-survival: 
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

      mamba install bioconductor-acgh

   and update with::

      mamba update bioconductor-acgh

  To create a new environment, run::

      mamba create --name myenvname bioconductor-acgh

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-acgh:<tag>

   (see `bioconductor-acgh/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-acgh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-acgh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-acgh
   :alt:   (downloads)
.. |docker_bioconductor-acgh| image:: https://quay.io/repository/biocontainers/bioconductor-acgh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-acgh
.. _`bioconductor-acgh/tags`: https://quay.io/repository/biocontainers/bioconductor-acgh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-acgh";
        var versions = ["1.80.0","1.78.0","1.76.0","1.76.0","1.72.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-acgh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-acgh/README.html
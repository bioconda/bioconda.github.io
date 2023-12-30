:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-h5vc'
.. highlight: bash

bioconductor-h5vc
=================

.. conda:recipe:: bioconductor-h5vc
   :replaces_section_title:
   :noindex:

   Managing alignment tallies using a hdf5 backend

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/h5vc.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-h5vc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h5vc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h5vc/meta.yaml>`_

   This package contains functions to interact with tally data from NGS experiments that is stored in HDF5 files.


.. conda:package:: bioconductor-h5vc

   |downloads_bioconductor-h5vc| |docker_bioconductor-h5vc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.28.0-2</code>,  <code>2.28.0-1</code>,  <code>2.28.0-0</code>,  <code>2.26.1-0</code>,  <code>2.24.0-1</code>,  </span></summary>
      

      ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.28.0-2``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.26.1-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.18.0-1``,  ``2.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-h5vcdata: ``>=2.22.0,<2.23.0``
   :depends bioconductor-h5vcdata: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rhdf5: ``>=2.46.1,<2.47.0a0``
   :depends bioconductor-rhtslib: ``>=2.4.0,<2.5.0``
   :depends bioconductor-rhtslib: ``>=2.4.0,<2.5.0a0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-abind: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-batchjobs: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-reshape: 
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

      mamba install bioconductor-h5vc

   and update with::

      mamba update bioconductor-h5vc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-h5vc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-h5vc:<tag>

   (see `bioconductor-h5vc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-h5vc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-h5vc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-h5vc
   :alt:   (downloads)
.. |docker_bioconductor-h5vc| image:: https://quay.io/repository/biocontainers/bioconductor-h5vc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-h5vc
.. _`bioconductor-h5vc/tags`: https://quay.io/repository/biocontainers/bioconductor-h5vc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-h5vc";
        var versions = ["2.36.0","2.34.0","2.32.0","2.32.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-h5vc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-h5vc/README.html
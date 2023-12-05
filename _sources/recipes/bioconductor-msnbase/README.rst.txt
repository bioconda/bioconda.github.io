:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msnbase'
.. highlight: bash

bioconductor-msnbase
====================

.. conda:recipe:: bioconductor-msnbase
   :replaces_section_title:
   :noindex:

   Base Functions and Classes for Mass Spectrometry and Proteomics

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MSnbase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msnbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msnbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msnbase/meta.yaml>`_
   :links: biotools: :biotools:`msnbase`

   MSnbase provides infrastructure for manipulation\, processing and visualisation of mass spectrometry and proteomics data\, ranging from raw to quantitative and annotated data.


.. conda:package:: bioconductor-msnbase

   |downloads_bioconductor-msnbase| |docker_bioconductor-msnbase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.28.1-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-1</code>,  <code>2.24.0-0</code>,  <code>2.20.4-1</code>,  <code>2.20.4-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.1-0</code>,  </span></summary>
      

      ``2.28.1-0``,  ``2.26.0-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.20.4-1``,  ``2.20.4-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.1-0``,  ``2.16.0-0``,  ``2.14.1-0``,  ``2.12.0-0``,  ``2.10.1-0``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-impute: ``>=1.76.0,<1.77.0``
   :depends bioconductor-impute: ``>=1.76.0,<1.77.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-mscoreutils: ``>=1.14.0,<1.15.0``
   :depends bioconductor-mscoreutils: ``>=1.14.1,<1.15.0a0``
   :depends bioconductor-mzid: ``>=1.40.0,<1.41.0``
   :depends bioconductor-mzid: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-mzr: ``>=2.36.0,<2.37.0``
   :depends bioconductor-mzr: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0``
   :depends bioconductor-pcamethods: ``>=1.94.0,<1.95.0a0``
   :depends bioconductor-protgenerics: ``>=1.34.0,<1.35.0``
   :depends bioconductor-protgenerics: ``>=1.34.0,<1.35.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-vsn: ``>=3.70.0,<3.71.0``
   :depends bioconductor-vsn: ``>=3.70.0,<3.71.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-digest: 
   :depends r-ggplot2: 
   :depends r-lattice: 
   :depends r-maldiquant: ``>=1.16``
   :depends r-mass: 
   :depends r-plyr: 
   :depends r-rcpp: 
   :depends r-scales: 
   :depends r-xml: 
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

      mamba install bioconductor-msnbase

   and update with::

      mamba update bioconductor-msnbase

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msnbase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msnbase:<tag>

   (see `bioconductor-msnbase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msnbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msnbase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msnbase
   :alt:   (downloads)
.. |docker_bioconductor-msnbase| image:: https://quay.io/repository/biocontainers/bioconductor-msnbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msnbase
.. _`bioconductor-msnbase/tags`: https://quay.io/repository/biocontainers/bioconductor-msnbase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msnbase";
        var versions = ["2.28.1","2.26.0","2.24.0","2.24.0","2.20.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msnbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msnbase/README.html
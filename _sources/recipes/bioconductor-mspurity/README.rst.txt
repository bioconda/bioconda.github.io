:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mspurity'
.. highlight: bash

bioconductor-mspurity
=====================

.. conda:recipe:: bioconductor-mspurity
   :replaces_section_title:
   :noindex:

   Automated Evaluation of Precursor Ion Purity for Mass Spectrometry Based Fragmentation in Metabolomics

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/msPurity.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-mspurity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mspurity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mspurity/meta.yaml>`_
   :links: biotools: :biotools:`mspurity`, doi: :doi:`10.1021/acs.analchem.6b04358`

   msPurity R package was developed to\: 1\) Assess the spectral quality of fragmentation spectra by evaluating the \"precursor ion purity\". 2\) Process fragmentation spectra. 3\) Perform spectral matching. What is precursor ion purity\? \-What we call \"Precursor ion purity\" is a measure of the contribution of a selected precursor peak in an isolation window used for fragmentation. The simple calculation involves dividing the intensity of the selected precursor peak by the total intensity of the isolation window. When assessing MS\/MS spectra this calculation is done before and after the MS\/MS scan of interest and the purity is interpolated at the recorded time of the MS\/MS acquisition. Additionally\, isotopic peaks can be removed\, low abundance peaks are removed that are thought to have limited contribution to the resulting MS\/MS spectra and the isolation efficiency of the mass spectrometer can be used to normalise the intensities used for the calculation.


.. conda:package:: bioconductor-mspurity

   |downloads_bioconductor-mspurity| |docker_bioconductor-mspurity|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.0-2</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.2-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.2-1``,  ``1.16.2-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.2-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.5.4-1``,  ``1.5.4-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-mzr: ``>=2.36.0,<2.37.0``
   :depends bioconductor-mzr: ``>=2.36.0,<2.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-dbplyr: 
   :depends r-dosnow: 
   :depends r-dplyr: 
   :depends r-fastcluster: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-rsqlite: 
   :depends r-stringr: 
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

      mamba install bioconductor-mspurity

   and update with::

      mamba update bioconductor-mspurity

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mspurity

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mspurity:<tag>

   (see `bioconductor-mspurity/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mspurity| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mspurity.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mspurity
   :alt:   (downloads)
.. |docker_bioconductor-mspurity| image:: https://quay.io/repository/biocontainers/bioconductor-mspurity/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mspurity
.. _`bioconductor-mspurity/tags`: https://quay.io/repository/biocontainers/bioconductor-mspurity?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mspurity";
        var versions = ["1.28.0","1.26.0","1.24.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mspurity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mspurity/README.html
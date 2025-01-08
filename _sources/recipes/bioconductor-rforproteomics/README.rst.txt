:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rforproteomics'
.. highlight: bash

bioconductor-rforproteomics
===========================

.. conda:recipe:: bioconductor-rforproteomics
   :replaces_section_title:
   :noindex:

   Companion package to the \'Using R and Bioconductor for proteomics data analysis\' publication

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/RforProteomics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rforproteomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rforproteomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rforproteomics/meta.yaml>`_

   This package contains code to illustrate the \'Using R and Bioconductor for proteomics data analysis\' and \'Visualisation of proteomics data using R and Bioconductor\' manuscripts. The vignettes describe the code and data needed to reproduce the examples and figures described in the paper and functionality for proteomics visualisation. It also contain various function to discover R software for mass spectrometry and proteomics.


.. conda:package:: bioconductor-rforproteomics

   |downloads_bioconductor-rforproteomics| |docker_bioconductor-rforproteomics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.1-0</code>,  <code>1.35.1-0</code>,  <code>1.32.0-1</code>,  <code>1.31.1-0</code>,  <code>1.30.0-0</code>,  <code>1.28.1-0</code>,  <code>1.27.1-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.1-0``,  ``1.35.1-0``,  ``1.32.0-1``,  ``1.31.1-0``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.27.1-0``,  ``1.26.0-0``,  ``1.23.1-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocviews: ``>=1.74.0,<1.75.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-msnbase: ``>=2.32.0,<2.33.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-biocmanager: 
   :depends r-r.utils: 
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

      mamba install bioconductor-rforproteomics

   and update with::

      mamba update bioconductor-rforproteomics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rforproteomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rforproteomics:<tag>

   (see `bioconductor-rforproteomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rforproteomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rforproteomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rforproteomics
   :alt:   (downloads)
.. |docker_bioconductor-rforproteomics| image:: https://quay.io/repository/biocontainers/bioconductor-rforproteomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rforproteomics
.. _`bioconductor-rforproteomics/tags`: https://quay.io/repository/biocontainers/bioconductor-rforproteomics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rforproteomics";
        var versions = ["1.44.0","1.40.0","1.38.1","1.35.1","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rforproteomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rforproteomics/README.html
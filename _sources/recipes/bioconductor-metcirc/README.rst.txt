:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metcirc'
.. highlight: bash

bioconductor-metcirc
====================

.. conda:recipe:: bioconductor-metcirc
   :replaces_section_title:
   :noindex:

   Navigating mass spectral similarity in high\-resolution MS\/MS metabolomics data metabolomics data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MetCirc.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-metcirc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metcirc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metcirc/meta.yaml>`_
   :links: biotools: :biotools:`metcirc`, doi: :doi:`10.1093/bioinformatics/btx159`

   MetCirc comprises a workflow to interactively explore high\-resolution MS\/MS metabolomics data. MetCirc uses the Spectra object infrastructure defined in the package Spectra that stores MS\/MS spectra. MetCirc offers functionality to calculate similarity between precursors based on the normalised dot product\, neutral losses or user\-defined functions and visualise similarities in a circular layout. Within the interactive framework the user can annotate MS\/MS features based on their similarity to \(known\) related MS\/MS features.


.. conda:package:: bioconductor-metcirc

   |downloads_bioconductor-metcirc| |docker_bioconductor-metcirc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-mscoreutils: ``>=1.12.0,<1.13.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-spectra: ``>=1.10.0,<1.11.0``
   :depends r-amap: ``>=0.8``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: ``>=0.3.9``
   :depends r-ggplot2: ``>=3.2.1``
   :depends r-scales: ``>=0.3.0``
   :depends r-shiny: ``>=1.0.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-metcirc

   and update with::

      mamba update bioconductor-metcirc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metcirc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metcirc:<tag>

   (see `bioconductor-metcirc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metcirc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metcirc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metcirc
   :alt:   (downloads)
.. |docker_bioconductor-metcirc| image:: https://quay.io/repository/biocontainers/bioconductor-metcirc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metcirc
.. _`bioconductor-metcirc/tags`: https://quay.io/repository/biocontainers/bioconductor-metcirc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metcirc";
        var versions = ["1.30.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metcirc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metcirc/README.html
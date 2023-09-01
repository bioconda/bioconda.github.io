:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowploidy'
.. highlight: bash

bioconductor-flowploidy
=======================

.. conda:recipe:: bioconductor-flowploidy
   :replaces_section_title:
   :noindex:

   Analyze flow cytometer data to determine sample ploidy

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/flowPloidy.html
   :license: GPL-3
   :recipe: /`bioconductor-flowploidy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowploidy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowploidy/meta.yaml>`_
   :links: biotools: :biotools:`flowploidy`, doi: :doi:`10.1038/nmeth.3252`

   Determine sample ploidy via flow cytometry histogram analysis. Reads Flow Cytometry Standard \(FCS\) files via the flowCore bioconductor package\, and provides functions for determining the DNA ploidy of samples based on internal standards.


.. conda:package:: bioconductor-flowploidy

   |downloads_bioconductor-flowploidy| |docker_bioconductor-flowploidy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowcore: ``>=2.12.0,<2.13.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-car: 
   :depends r-catools: 
   :depends r-knitr: 
   :depends r-minpack.lm: 
   :depends r-rmarkdown: 
   :depends r-shiny: 
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

      mamba install bioconductor-flowploidy

   and update with::

      mamba update bioconductor-flowploidy

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowploidy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowploidy:<tag>

   (see `bioconductor-flowploidy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowploidy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowploidy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowploidy
   :alt:   (downloads)
.. |docker_bioconductor-flowploidy| image:: https://quay.io/repository/biocontainers/bioconductor-flowploidy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowploidy
.. _`bioconductor-flowploidy/tags`: https://quay.io/repository/biocontainers/bioconductor-flowploidy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowploidy";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowploidy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowploidy/README.html
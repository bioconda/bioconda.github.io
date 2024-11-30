:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ioniser'
.. highlight: bash

bioconductor-ioniser
====================

.. conda:recipe:: bioconductor-ioniser
   :replaces_section_title:
   :noindex:

   Quality Assessment Tools for Oxford Nanopore MinION data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/IONiseR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ioniser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ioniser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ioniser/meta.yaml>`_
   :links: biotools: :biotools:`ioniser`, doi: :doi:`10.1038/nmeth.3252`

   IONiseR provides tools for the quality assessment of Oxford Nanopore MinION data. It extracts summary statistics from a set of fast5 files and can be used either before or after base calling.  In addition to standard summaries of the read\-types produced\, it provides a number of plots for visualising metrics relative to experiment run time or spatially over the surface of a flowcell.


.. conda:package:: bioconductor-ioniser

   |downloads_bioconductor-ioniser| |docker_bioconductor-ioniser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  </span></summary>
      

      ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-shortread: ``>=1.60.0,<1.61.0``
   :depends bioconductor-xvector: ``>=0.42.0,<0.43.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bit64: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-ioniser

   and update with::

      mamba update bioconductor-ioniser

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ioniser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ioniser:<tag>

   (see `bioconductor-ioniser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ioniser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ioniser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ioniser
   :alt:   (downloads)
.. |docker_bioconductor-ioniser| image:: https://quay.io/repository/biocontainers/bioconductor-ioniser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ioniser
.. _`bioconductor-ioniser/tags`: https://quay.io/repository/biocontainers/bioconductor-ioniser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ioniser";
        var versions = ["2.26.0","2.24.0","2.22.0","2.18.0","2.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ioniser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ioniser/README.html
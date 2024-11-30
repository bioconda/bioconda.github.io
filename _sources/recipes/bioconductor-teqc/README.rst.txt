:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-teqc'
.. highlight: bash

bioconductor-teqc
=================

.. conda:recipe:: bioconductor-teqc
   :replaces_section_title:
   :noindex:

   Quality control for target capture experiments

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TEQC.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-teqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-teqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-teqc/meta.yaml>`_
   :links: biotools: :biotools:`teqc`, doi: :doi:`10.1093/bioinformatics/btr122`

   Target capture experiments combine hybridization\-based \(in solution or on microarrays\) capture and enrichment of genomic regions of interest \(e.g. the exome\) with high throughput sequencing of the captured DNA fragments. This package provides functionalities for assessing and visualizing the quality of the target enrichment process\, like specificity and sensitivity of the capture\, per\-target read coverage and so on.


.. conda:package:: bioconductor-teqc

   |downloads_bioconductor-teqc| |docker_bioconductor-teqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.24.0-0</code>,  <code>4.22.0-0</code>,  <code>4.20.0-0</code>,  <code>4.16.0-0</code>,  <code>4.14.0-0</code>,  <code>4.12.0-1</code>,  <code>4.12.0-0</code>,  <code>4.10.0-0</code>,  <code>4.8.0-0</code>,  </span></summary>
      

      ``4.24.0-0``,  ``4.22.0-0``,  ``4.20.0-0``,  ``4.16.0-0``,  ``4.14.0-0``,  ``4.12.0-1``,  ``4.12.0-0``,  ``4.10.0-0``,  ``4.8.0-0``,  ``4.6.0-1``,  ``4.4.0-0``,  ``4.2.0-0``,  ``3.18.0-0``,  ``3.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-hwriter: 
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

      mamba install bioconductor-teqc

   and update with::

      mamba update bioconductor-teqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-teqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-teqc:<tag>

   (see `bioconductor-teqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-teqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-teqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-teqc
   :alt:   (downloads)
.. |docker_bioconductor-teqc| image:: https://quay.io/repository/biocontainers/bioconductor-teqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-teqc
.. _`bioconductor-teqc/tags`: https://quay.io/repository/biocontainers/bioconductor-teqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-teqc";
        var versions = ["4.24.0","4.22.0","4.20.0","4.16.0","4.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-teqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-teqc/README.html
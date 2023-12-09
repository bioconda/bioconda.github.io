:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvrd2'
.. highlight: bash

bioconductor-cnvrd2
===================

.. conda:recipe:: bioconductor-cnvrd2
   :replaces_section_title:
   :noindex:

   CNVrd2\: a read depth\-based method to detect and genotype complex common copy number variants from next generation sequencing data.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CNVrd2.html
   :license: GPL-2
   :recipe: /`bioconductor-cnvrd2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvrd2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvrd2/meta.yaml>`_

   CNVrd2 uses next\-generation sequencing data to measure human gene copy number for multiple samples\, indentify SNPs tagging copy number variants and detect copy number polymorphic genomic regions.


.. conda:package:: bioconductor-cnvrd2

   |downloads_bioconductor-cnvrd2| |docker_bioconductor-cnvrd2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-dnacopy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-rjags: 
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

      mamba install bioconductor-cnvrd2

   and update with::

      mamba update bioconductor-cnvrd2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cnvrd2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnvrd2:<tag>

   (see `bioconductor-cnvrd2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnvrd2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvrd2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnvrd2
   :alt:   (downloads)
.. |docker_bioconductor-cnvrd2| image:: https://quay.io/repository/biocontainers/bioconductor-cnvrd2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvrd2
.. _`bioconductor-cnvrd2/tags`: https://quay.io/repository/biocontainers/bioconductor-cnvrd2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnvrd2";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvrd2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvrd2/README.html
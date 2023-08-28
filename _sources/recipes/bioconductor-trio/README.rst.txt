:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trio'
.. highlight: bash

bioconductor-trio
=================

.. conda:recipe:: bioconductor-trio
   :replaces_section_title:
   :noindex:

   Testing of SNPs and SNP Interactions in Case\-Parent Trio Studies

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/trio.html
   :license: LGPL-2
   :recipe: /`bioconductor-trio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trio/meta.yaml>`_
   :links: biotools: :biotools:`trio`, doi: :doi:`10.1038/nmeth.3252`

   Testing SNPs and SNP interactions with a genotypic TDT. This package furthermore contains functions for computing pairwise values of LD measures and for identifying LD blocks\, as well as functions for setting up matched case pseudo\-control genotype data for case\-parent trios in order to run trio logic regression\, for imputing missing genotypes in trios\, for simulating case\-parent trios with disease risk dependent on SNP interaction\, and for power and sample size calculation in trio data.


.. conda:package:: bioconductor-trio

   |downloads_bioconductor-trio| |docker_bioconductor-trio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.38.0-0</code>,  <code>3.36.0-0</code>,  <code>3.32.0-0</code>,  <code>3.30.0-0</code>,  <code>3.28.0-1</code>,  <code>3.28.0-0</code>,  <code>3.26.0-0</code>,  <code>3.24.0-0</code>,  <code>3.22.0-1</code>,  </span></summary>
      

      ``3.38.0-0``,  ``3.36.0-0``,  ``3.32.0-0``,  ``3.30.0-0``,  ``3.28.0-1``,  ``3.28.0-0``,  ``3.26.0-0``,  ``3.24.0-0``,  ``3.22.0-1``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-0``,  ``3.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-siggenes: ``>=1.74.0,<1.75.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-logicreg: ``>=1.6.1``
   :depends r-survival: 
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

      mamba install bioconductor-trio

   and update with::

      mamba update bioconductor-trio

  To create a new environment, run::

      mamba create --name myenvname bioconductor-trio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trio:<tag>

   (see `bioconductor-trio/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trio.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trio
   :alt:   (downloads)
.. |docker_bioconductor-trio| image:: https://quay.io/repository/biocontainers/bioconductor-trio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trio
.. _`bioconductor-trio/tags`: https://quay.io/repository/biocontainers/bioconductor-trio?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-trio";
        var versions = ["3.38.0","3.36.0","3.32.0","3.30.0","3.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trio/README.html
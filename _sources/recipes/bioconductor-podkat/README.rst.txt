:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-podkat'
.. highlight: bash

bioconductor-podkat
===================

.. conda:recipe:: bioconductor-podkat
   :replaces_section_title:
   :noindex:

   Position\-Dependent Kernel Association Test

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/podkat.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-podkat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-podkat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-podkat/meta.yaml>`_
   :links: biotools: :biotools:`podkat`, doi: :doi:`10.1038/nmeth.3252`

   This package provides an association test that is capable of dealing with very rare and even private variants. This is accomplished by a kernel\-based approach that takes the positions of the variants into account. The test can be used for pre\-processed matrix data\, but also directly for variant data stored in VCF files. Association testing can be performed whole\-genome\, whole\-exome\, or restricted to pre\-defined regions of interest. The test is complemented by tools for analyzing and visualizing the results.


.. conda:package:: bioconductor-podkat

   |downloads_bioconductor-podkat| |docker_bioconductor-podkat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rhtslib: ``>=2.2.0,<2.3.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-rcpp: ``>=0.11.1``
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

      mamba install bioconductor-podkat

   and update with::

      mamba update bioconductor-podkat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-podkat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-podkat:<tag>

   (see `bioconductor-podkat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-podkat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-podkat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-podkat
   :alt:   (downloads)
.. |docker_bioconductor-podkat| image:: https://quay.io/repository/biocontainers/bioconductor-podkat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-podkat
.. _`bioconductor-podkat/tags`: https://quay.io/repository/biocontainers/bioconductor-podkat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-podkat";
        var versions = ["1.32.0","1.30.0","1.30.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-podkat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-podkat/README.html
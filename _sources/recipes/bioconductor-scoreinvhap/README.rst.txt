:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scoreinvhap'
.. highlight: bash

bioconductor-scoreinvhap
========================

.. conda:recipe:: bioconductor-scoreinvhap
   :replaces_section_title:
   :noindex:

   Get inversion status in predefined regions

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scoreInvHap.html
   :license: file LICENSE
   :recipe: /`bioconductor-scoreinvhap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scoreinvhap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scoreinvhap/meta.yaml>`_

   scoreInvHap can get the samples\' inversion status of known inversions. scoreInvHap uses SNP data as input and requires the following information about the inversion\: genotype frequencies in the different haplotypes\, R2 between the region SNPs and inversion status and heterozygote genotypes in the reference. The package include this data for 21 inversions.


.. conda:package:: bioconductor-scoreinvhap

   |downloads_bioconductor-scoreinvhap| |docker_bioconductor-scoreinvhap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-snpstats: ``>=1.50.0,<1.51.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-scoreinvhap

   and update with::

      mamba update bioconductor-scoreinvhap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scoreinvhap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scoreinvhap:<tag>

   (see `bioconductor-scoreinvhap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scoreinvhap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scoreinvhap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scoreinvhap
   :alt:   (downloads)
.. |docker_bioconductor-scoreinvhap| image:: https://quay.io/repository/biocontainers/bioconductor-scoreinvhap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scoreinvhap
.. _`bioconductor-scoreinvhap/tags`: https://quay.io/repository/biocontainers/bioconductor-scoreinvhap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scoreinvhap";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scoreinvhap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scoreinvhap/README.html
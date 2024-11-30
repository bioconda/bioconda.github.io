:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hapfabia'
.. highlight: bash

bioconductor-hapfabia
=====================

.. conda:recipe:: bioconductor-hapfabia
   :replaces_section_title:
   :noindex:

   hapFabia\: Identification of very short segments of identity by descent \(IBD\) characterized by rare variants in large sequencing data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/hapFabia.html
   :license: LGPL (>= 2.1)
   :recipe: /`bioconductor-hapfabia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapfabia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapfabia/meta.yaml>`_
   :links: biotools: :biotools:`hapfabia`

   A package to identify very short IBD segments in large sequencing data by FABIA biclustering. Two haplotypes are identical by descent \(IBD\) if they share a segment that both inherited from a common ancestor. Current IBD methods reliably detect long IBD segments because many minor alleles in the segment are concordant between the two haplotypes. However\, many cohort studies contain unrelated individuals which share only short IBD segments. This package provides software to identify short IBD segments in sequencing data. Knowledge of short IBD segments are relevant for phasing of genotyping data\, association studies\, and for population genetics\, where they shed light on the evolutionary history of humans. The package supports VCF formats\, is based on sparse matrix operations\, and provides visualization of haplotype clusters in different formats.


.. conda:package:: bioconductor-hapfabia

   |downloads_bioconductor-hapfabia| |docker_bioconductor-hapfabia|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.36.0-2</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.36.0-2``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-fabia: ``>=2.48.0,<2.49.0``
   :depends bioconductor-fabia: ``>=2.48.0,<2.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-hapfabia

   and update with::

      mamba update bioconductor-hapfabia

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hapfabia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hapfabia:<tag>

   (see `bioconductor-hapfabia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hapfabia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hapfabia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hapfabia
   :alt:   (downloads)
.. |docker_bioconductor-hapfabia| image:: https://quay.io/repository/biocontainers/bioconductor-hapfabia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hapfabia
.. _`bioconductor-hapfabia/tags`: https://quay.io/repository/biocontainers/bioconductor-hapfabia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hapfabia";
        var versions = ["1.44.0","1.42.0","1.40.0","1.40.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hapfabia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hapfabia/README.html
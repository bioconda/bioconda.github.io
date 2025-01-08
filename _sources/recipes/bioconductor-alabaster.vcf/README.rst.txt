:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.vcf'
.. highlight: bash

bioconductor-alabaster.vcf
==========================

.. conda:recipe:: bioconductor-alabaster.vcf
   :replaces_section_title:
   :noindex:

   Save and Load Variant Data to\/from File

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/alabaster.vcf.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.vcf/meta.yaml>`_

   Save variant calling SummarizedExperiment to file and load them back as VCF objects. This is a more portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.vcf

   |downloads_bioconductor-alabaster.vcf| |docker_bioconductor-alabaster.vcf|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-alabaster.base: ``>=1.6.0,<1.7.0``
   :depends bioconductor-alabaster.se: ``>=1.6.0,<1.7.0``
   :depends bioconductor-alabaster.string: ``>=1.6.0,<1.7.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-alabaster.vcf

   and update with::

      mamba update bioconductor-alabaster.vcf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-alabaster.vcf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster.vcf:<tag>

   (see `bioconductor-alabaster.vcf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster.vcf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.vcf
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.vcf| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.vcf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.vcf
.. _`bioconductor-alabaster.vcf/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.vcf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.vcf";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.vcf/README.html
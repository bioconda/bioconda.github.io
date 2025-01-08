:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rhinotyper'
.. highlight: bash

bioconductor-rhinotyper
=======================

.. conda:recipe:: bioconductor-rhinotyper
   :replaces_section_title:
   :noindex:

   Rhinovirus genotyping

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rhinotypeR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rhinotyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhinotyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhinotyper/meta.yaml>`_

   \"rhinotypeR\" is designed to automate the comparison of sequence data against prototype strains\, streamlining the genotype assignment process. By implementing predefined pairwise distance thresholds\, this package makes genotype assignment accessible to researchers and public health professionals. This tool enhances our epidemiological toolkit by enabling more efficient surveillance and analysis of rhinoviruses \(RVs\) and other viral pathogens with complex genomic landscapes. Additionally\, \"rhinotypeR\" supports comprehensive visualization and analysis of single nucleotide polymorphisms \(SNPs\) and amino acid substitutions\, facilitating in\-depth genetic and evolutionary studies.


.. conda:package:: bioconductor-rhinotyper

   |downloads_bioconductor-rhinotyper| |docker_bioconductor-rhinotyper|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
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

      mamba install bioconductor-rhinotyper

   and update with::

      mamba update bioconductor-rhinotyper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rhinotyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rhinotyper:<tag>

   (see `bioconductor-rhinotyper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rhinotyper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhinotyper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rhinotyper
   :alt:   (downloads)
.. |docker_bioconductor-rhinotyper| image:: https://quay.io/repository/biocontainers/bioconductor-rhinotyper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhinotyper
.. _`bioconductor-rhinotyper/tags`: https://quay.io/repository/biocontainers/bioconductor-rhinotyper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rhinotyper";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhinotyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhinotyper/README.html
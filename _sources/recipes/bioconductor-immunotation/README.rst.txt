:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-immunotation'
.. highlight: bash

bioconductor-immunotation
=========================

.. conda:recipe:: bioconductor-immunotation
   :replaces_section_title:
   :noindex:

   Tools for working with diverse immune genes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/immunotation.html
   :license: GPL-3
   :recipe: /`bioconductor-immunotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunotation/meta.yaml>`_

   MHC \(major histocompatibility complex\) molecules are cell surface complexes that present antigens to T cells.  The repertoire of antigens presented in a given genetic background largely depends on the sequence of the encoded MHC molecules\, and thus\, in humans\, on the highly variable HLA \(human leukocyte antigen\) genes of the hyperpolymorphic HLA locus. More than 28\,000 different HLA alleles have been reported\, with significant differences in allele frequencies between human populations worldwide. Reproducible and consistent annotation of HLA alleles in large\-scale bioinformatics workflows remains challenging\, because the available reference databases and software tools often use different HLA naming schemes. The package immunotation provides tools for consistent annotation of HLA genes in typical immunoinformatics workflows such as for example the prediction of MHC\-presented peptides in different human donors. Converter functions that provide mappings between different HLA naming schemes are based on the MHC restriction ontology \(MRO\). The package also provides automated access to HLA alleles frequencies in worldwide human reference populations stored in the Allele Frequency Net Database.


.. conda:package:: bioconductor-immunotation

   |downloads_bioconductor-immunotation| |docker_bioconductor-immunotation|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.5.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-curl: 
   :depends r-ggplot2: 
   :depends r-maps: 
   :depends r-ontologyindex: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-rvest: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-xml2: 
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

      mamba install bioconductor-immunotation

   and update with::

      mamba update bioconductor-immunotation

  To create a new environment, run::

      mamba create --name myenvname bioconductor-immunotation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-immunotation:<tag>

   (see `bioconductor-immunotation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-immunotation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-immunotation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-immunotation
   :alt:   (downloads)
.. |docker_bioconductor-immunotation| image:: https://quay.io/repository/biocontainers/bioconductor-immunotation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-immunotation
.. _`bioconductor-immunotation/tags`: https://quay.io/repository/biocontainers/bioconductor-immunotation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-immunotation";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-immunotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-immunotation/README.html
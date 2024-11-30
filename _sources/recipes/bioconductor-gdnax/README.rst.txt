:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdnax'
.. highlight: bash

bioconductor-gdnax
==================

.. conda:recipe:: bioconductor-gdnax
   :replaces_section_title:
   :noindex:

   Diagnostics for assessing genomic DNA contamination in RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/gDNAx.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdnax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdnax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdnax/meta.yaml>`_

   Provides diagnostics for assessing genomic DNA contamination in RNA\-seq data\, as well as plots representing these diagnostics. Moreover\, the package can be used to get an insight into the strand library protocol used and\, in case of strand\-specific libraries\, the strandedness of the data. Furthermore\, it provides functionality to filter out reads of potential gDNA origin.


.. conda:package:: bioconductor-gdnax

   |downloads_bioconductor-gdnax| |docker_bioconductor-gdnax|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicfiles: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bitops: 
   :depends r-plotrix: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-gdnax

   and update with::

      mamba update bioconductor-gdnax

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gdnax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gdnax:<tag>

   (see `bioconductor-gdnax/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gdnax| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdnax.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdnax
   :alt:   (downloads)
.. |docker_bioconductor-gdnax| image:: https://quay.io/repository/biocontainers/bioconductor-gdnax/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdnax
.. _`bioconductor-gdnax/tags`: https://quay.io/repository/biocontainers/bioconductor-gdnax?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdnax";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdnax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdnax/README.html
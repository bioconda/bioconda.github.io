:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-conumee'
.. highlight: bash

bioconductor-conumee
====================

.. conda:recipe:: bioconductor-conumee
   :replaces_section_title:
   :noindex:

   Enhanced copy\-number variation analysis using Illumina DNA methylation arrays

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/conumee.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-conumee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-conumee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-conumee/meta.yaml>`_

   This package contains a set of processing and plotting methods for performing copy\-number variation \(CNV\) analysis using Illumina 450k or EPIC methylation arrays.


.. conda:package:: bioconductor-conumee

   |downloads_bioconductor-conumee| |docker_bioconductor-conumee|

   :versions:
      
      

      ``1.32.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``

      

   
   :depends bioconductor-dnacopy: ``>=1.72.0,<1.73.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0``
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b2.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylationepicmanifest: ``>=0.3.0,<0.4.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-minfi: ``>=1.44.0,<1.45.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
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

      mamba install bioconductor-conumee

   and update with::

      mamba update bioconductor-conumee

  To create a new environment, run::

      mamba create --name myenvname bioconductor-conumee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-conumee:<tag>

   (see `bioconductor-conumee/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-conumee| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-conumee.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-conumee
   :alt:   (downloads)
.. |docker_bioconductor-conumee| image:: https://quay.io/repository/biocontainers/bioconductor-conumee/status
   :target: https://quay.io/repository/biocontainers/bioconductor-conumee
.. _`bioconductor-conumee/tags`: https://quay.io/repository/biocontainers/bioconductor-conumee?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-conumee";
        var versions = ["1.32.0","1.26.0","1.24.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-conumee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-conumee/README.html
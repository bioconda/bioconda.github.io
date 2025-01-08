:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicool'
.. highlight: bash

bioconductor-hicool
===================

.. conda:recipe:: bioconductor-hicool
   :replaces_section_title:
   :noindex:

   HiCool

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HiCool.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hicool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicool/meta.yaml>`_

   HiCool provides an R interface to process and normalize Hi\-C paired\-end fastq reads into .\(m\)cool files. .\(m\)cool is a compact\, indexed HDF5 file format specifically tailored for efficiently storing HiC\-based data. On top of processing fastq reads\, HiCool provides a convenient reporting function to generate shareable reports summarizing Hi\-C experiments and including quality controls.


.. conda:package:: bioconductor-hicool

   |downloads_bioconductor-hicool| |docker_bioconductor-hicool|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biocio: ``>=1.16.0,<1.17.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-hicexperiment: ``>=1.6.0,<1.7.0``
   :depends bioconductor-interactionset: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-plotly: 
   :depends r-reticulate: 
   :depends r-rmarkdown: 
   :depends r-rmdformats: 
   :depends r-sessioninfo: 
   :depends r-stringr: 
   :depends r-vroom: 
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

      mamba install bioconductor-hicool

   and update with::

      mamba update bioconductor-hicool

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hicool

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicool:<tag>

   (see `bioconductor-hicool/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicool| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicool.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicool
   :alt:   (downloads)
.. |docker_bioconductor-hicool| image:: https://quay.io/repository/biocontainers/bioconductor-hicool/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicool
.. _`bioconductor-hicool/tags`: https://quay.io/repository/biocontainers/bioconductor-hicool?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicool";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicool/README.html
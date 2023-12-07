:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-megadepth'
.. highlight: bash

bioconductor-megadepth
======================

.. conda:recipe:: bioconductor-megadepth
   :replaces_section_title:
   :noindex:

   megadepth\: BigWig and BAM related utilities

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/megadepth.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-megadepth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-megadepth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-megadepth/meta.yaml>`_

   This package provides an R interface to Megadepth by Christopher Wilks available at https\:\/\/github.com\/ChristopherWilks\/megadepth. It is particularly useful for computing the coverage of a set of genomic regions across bigWig or BAM files. With this package\, you can build base\-pair coverage matrices for regions or annotations of your choice from BigWig files. Megadepth was used to create the raw files provided by https\:\/\/bioconductor.org\/packages\/recount3.


.. conda:package:: bioconductor-megadepth

   |downloads_bioconductor-megadepth| |docker_bioconductor-megadepth|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cmdfun: 
   :depends r-dplyr: 
   :depends r-fs: 
   :depends r-magrittr: 
   :depends r-readr: 
   :depends r-xfun: 
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

      mamba install bioconductor-megadepth

   and update with::

      mamba update bioconductor-megadepth

  To create a new environment, run::

      mamba create --name myenvname bioconductor-megadepth

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-megadepth:<tag>

   (see `bioconductor-megadepth/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-megadepth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-megadepth.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-megadepth
   :alt:   (downloads)
.. |docker_bioconductor-megadepth| image:: https://quay.io/repository/biocontainers/bioconductor-megadepth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-megadepth
.. _`bioconductor-megadepth/tags`: https://quay.io/repository/biocontainers/bioconductor-megadepth?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-megadepth";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-megadepth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-megadepth/README.html
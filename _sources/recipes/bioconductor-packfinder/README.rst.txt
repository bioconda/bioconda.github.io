:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-packfinder'
.. highlight: bash

bioconductor-packfinder
=======================

.. conda:recipe:: bioconductor-packfinder
   :replaces_section_title:
   :noindex:

   de novo Annotation of Pack\-TYPE Transposable Elements

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/packFinder.html
   :license: GPL-2
   :recipe: /`bioconductor-packfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-packfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-packfinder/meta.yaml>`_

   Algorithm and tools for in silico pack\-TYPE transposon discovery. Filters a given genome for properties unique to DNA transposons and provides tools for the investigation of returned matches. Sequences are input in DNAString format\, and ranges are returned as a dataframe \(in the format returned by as.dataframe\(GRanges\)\).


.. conda:package:: bioconductor-packfinder

   |downloads_bioconductor-packfinder| |docker_bioconductor-packfinder|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-kmer: 
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

      mamba install bioconductor-packfinder

   and update with::

      mamba update bioconductor-packfinder

  To create a new environment, run::

      mamba create --name myenvname bioconductor-packfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-packfinder:<tag>

   (see `bioconductor-packfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-packfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-packfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-packfinder
   :alt:   (downloads)
.. |docker_bioconductor-packfinder| image:: https://quay.io/repository/biocontainers/bioconductor-packfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-packfinder
.. _`bioconductor-packfinder/tags`: https://quay.io/repository/biocontainers/bioconductor-packfinder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-packfinder";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-packfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-packfinder/README.html
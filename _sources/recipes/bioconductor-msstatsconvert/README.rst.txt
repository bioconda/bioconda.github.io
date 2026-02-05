:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsconvert'
.. highlight: bash

bioconductor-msstatsconvert
===========================

.. conda:recipe:: bioconductor-msstatsconvert
   :replaces_section_title:
   :noindex:

   Import Data from Various Mass Spectrometry Signal Processing Tools to MSstats Format

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MSstatsConvert.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatsconvert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsconvert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsconvert/meta.yaml>`_

   MSstatsConvert provides tools for importing reports of Mass Spectrometry data processing tools into R format suitable for statistical analysis using the MSstats and MSstatsTMT packages.


.. conda:package:: bioconductor-msstatsconvert

   |downloads_bioconductor-msstatsconvert| |docker_bioconductor-msstatsconvert|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.3-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=19``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :depends r-log4r: 
   :depends r-rcpp: 
   :depends r-stringi: 
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

      mamba install bioconductor-msstatsconvert

   and update with::

      mamba update bioconductor-msstatsconvert

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msstatsconvert

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msstatsconvert:<tag>

   (see `bioconductor-msstatsconvert/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msstatsconvert| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsconvert.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsconvert
   :alt:   (downloads)
.. |docker_bioconductor-msstatsconvert| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsconvert/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsconvert
.. _`bioconductor-msstatsconvert/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsconvert?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatsconvert";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.3","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsconvert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsconvert/README.html
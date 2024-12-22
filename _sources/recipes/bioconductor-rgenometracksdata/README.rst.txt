:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgenometracksdata'
.. highlight: bash

bioconductor-rgenometracksdata
==============================

.. conda:recipe:: bioconductor-rgenometracksdata
   :replaces_section_title:
   :noindex:

   Demonstration Data from rGenomeTracks Package

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/rGenomeTracksData.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-rgenometracksdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgenometracksdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgenometracksdata/meta.yaml>`_

   rGenomeTracksData is a collection of data from pyGenomeTracks project. The purpose of this data is testing and demonstration of rGenomeTracks. This package include 14 sample file from different genomic and epigenomic file format.


.. conda:package:: bioconductor-rgenometracksdata

   |downloads_bioconductor-rgenometracksdata| |docker_bioconductor-rgenometracksdata|

   :versions:
      
      

      ``0.99.0-5``,  ``0.99.0-4``,  ``0.99.0-3``,  ``0.99.0-2``,  ``0.99.0-1``,  ``0.99.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
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

      mamba install bioconductor-rgenometracksdata

   and update with::

      mamba update bioconductor-rgenometracksdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rgenometracksdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgenometracksdata:<tag>

   (see `bioconductor-rgenometracksdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgenometracksdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgenometracksdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgenometracksdata
   :alt:   (downloads)
.. |docker_bioconductor-rgenometracksdata| image:: https://quay.io/repository/biocontainers/bioconductor-rgenometracksdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgenometracksdata
.. _`bioconductor-rgenometracksdata/tags`: https://quay.io/repository/biocontainers/bioconductor-rgenometracksdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgenometracksdata";
        var versions = ["0.99.0","0.99.0","0.99.0","0.99.0","0.99.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgenometracksdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgenometracksdata/README.html
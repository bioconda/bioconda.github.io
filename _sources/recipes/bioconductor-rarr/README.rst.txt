:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rarr'
.. highlight: bash

bioconductor-rarr
=================

.. conda:recipe:: bioconductor-rarr
   :replaces_section_title:
   :noindex:

   Read Zarr Files in R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Rarr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rarr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rarr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rarr/meta.yaml>`_

   The Zarr specification defines a format for chunked\, compressed\, N\-dimensional arrays.  It\'s design allows efficient access to subsets of the stored array\, and supports both local and cloud storage systems. Rarr aims to implement this specifcation in R with minimal reliance on an external tools or libraries.


.. conda:package:: bioconductor-rarr

   |downloads_bioconductor-rarr| |docker_bioconductor-rarr|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-paws.storage: 
   :depends r-r.utils: 
   :depends r-stringr: 
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

      mamba install bioconductor-rarr

   and update with::

      mamba update bioconductor-rarr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rarr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rarr:<tag>

   (see `bioconductor-rarr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rarr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rarr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rarr
   :alt:   (downloads)
.. |docker_bioconductor-rarr| image:: https://quay.io/repository/biocontainers/bioconductor-rarr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rarr
.. _`bioconductor-rarr/tags`: https://quay.io/repository/biocontainers/bioconductor-rarr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rarr";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rarr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rarr/README.html
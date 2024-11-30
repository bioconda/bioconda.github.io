:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rawrr'
.. highlight: bash

bioconductor-rawrr
==================

.. conda:recipe:: bioconductor-rawrr
   :replaces_section_title:
   :noindex:

   Direct Access to Orbitrap Data and Beyond

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/rawrr.html
   :license: GPL-3
   :recipe: /`bioconductor-rawrr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rawrr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rawrr/meta.yaml>`_

   This package wraps the functionality of the RawFileReader .NET assembly. Within the R environment\, spectra and chromatograms are represented by S3 objects. The package provides basic functions to download and install the required third\-party libraries. The package is developed\, tested\, and used at the Functional Genomics Center Zurich\, Switzerland.


.. conda:package:: bioconductor-rawrr

   |downloads_bioconductor-rawrr| |docker_bioconductor-rawrr|

   :versions:
      
      

      ``1.10.2-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends mono: ``>=4.5.1``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-rawrr

   and update with::

      mamba update bioconductor-rawrr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rawrr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rawrr:<tag>

   (see `bioconductor-rawrr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rawrr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rawrr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rawrr
   :alt:   (downloads)
.. |docker_bioconductor-rawrr| image:: https://quay.io/repository/biocontainers/bioconductor-rawrr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rawrr
.. _`bioconductor-rawrr/tags`: https://quay.io/repository/biocontainers/bioconductor-rawrr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rawrr";
        var versions = ["1.10.2","1.8.1","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rawrr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rawrr/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdr'
.. highlight: bash

bioconductor-gdr
================

.. conda:recipe:: bioconductor-gdr
   :replaces_section_title:
   :noindex:

   Umbrella package for R packages in the gDR suite

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/gDR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdr/meta.yaml>`_

   Package is a part of the gDR suite. It reexports functions from other packages in the gDR suite that contain critical processing functions and utilities. The vignette walks through the full processing pipeline for drug response analyses that the gDR suite offers.


.. conda:package:: bioconductor-gdr

   |downloads_bioconductor-gdr| |docker_bioconductor-gdr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-gdrcore: ``>=1.0.0,<1.1.0``
   :depends bioconductor-gdrimport: ``>=1.0.0,<1.1.0``
   :depends bioconductor-gdrutils: ``>=1.0.0,<1.1.0``
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

      mamba install bioconductor-gdr

   and update with::

      mamba update bioconductor-gdr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gdr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gdr:<tag>

   (see `bioconductor-gdr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gdr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdr
   :alt:   (downloads)
.. |docker_bioconductor-gdr| image:: https://quay.io/repository/biocontainers/bioconductor-gdr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdr
.. _`bioconductor-gdr/tags`: https://quay.io/repository/biocontainers/bioconductor-gdr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdr/README.html
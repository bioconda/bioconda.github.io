:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mobilitytransformr'
.. highlight: bash

bioconductor-mobilitytransformr
===============================

.. conda:recipe:: bioconductor-mobilitytransformr
   :replaces_section_title:
   :noindex:

   Effective mobility scale transformation of CE\-MS\(\/MS\) data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MobilityTransformR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mobilitytransformr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mobilitytransformr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mobilitytransformr/meta.yaml>`_

   MobilityTransformR collects a tool set for effective mobility scale transformation of CE\-MS\/MS data in order to increase reproducibility. It provides functionality to determine the migration times from mobility markers that have been added to the analysis and performs the transformation based on these markers. MobilityTransformR supports the conversion of numeric vectors\, Spectra\-objects\, and MSnOnDiskExp.


.. conda:package:: bioconductor-mobilitytransformr

   |downloads_bioconductor-mobilitytransformr| |docker_bioconductor-mobilitytransformr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-metabocoreutils: ``>=1.10.0,<1.11.0``
   :depends bioconductor-msnbase: ``>=2.28.0,<2.29.0``
   :depends bioconductor-spectra: ``>=1.12.0,<1.13.0``
   :depends bioconductor-xcms: ``>=4.0.0,<4.1.0``
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

      mamba install bioconductor-mobilitytransformr

   and update with::

      mamba update bioconductor-mobilitytransformr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mobilitytransformr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mobilitytransformr:<tag>

   (see `bioconductor-mobilitytransformr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mobilitytransformr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mobilitytransformr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mobilitytransformr
   :alt:   (downloads)
.. |docker_bioconductor-mobilitytransformr| image:: https://quay.io/repository/biocontainers/bioconductor-mobilitytransformr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mobilitytransformr
.. _`bioconductor-mobilitytransformr/tags`: https://quay.io/repository/biocontainers/bioconductor-mobilitytransformr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mobilitytransformr";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mobilitytransformr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mobilitytransformr/README.html
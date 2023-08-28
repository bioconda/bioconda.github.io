:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scthi.data'
.. highlight: bash

bioconductor-scthi.data
=======================

.. conda:recipe:: bioconductor-scthi.data
   :replaces_section_title:
   :noindex:

   The package contains examples of single cell data used in vignettes and examples of the scTHI package\; data contain both tumor cells and immune cells from public dataset of glioma

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/scTHI.data.html
   :license: GPL-2
   :recipe: /`bioconductor-scthi.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scthi.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scthi.data/meta.yaml>`_

   Data for the vignette and tutorial of the package scTHI.


.. conda:package:: bioconductor-scthi.data

   |downloads_bioconductor-scthi.data| |docker_bioconductor-scthi.data|

   :versions:
      
      

      ``1.12.0-0``,  ``1.9.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-scthi.data

   and update with::

      mamba update bioconductor-scthi.data

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scthi.data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scthi.data:<tag>

   (see `bioconductor-scthi.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scthi.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scthi.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scthi.data
   :alt:   (downloads)
.. |docker_bioconductor-scthi.data| image:: https://quay.io/repository/biocontainers/bioconductor-scthi.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scthi.data
.. _`bioconductor-scthi.data/tags`: https://quay.io/repository/biocontainers/bioconductor-scthi.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scthi.data";
        var versions = ["1.12.0","1.9.0","1.6.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scthi.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scthi.data/README.html
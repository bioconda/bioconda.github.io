:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mmappr2data'
.. highlight: bash

bioconductor-mmappr2data
========================

.. conda:recipe:: bioconductor-mmappr2data
   :replaces_section_title:
   :noindex:

   Sample Data for MMAPPR2

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/MMAPPR2data.html
   :license: GPL-3
   :recipe: /`bioconductor-mmappr2data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmappr2data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmappr2data/meta.yaml>`_

   Contains data for illustration purposes in the MMAPPR2 package\, namely simulated BAM files containing RNA\-Seq data for a mutation in the slc24a5 gene\, taken from the GRCz11 genome. Also contains reference sequence and annotation files for the region.


.. conda:package:: bioconductor-mmappr2data

   |downloads_bioconductor-mmappr2data| |docker_bioconductor-mmappr2data|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
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

      mamba install bioconductor-mmappr2data

   and update with::

      mamba update bioconductor-mmappr2data

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mmappr2data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mmappr2data:<tag>

   (see `bioconductor-mmappr2data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mmappr2data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmappr2data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mmappr2data
   :alt:   (downloads)
.. |docker_bioconductor-mmappr2data| image:: https://quay.io/repository/biocontainers/bioconductor-mmappr2data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmappr2data
.. _`bioconductor-mmappr2data/tags`: https://quay.io/repository/biocontainers/bioconductor-mmappr2data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mmappr2data";
        var versions = ["1.14.0","1.12.0","1.8.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmappr2data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmappr2data/README.html
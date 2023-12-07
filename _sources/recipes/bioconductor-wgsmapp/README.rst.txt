:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wgsmapp'
.. highlight: bash

bioconductor-wgsmapp
====================

.. conda:recipe:: bioconductor-wgsmapp
   :replaces_section_title:
   :noindex:

   Mappability tracks of Whole\-genome Sequencing from the ENCODE Project

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/WGSmapp.html
   :license: GPL-2
   :recipe: /`bioconductor-wgsmapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wgsmapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wgsmapp/meta.yaml>`_

   This package provides whole\-genome mappability tracks on human hg19\/hg38 assembly. We employed the 100\-mers mappability track from the ENCODE Project and computed weighted average of the mappability scores if multiple ENCODE regions overlap with the same bin. “Blacklist” bins\, including segmental duplication regions and gaps in reference assembly from telomere\, centromere\, and\/or heterochromatin regions are included. The dataset consists of three assembled .bam files of single\-cell whole genome sequencing from 10X for illustration purposes.


.. conda:package:: bioconductor-wgsmapp

   |downloads_bioconductor-wgsmapp| |docker_bioconductor-wgsmapp|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-wgsmapp

   and update with::

      mamba update bioconductor-wgsmapp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-wgsmapp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wgsmapp:<tag>

   (see `bioconductor-wgsmapp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wgsmapp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wgsmapp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wgsmapp
   :alt:   (downloads)
.. |docker_bioconductor-wgsmapp| image:: https://quay.io/repository/biocontainers/bioconductor-wgsmapp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wgsmapp
.. _`bioconductor-wgsmapp/tags`: https://quay.io/repository/biocontainers/bioconductor-wgsmapp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-wgsmapp";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wgsmapp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wgsmapp/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-jaspar2024'
.. highlight: bash

bioconductor-jaspar2024
=======================

.. conda:recipe:: bioconductor-jaspar2024
   :replaces_section_title:
   :noindex:

   Data package for JASPAR database \(version 2024\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/JASPAR2024.html
   :license: GPL-2
   :recipe: /`bioconductor-jaspar2024 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2024>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2024/meta.yaml>`_

   JASPAR \(https\:\/\/testjaspar.uio.no\/\) is a widely\-used open\-access database presenting manually curated high\-quality and non\-redundant DNA\-binding profiles for transcription factors \(TFs\) across taxa. In this 10th release and 20th\-anniversary update\, the CORE collection has expanded with 329 new profiles. We updated three existing profiles and provided orthogonal support for 72 profiles from the previous release UNVALIDATED collection. Altogether\, the JASPAR 2024 update provides a 20 percent increase in CORE profiles from the previous release. A trimming algorithm enhanced profiles by removing low information content flanking base pairs\, which were likely uninformative \(within the capacity of the PFM models\) for TFBS predictions and modelling TF\-DNA interactions. This release includes enhanced metadata\, featuring a refined classification for plant TFs structural DNA\-binding domains. The new JASPAR collections prompt updates to the genomic tracks of predicted TF\-binding sites in 8 organisms\, with human and mouse tracks available as native tracks in the UCSC Genome browser. All data are available through the JASPAR web interface and programmatically through its API and the updated Bioconductor and pyJASPAR packages. Finally\, a new TFBS extraction tool enables users to retrieve predicted JASPAR TFBSs intersecting their genomic regions of interest.


.. conda:package:: bioconductor-jaspar2024

   |downloads_bioconductor-jaspar2024| |docker_bioconductor-jaspar2024|

   :versions:
      
      

      ``0.99.6-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-jaspar2024

   and update with::

      mamba update bioconductor-jaspar2024

  To create a new environment, run::

      mamba create --name myenvname bioconductor-jaspar2024

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-jaspar2024:<tag>

   (see `bioconductor-jaspar2024/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-jaspar2024| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jaspar2024.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-jaspar2024
   :alt:   (downloads)
.. |docker_bioconductor-jaspar2024| image:: https://quay.io/repository/biocontainers/bioconductor-jaspar2024/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jaspar2024
.. _`bioconductor-jaspar2024/tags`: https://quay.io/repository/biocontainers/bioconductor-jaspar2024?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-jaspar2024";
        var versions = ["0.99.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jaspar2024/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jaspar2024/README.html
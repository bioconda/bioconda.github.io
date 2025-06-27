:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38'
.. highlight: bash

bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38
=========================================================

.. conda:recipe:: bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38
   :replaces_section_title:
   :noindex:

   Annotation for Illumina\'s EPIC v2.0 methylation arrays

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/IlluminaHumanMethylationEPICv2anno.20a1.hg38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38/meta.yaml>`_

   An annotation package for Illumina\'s EPIC v2.0 methylation arrays. The version 2 covers more than 935K CpG sites in the human genome hg38. It is an update of the original EPIC v1.0 array \(i.e.\, the 850K methylation array\).


.. conda:package:: bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38

   |downloads_bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38| |docker_bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20250625``
   :depends bioconductor-minfi: ``>=1.52.0,<1.53.0``
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

      mamba install bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38

   and update with::

      mamba update bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38

  To create a new environment, run::

      mamba create --name myenvname bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38:<tag>

   (see `bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38
.. _`bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38/README.html
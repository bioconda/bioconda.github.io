:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-smokingmouse'
.. highlight: bash

bioconductor-smokingmouse
=========================

.. conda:recipe:: bioconductor-smokingmouse
   :replaces_section_title:
   :noindex:

   Provides access to smokingMouse project data

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/smokingMouse.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-smokingmouse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smokingmouse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smokingmouse/meta.yaml>`_

   This is an ExperimentHub package that provides access to the data at the gene\, exon\, transcript and junction level used in the analyses of the smokingMouse project. See https\:\/\/github.com\/LieberInstitute\/smokingMouse\_Indirects. This datasets contain the expression counts of genes\, transcripts\, exons and exon\-exon junctions across 208 mice samples from pup and adult brains and adult blood. They also contain relevant information of these samples and features\, such as conditions\, QC metrics and if they were used after filtering steps and also if the features were differently expressed in the different experiments.


.. conda:package:: bioconductor-smokingmouse

   |downloads_bioconductor-smokingmouse| |docker_bioconductor-smokingmouse|

   :versions:
      
      

      ``1.0.0-0``

      

   
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

      mamba install bioconductor-smokingmouse

   and update with::

      mamba update bioconductor-smokingmouse

  To create a new environment, run::

      mamba create --name myenvname bioconductor-smokingmouse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-smokingmouse:<tag>

   (see `bioconductor-smokingmouse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-smokingmouse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-smokingmouse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-smokingmouse
   :alt:   (downloads)
.. |docker_bioconductor-smokingmouse| image:: https://quay.io/repository/biocontainers/bioconductor-smokingmouse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-smokingmouse
.. _`bioconductor-smokingmouse/tags`: https://quay.io/repository/biocontainers/bioconductor-smokingmouse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-smokingmouse";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-smokingmouse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-smokingmouse/README.html
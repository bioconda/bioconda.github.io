:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amplicontyper'
.. highlight: bash

amplicontyper
=============

.. conda:recipe:: amplicontyper
   :replaces_section_title:
   :noindex:

   Tool for training model and classifying reads from environmental ONT amplicon sequencing.

   :homepage: https://github.com/AntonS-bio/AmpliconTyper
   :license: GPL-3.0-only
   :recipe: /`amplicontyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplicontyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplicontyper/meta.yaml>`_

   Tool for training model and classifying reads from environmental ONT amplicon sequencing. 



.. conda:package:: amplicontyper

   |downloads_amplicontyper| |docker_amplicontyper|

   :versions:
      
      

      ``0.1.27-0``

      

   
   :depends biopython: ``>=1.78``
   :depends minimap2: 
   :depends numpy: ``>=1.20.*``
   :depends pandas: ``>=2.0.0``
   :depends pysam: ``>=0.22.0``
   :depends python: ``>=3.10``
   :depends requests: 
   :depends samtools: 
   :depends scikit-learn: ``>=1.3.*``
   :depends setuptools: 
   :depends tqdm: ``>=4.66.*``
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

      mamba install amplicontyper

   and update with::

      mamba update amplicontyper

  To create a new environment, run::

      mamba create --name myenvname amplicontyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amplicontyper:<tag>

   (see `amplicontyper/tags`_ for valid values for ``<tag>``)


.. |downloads_amplicontyper| image:: https://img.shields.io/conda/dn/bioconda/amplicontyper.svg?style=flat
   :target: https://anaconda.org/bioconda/amplicontyper
   :alt:   (downloads)
.. |docker_amplicontyper| image:: https://quay.io/repository/biocontainers/amplicontyper/status
   :target: https://quay.io/repository/biocontainers/amplicontyper
.. _`amplicontyper/tags`: https://quay.io/repository/biocontainers/amplicontyper?tab=tags


.. raw:: html

    <script>
        var package = "amplicontyper";
        var versions = ["0.1.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amplicontyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amplicontyper/README.html
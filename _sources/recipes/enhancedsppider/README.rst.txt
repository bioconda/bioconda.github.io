:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'enhancedsppider'
.. highlight: bash

enhancedsppider
===============

.. conda:recipe:: enhancedsppider
   :replaces_section_title:
   :noindex:

   Enhanced sppIDer for species identification from sequencing data

   :homepage: https://github.com/JohnnyChen1113/EnhancedSppIDer
   :license: MIT / MIT
   :recipe: /`enhancedsppider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enhancedsppider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enhancedsppider/meta.yaml>`_

   EnhancedSppIDer is a bioinformatics pipeline for species identification 
   and read extraction from Illumina\, PacBio\, and Oxford Nanopore sequencing data.



.. conda:package:: enhancedsppider

   |downloads_enhancedsppider| |docker_enhancedsppider|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends bedtools: 
   :depends biopython: 
   :depends bwa: 
   :depends python: ``>=3.8``
   :depends r-base: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends samtools: 
   :depends seqtk: 
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

      mamba install enhancedsppider

   and update with::

      mamba update enhancedsppider

  To create a new environment, run::

      mamba create --name myenvname enhancedsppider

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/enhancedsppider:<tag>

   (see `enhancedsppider/tags`_ for valid values for ``<tag>``)


.. |downloads_enhancedsppider| image:: https://img.shields.io/conda/dn/bioconda/enhancedsppider.svg?style=flat
   :target: https://anaconda.org/bioconda/enhancedsppider
   :alt:   (downloads)
.. |docker_enhancedsppider| image:: https://quay.io/repository/biocontainers/enhancedsppider/status
   :target: https://quay.io/repository/biocontainers/enhancedsppider
.. _`enhancedsppider/tags`: https://quay.io/repository/biocontainers/enhancedsppider?tab=tags


.. raw:: html

    <script>
        var package = "enhancedsppider";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/enhancedsppider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/enhancedsppider/README.html
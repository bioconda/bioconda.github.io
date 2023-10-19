:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'talon'
.. highlight: bash

talon
=====

.. conda:recipe:: talon
   :replaces_section_title:
   :noindex:

   TALON is a Python package for identifying and quantifying known and novel 
   genes\/isoforms in long\-read transcriptome data sets. TALON is 
   technology\-agnostic in that it works from mapped SAM files\, 
   allowing data from different sequencing platforms 
   \(i.e. PacBio and Oxford Nanopore\) to be analyzed side by side.

   :homepage: https://github.com/mortazavilab/TALON
   :license: MIT / MIT
   :recipe: /`talon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/talon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/talon/meta.yaml>`_

   


.. conda:package:: talon

   |downloads_talon| |docker_talon|

   :versions:
      
      

      ``6.0.1-0``,  ``6.0-0``,  ``5.0-0``,  ``v5.0-1``,  ``v5.0-0``

      

   
   :depends bamread: ``>=0.0.11``
   :depends pandas: 
   :depends pybedtools: 
   :depends pyfaidx: 
   :depends pyranges: 
   :depends pysam: ``>=0.15.4``
   :depends python: ``>=3.6,<3.8``
   :depends scanpy: 
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

      mamba install talon

   and update with::

      mamba update talon

  To create a new environment, run::

      mamba create --name myenvname talon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/talon:<tag>

   (see `talon/tags`_ for valid values for ``<tag>``)


.. |downloads_talon| image:: https://img.shields.io/conda/dn/bioconda/talon.svg?style=flat
   :target: https://anaconda.org/bioconda/talon
   :alt:   (downloads)
.. |docker_talon| image:: https://quay.io/repository/biocontainers/talon/status
   :target: https://quay.io/repository/biocontainers/talon
.. _`talon/tags`: https://quay.io/repository/biocontainers/talon?tab=tags


.. raw:: html

    <script>
        var package = "talon";
        var versions = ["6.0.1","6.0","5.0","v5.0","v5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/talon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/talon/README.html
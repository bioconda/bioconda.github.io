:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'assemblytics'
.. highlight: bash

assemblytics
============

.. conda:recipe:: assemblytics
   :replaces_section_title:
   :noindex:

   analyze a genome assembly by comparing it to a reference genome

   :homepage: http://assemblytics.com/
   :license: MIT
   :recipe: /`assemblytics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblytics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblytics/meta.yaml>`_

   Assemblytics detects and analyzes variants from a de novo genome assembly aligned to a reference genome. It incorporates a unique anchor filtering approach to increase robustness to repetitive elements and identifies six classes of variants based on their distinct alignment signatures. Assemblytics can be applied both to comparing aberrant genomes\, such as human cancers\, to a reference\, or to identify differences between related species.


.. conda:package:: assemblytics

   |downloads_assemblytics| |docker_assemblytics|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2-0``,  ``1.1-0``

      

   
   :depends mummer: 
   :depends numpy: 
   :depends python: 
   :depends r-base: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
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

      mamba install assemblytics

   and update with::

      mamba update assemblytics

  To create a new environment, run::

      mamba create --name myenvname assemblytics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/assemblytics:<tag>

   (see `assemblytics/tags`_ for valid values for ``<tag>``)


.. |downloads_assemblytics| image:: https://img.shields.io/conda/dn/bioconda/assemblytics.svg?style=flat
   :target: https://anaconda.org/bioconda/assemblytics
   :alt:   (downloads)
.. |docker_assemblytics| image:: https://quay.io/repository/biocontainers/assemblytics/status
   :target: https://quay.io/repository/biocontainers/assemblytics
.. _`assemblytics/tags`: https://quay.io/repository/biocontainers/assemblytics?tab=tags


.. raw:: html

    <script>
        var package = "assemblytics";
        var versions = ["1.2.1","1.2","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assemblytics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assemblytics/README.html
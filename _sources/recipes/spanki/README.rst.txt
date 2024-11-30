:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spanki'
.. highlight: bash

spanki
======

.. conda:recipe:: spanki
   :replaces_section_title:
   :noindex:

   Spanki is a set of tools to facilitate analysis of alternative splicing from RNA\-Seq data. Spanki compiles quantitative and qualitative information about junction alignments from input BAM files\, and analyzes junction\-level splicing along with pairwise\-defined splicing events. A simulator is also included to evaluate junction detection performance.

   :homepage: http://www.cbcb.umd.edu/software/spanki/
   :license: GPLv3
   :recipe: /`spanki <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spanki>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spanki/meta.yaml>`_

   


.. conda:package:: spanki

   |downloads_spanki| |docker_spanki|

   :versions:
      
      

      ``0.5.1-1``,  ``0.5.1-0``

      

   
   :depends biopython: 
   :depends cufflinks: 
   :depends fisher: 
   :depends numpy: 
   :depends pyfasta: 
   :depends pysam: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends samtools: 
   :depends statsmodels: 
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

      mamba install spanki

   and update with::

      mamba update spanki

  To create a new environment, run::

      mamba create --name myenvname spanki

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spanki:<tag>

   (see `spanki/tags`_ for valid values for ``<tag>``)


.. |downloads_spanki| image:: https://img.shields.io/conda/dn/bioconda/spanki.svg?style=flat
   :target: https://anaconda.org/bioconda/spanki
   :alt:   (downloads)
.. |docker_spanki| image:: https://quay.io/repository/biocontainers/spanki/status
   :target: https://quay.io/repository/biocontainers/spanki
.. _`spanki/tags`: https://quay.io/repository/biocontainers/spanki?tab=tags


.. raw:: html

    <script>
        var package = "spanki";
        var versions = ["0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spanki/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spanki/README.html
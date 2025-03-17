:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lassaseq'
.. highlight: bash

lassaseq
========

.. conda:recipe:: lassaseq
   :replaces_section_title:
   :noindex:

   Tool for downloading Lassa virus sequences

   :homepage: https://github.com/DaanJansen94/LassaSeq
   :documentation: https://github.com/DaanJansen94/LassaSeq/blob/master/README.md
   
   :license: GPL / GPL-3.0
   :recipe: /`lassaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lassaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lassaseq/meta.yaml>`_

   LassaSeq is a command\-line tool that simplifies the process of analyzing Lassa virus sequences. 
   It automates the complete workflow from downloading sequences to creating phylogenetic trees\, 
   with special handling for Lassa\'s bi\-segmented genome.



.. conda:package:: lassaseq

   |downloads_lassaseq| |docker_lassaseq|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends biopython: ``>=1.80``
   :depends iqtree: 
   :depends mafft: 
   :depends numpy: ``>=1.20.0``
   :depends python: ``>=3.9``
   :depends requests: ``>=2.25.0``
   :depends tqdm: ``>=4.50.0``
   :depends trimal: 
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

      mamba install lassaseq

   and update with::

      mamba update lassaseq

  To create a new environment, run::

      mamba create --name myenvname lassaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lassaseq:<tag>

   (see `lassaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_lassaseq| image:: https://img.shields.io/conda/dn/bioconda/lassaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/lassaseq
   :alt:   (downloads)
.. |docker_lassaseq| image:: https://quay.io/repository/biocontainers/lassaseq/status
   :target: https://quay.io/repository/biocontainers/lassaseq
.. _`lassaseq/tags`: https://quay.io/repository/biocontainers/lassaseq?tab=tags


.. raw:: html

    <script>
        var package = "lassaseq";
        var versions = ["0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lassaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lassaseq/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lassensus'
.. highlight: bash

lassensus
=========

.. conda:recipe:: lassensus
   :replaces_section_title:
   :noindex:

   Tool for creating Lassa virus consensus sequences

   :homepage: https://github.com/DaanJansen94/lassensus
   :documentation: https://github.com/DaanJansen94/lassensus/blob/main/README.md
   
   :license: GPL / GPL-3.0
   :recipe: /`lassensus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lassensus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lassensus/meta.yaml>`_

   Lassensus is a command\-line tool for creating consensus sequences from Lassa virus sequencing data.
   It provides a streamlined workflow for processing raw sequencing data into high\-quality consensus sequences.



.. conda:package:: lassensus

   |downloads_lassensus| |docker_lassensus|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends biopython: ``>=1.80``
   :depends ivar: 
   :depends lassaseq: 
   :depends medaka: 
   :depends minimap2: 
   :depends numpy: ``>=1.20.0``
   :depends pandas: 
   :depends python: ``>=3.11``
   :depends requests: ``>=2.25.0``
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

      mamba install lassensus

   and update with::

      mamba update lassensus

  To create a new environment, run::

      mamba create --name myenvname lassensus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lassensus:<tag>

   (see `lassensus/tags`_ for valid values for ``<tag>``)


.. |downloads_lassensus| image:: https://img.shields.io/conda/dn/bioconda/lassensus.svg?style=flat
   :target: https://anaconda.org/bioconda/lassensus
   :alt:   (downloads)
.. |docker_lassensus| image:: https://quay.io/repository/biocontainers/lassensus/status
   :target: https://quay.io/repository/biocontainers/lassensus
.. _`lassensus/tags`: https://quay.io/repository/biocontainers/lassensus?tab=tags


.. raw:: html

    <script>
        var package = "lassensus";
        var versions = ["0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lassensus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lassensus/README.html
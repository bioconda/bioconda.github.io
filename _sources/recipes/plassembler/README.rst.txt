:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plassembler'
.. highlight: bash

plassembler
===========

.. conda:recipe:: plassembler
   :replaces_section_title:
   :noindex:

   Quickly and accurately assemble plasmids in hybrid sequenced bacterial isolates

   :homepage: https://github.com/gbouras13/plassembler
   :license: MIT
   :recipe: /`plassembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plassembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plassembler/meta.yaml>`_

   


.. conda:package:: plassembler

   |downloads_plassembler| |docker_plassembler|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends biopython: ``>=1.76``
   :depends chopper: ``>=0.5.0``
   :depends click: ``>=8.0.0``
   :depends fastp: ``>=0.18.0``
   :depends flye: ``>=2.9``
   :depends loguru: ``>=0.5.3``
   :depends mash: ``>=2.2``
   :depends minimap2: ``>=2.11``
   :depends pandas: ``>=1.4.2``
   :depends pysam: ``>=0.16.0``
   :depends python: ``>=3.8,<3.10``
   :depends pyyaml: ``>=6.0``
   :depends raven-assembler: ``>=1.8``
   :depends samtools: ``>=0.15.0``
   :depends unicycler: ``>=0.4.8``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install plassembler

   and update with::

      mamba update plassembler

  To create a new environment, run::

      mamba create --name myenvname plassembler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plassembler:<tag>

   (see `plassembler/tags`_ for valid values for ``<tag>``)


.. |downloads_plassembler| image:: https://img.shields.io/conda/dn/bioconda/plassembler.svg?style=flat
   :target: https://anaconda.org/bioconda/plassembler
   :alt:   (downloads)
.. |docker_plassembler| image:: https://quay.io/repository/biocontainers/plassembler/status
   :target: https://quay.io/repository/biocontainers/plassembler
.. _`plassembler/tags`: https://quay.io/repository/biocontainers/plassembler?tab=tags


.. raw:: html

    <script>
        var package = "plassembler";
        var versions = ["1.1.0","1.0.0","1.0.0","0.1.5","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plassembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plassembler/README.html
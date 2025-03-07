:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ebolaseq'
.. highlight: bash

ebolaseq
========

.. conda:recipe:: ebolaseq
   :replaces_section_title:
   :noindex:

   Tool for downloading and analyzing Ebola virus sequences

   :homepage: https://github.com/DaanJansen94/ebolaseq
   :documentation: https://github.com/DaanJansen94/ebolaseq/blob/master/README.md
   
   :license: GPL / GPL-3.0-or-later
   :recipe: /`ebolaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebolaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebolaseq/meta.yaml>`_

   Ebolaseq is a command\-line tool that simplifies the process of analyzing Ebola virus sequences. 
   It automates the complete workflow from downloading sequences to creating phylogenetic trees.



.. conda:package:: ebolaseq

   |downloads_ebolaseq| |docker_ebolaseq|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends biopython: ``>=1.80``
   :depends iqtree: 
   :depends mafft: 
   :depends numpy: ``>=1.20.0``
   :depends python: ``>=3.9``
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

      mamba install ebolaseq

   and update with::

      mamba update ebolaseq

  To create a new environment, run::

      mamba create --name myenvname ebolaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ebolaseq:<tag>

   (see `ebolaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_ebolaseq| image:: https://img.shields.io/conda/dn/bioconda/ebolaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/ebolaseq
   :alt:   (downloads)
.. |docker_ebolaseq| image:: https://quay.io/repository/biocontainers/ebolaseq/status
   :target: https://quay.io/repository/biocontainers/ebolaseq
.. _`ebolaseq/tags`: https://quay.io/repository/biocontainers/ebolaseq?tab=tags


.. raw:: html

    <script>
        var package = "ebolaseq";
        var versions = ["0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ebolaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ebolaseq/README.html
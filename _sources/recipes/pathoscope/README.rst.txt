:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathoscope'
.. highlight: bash

pathoscope
==========

.. conda:recipe:: pathoscope
   :replaces_section_title:
   :noindex:

   Species identification and strain attribution with unassembled sequencing data

   :homepage: https://github.com/PathoScope/PathoScope
   :license: GPLv3
   :recipe: /`pathoscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathoscope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathoscope/meta.yaml>`_

   


.. conda:package:: pathoscope

   |downloads_pathoscope| |docker_pathoscope|

   :versions:
      
      

      ``2.0.7-1``,  ``2.0.7-0``,  ``2.0.6-1``,  ``2.0.6-0``

      

   
   :depends bowtie2: 
   :depends python: ``<3``
   :depends samtools: ``<1.0``
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

      mamba install pathoscope

   and update with::

      mamba update pathoscope

  To create a new environment, run::

      mamba create --name myenvname pathoscope

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pathoscope:<tag>

   (see `pathoscope/tags`_ for valid values for ``<tag>``)


.. |downloads_pathoscope| image:: https://img.shields.io/conda/dn/bioconda/pathoscope.svg?style=flat
   :target: https://anaconda.org/bioconda/pathoscope
   :alt:   (downloads)
.. |docker_pathoscope| image:: https://quay.io/repository/biocontainers/pathoscope/status
   :target: https://quay.io/repository/biocontainers/pathoscope
.. _`pathoscope/tags`: https://quay.io/repository/biocontainers/pathoscope?tab=tags


.. raw:: html

    <script>
        var package = "pathoscope";
        var versions = ["2.0.7","2.0.7","2.0.6","2.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathoscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathoscope/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stecfinder'
.. highlight: bash

stecfinder
==========

.. conda:recipe:: stecfinder
   :replaces_section_title:
   :noindex:

   Cluster informed Shigatoxin producing E. coli \(STEC\) serotyping tool from Illumina reads and assemblies

   :homepage: https://github.com/LanLab/STECFinder
   :license: GPL3
   :recipe: /`stecfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stecfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stecfinder/meta.yaml>`_

   


.. conda:package:: stecfinder

   |downloads_stecfinder| |docker_stecfinder|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends blast: ``>=2.9.0``
   :depends kma: ``>=1.3.15``
   :depends python: ``>=3.7``
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

      mamba install stecfinder

   and update with::

      mamba update stecfinder

  To create a new environment, run::

      mamba create --name myenvname stecfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stecfinder:<tag>

   (see `stecfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_stecfinder| image:: https://img.shields.io/conda/dn/bioconda/stecfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/stecfinder
   :alt:   (downloads)
.. |docker_stecfinder| image:: https://quay.io/repository/biocontainers/stecfinder/status
   :target: https://quay.io/repository/biocontainers/stecfinder
.. _`stecfinder/tags`: https://quay.io/repository/biocontainers/stecfinder?tab=tags


.. raw:: html

    <script>
        var package = "stecfinder";
        var versions = ["1.1.1","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stecfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stecfinder/README.html
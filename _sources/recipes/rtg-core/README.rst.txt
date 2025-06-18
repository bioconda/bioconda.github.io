:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rtg-core'
.. highlight: bash

rtg-core
========

.. conda:recipe:: rtg-core
   :replaces_section_title:
   :noindex:

   RealTimeGenomics Core \-\- Software for alignment and analysis of next\-gen sequencing data.

   :homepage: https://github.com/RealTimeGenomics/rtg-core
   :documentation: https://realtimegenomics.github.io/rtg-core/index.html
   
   :license: BSD / BSD-2-Clause
   :recipe: /`rtg-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtg-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtg-core/meta.yaml>`_
   :links: biotools: :biotools:`rtg_core`

   


.. conda:package:: rtg-core

   |downloads_rtg-core| |docker_rtg-core|

   :versions:
      
      

      ``3.13-0``

      

   
   :depends font-ttf-dejavu-sans-mono: 
   :depends fontconfig: 
   :depends openjdk: 
   :depends zlib: 
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

      mamba install rtg-core

   and update with::

      mamba update rtg-core

  To create a new environment, run::

      mamba create --name myenvname rtg-core

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rtg-core:<tag>

   (see `rtg-core/tags`_ for valid values for ``<tag>``)


.. |downloads_rtg-core| image:: https://img.shields.io/conda/dn/bioconda/rtg-core.svg?style=flat
   :target: https://anaconda.org/bioconda/rtg-core
   :alt:   (downloads)
.. |docker_rtg-core| image:: https://quay.io/repository/biocontainers/rtg-core/status
   :target: https://quay.io/repository/biocontainers/rtg-core
.. _`rtg-core/tags`: https://quay.io/repository/biocontainers/rtg-core?tab=tags


.. raw:: html

    <script>
        var package = "rtg-core";
        var versions = ["3.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rtg-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rtg-core/README.html
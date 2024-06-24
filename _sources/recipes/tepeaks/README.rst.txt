:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tepeaks'
.. highlight: bash

tepeaks
=======

.. conda:recipe:: tepeaks
   :replaces_section_title:
   :noindex:

   Package for including repetitive regions in peak calling from ChIP\-seq datasets.

   :homepage: http://hammelllab.labsites.cshl.edu/software/#TEpeaks
   :license: GPL3 / GPL3
   :recipe: /`tepeaks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tepeaks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tepeaks/meta.yaml>`_

   


.. conda:package:: tepeaks

   |downloads_tepeaks| |docker_tepeaks|

   :versions:
      
      

      ``0.1-6``,  ``0.1-5``,  ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends boost-cpp: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends ncurses: ``>=6.5,<7.0a0``
   :depends zlib: 
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

      mamba install tepeaks

   and update with::

      mamba update tepeaks

  To create a new environment, run::

      mamba create --name myenvname tepeaks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tepeaks:<tag>

   (see `tepeaks/tags`_ for valid values for ``<tag>``)


.. |downloads_tepeaks| image:: https://img.shields.io/conda/dn/bioconda/tepeaks.svg?style=flat
   :target: https://anaconda.org/bioconda/tepeaks
   :alt:   (downloads)
.. |docker_tepeaks| image:: https://quay.io/repository/biocontainers/tepeaks/status
   :target: https://quay.io/repository/biocontainers/tepeaks
.. _`tepeaks/tags`: https://quay.io/repository/biocontainers/tepeaks?tab=tags


.. raw:: html

    <script>
        var package = "tepeaks";
        var versions = ["0.1","0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tepeaks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tepeaks/README.html
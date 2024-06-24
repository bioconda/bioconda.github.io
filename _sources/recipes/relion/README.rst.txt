:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'relion'
.. highlight: bash

relion
======

.. conda:recipe:: relion
   :replaces_section_title:
   :noindex:

   Image\-processing software for cryo\-electron microscopy

   :homepage: https://github.com/3dem/relion
   :license: GPL / GPLv2
   :recipe: /`relion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/relion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/relion/meta.yaml>`_

   


.. conda:package:: relion

   |downloads_relion| |docker_relion|

   :versions:
      
      

      ``4.0.1-3``,  ``4.0.1-2``,  ``4.0.1-1``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.1.3-0``

      

   
   :depends fftw: ``>=3.3.10,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libpng: ``>=1.6.43,<1.7.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libtiff: ``>=4.6.0,<4.7.0a0``
   :depends openmpi: ``>=4.1.6,<5.0a0``
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

      mamba install relion

   and update with::

      mamba update relion

  To create a new environment, run::

      mamba create --name myenvname relion

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/relion:<tag>

   (see `relion/tags`_ for valid values for ``<tag>``)


.. |downloads_relion| image:: https://img.shields.io/conda/dn/bioconda/relion.svg?style=flat
   :target: https://anaconda.org/bioconda/relion
   :alt:   (downloads)
.. |docker_relion| image:: https://quay.io/repository/biocontainers/relion/status
   :target: https://quay.io/repository/biocontainers/relion
.. _`relion/tags`: https://quay.io/repository/biocontainers/relion?tab=tags


.. raw:: html

    <script>
        var package = "relion";
        var versions = ["4.0.1","4.0.1","4.0.1","4.0.1","4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/relion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/relion/README.html
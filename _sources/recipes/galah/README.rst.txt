:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galah'
.. highlight: bash

galah
=====

.. conda:recipe:: galah
   :replaces_section_title:
   :noindex:

   Galah aims to be a more scalable metagenome assembled genome \(MAG\) dereplication method.

   :homepage: https://github.com/wwood/galah
   :license: GPL3 / GPL-3.0-only
   :recipe: /`galah <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galah>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galah/meta.yaml>`_

   


.. conda:package:: galah

   |downloads_galah| |docker_galah|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends dashing: ``0.4.0``
   :depends fastani: ``1.31``
   :depends libgcc-ng: ``>=12``
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

      mamba install galah

   and update with::

      mamba update galah

  To create a new environment, run::

      mamba create --name myenvname galah

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galah:<tag>

   (see `galah/tags`_ for valid values for ``<tag>``)


.. |downloads_galah| image:: https://img.shields.io/conda/dn/bioconda/galah.svg?style=flat
   :target: https://anaconda.org/bioconda/galah
   :alt:   (downloads)
.. |docker_galah| image:: https://quay.io/repository/biocontainers/galah/status
   :target: https://quay.io/repository/biocontainers/galah
.. _`galah/tags`: https://quay.io/repository/biocontainers/galah?tab=tags


.. raw:: html

    <script>
        var package = "galah";
        var versions = ["0.4.0","0.3.1","0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galah/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galah/README.html
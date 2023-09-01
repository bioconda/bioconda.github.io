:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flock'
.. highlight: bash

flock
=====

.. conda:recipe:: flock
   :replaces_section_title:
   :noindex:

   FLOCK \- Flow Cytometry Clustering without K.

   :homepage: https://sourceforge.net/projects/immportflock/
   :license: unknown
   :recipe: /`flock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flock/meta.yaml>`_

   


.. conda:package:: flock

   |downloads_flock| |docker_flock|

   :versions:
      
      

      ``1.0-2``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=4.9``
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

      mamba install flock

   and update with::

      mamba update flock

  To create a new environment, run::

      mamba create --name myenvname flock

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flock:<tag>

   (see `flock/tags`_ for valid values for ``<tag>``)


.. |downloads_flock| image:: https://img.shields.io/conda/dn/bioconda/flock.svg?style=flat
   :target: https://anaconda.org/bioconda/flock
   :alt:   (downloads)
.. |docker_flock| image:: https://quay.io/repository/biocontainers/flock/status
   :target: https://quay.io/repository/biocontainers/flock
.. _`flock/tags`: https://quay.io/repository/biocontainers/flock?tab=tags


.. raw:: html

    <script>
        var package = "flock";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flock/README.html
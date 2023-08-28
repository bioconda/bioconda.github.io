:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rock'
.. highlight: bash

rock
====

.. conda:recipe:: rock
   :replaces_section_title:
   :noindex:

   ROCK \- Reducing Over\-Covering K\-mers

   :homepage: https://gitlab.pasteur.fr/vlegrand/ROCK
   :license: AGPL-3.0
   :recipe: /`rock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rock/meta.yaml>`_

   


.. conda:package:: rock

   |downloads_rock| |docker_rock|

   :versions:
      
      

      ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install rock

   and update with::

      mamba update rock

  To create a new environment, run::

      mamba create --name myenvname rock

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rock:<tag>

   (see `rock/tags`_ for valid values for ``<tag>``)


.. |downloads_rock| image:: https://img.shields.io/conda/dn/bioconda/rock.svg?style=flat
   :target: https://anaconda.org/bioconda/rock
   :alt:   (downloads)
.. |docker_rock| image:: https://quay.io/repository/biocontainers/rock/status
   :target: https://quay.io/repository/biocontainers/rock
.. _`rock/tags`: https://quay.io/repository/biocontainers/rock?tab=tags


.. raw:: html

    <script>
        var package = "rock";
        var versions = ["2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rock/README.html
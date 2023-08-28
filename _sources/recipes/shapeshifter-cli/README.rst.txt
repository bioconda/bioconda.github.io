:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shapeshifter-cli'
.. highlight: bash

shapeshifter-cli
================

.. conda:recipe:: shapeshifter-cli
   :replaces_section_title:
   :noindex:

   A command\-line tool for transforming large data sets

   :homepage: https://github.com/srp33/ShapeShifter-CLI
   :license: MIT
   :recipe: /`shapeshifter-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeshifter-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shapeshifter-cli/meta.yaml>`_

   


.. conda:package:: shapeshifter-cli

   |downloads_shapeshifter-cli| |docker_shapeshifter-cli|

   :versions:
      
      

      ``1.0.0-0``,  ``0.0.3-0``

      

   
   :depends pandas: 
   :depends python: ``>3``
   :depends shapeshifter: 
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

      mamba install shapeshifter-cli

   and update with::

      mamba update shapeshifter-cli

  To create a new environment, run::

      mamba create --name myenvname shapeshifter-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shapeshifter-cli:<tag>

   (see `shapeshifter-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_shapeshifter-cli| image:: https://img.shields.io/conda/dn/bioconda/shapeshifter-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/shapeshifter-cli
   :alt:   (downloads)
.. |docker_shapeshifter-cli| image:: https://quay.io/repository/biocontainers/shapeshifter-cli/status
   :target: https://quay.io/repository/biocontainers/shapeshifter-cli
.. _`shapeshifter-cli/tags`: https://quay.io/repository/biocontainers/shapeshifter-cli?tab=tags


.. raw:: html

    <script>
        var package = "shapeshifter-cli";
        var versions = ["1.0.0","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shapeshifter-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shapeshifter-cli/README.html
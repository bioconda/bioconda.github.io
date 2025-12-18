:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'portello'
.. highlight: bash

portello
========

.. conda:recipe:: portello
   :replaces_section_title:
   :noindex:

   Transfer HiFi read mappings from their own assembly contigs to a standard reference

   :homepage: https://github.com/PacificBiosciences/portello
   :license: Pacific Biosciences Software License Agreement
   :recipe: /`portello <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/portello>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/portello/meta.yaml>`_

   


.. conda:package:: portello

   |downloads_portello| |docker_portello|

   :versions:
      
      

      ``0.6.1-0``

      

   
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

      mamba install portello

   and update with::

      mamba update portello

  To create a new environment, run::

      mamba create --name myenvname portello

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/portello:<tag>

   (see `portello/tags`_ for valid values for ``<tag>``)


.. |downloads_portello| image:: https://img.shields.io/conda/dn/bioconda/portello.svg?style=flat
   :target: https://anaconda.org/bioconda/portello
   :alt:   (downloads)
.. |docker_portello| image:: https://quay.io/repository/biocontainers/portello/status
   :target: https://quay.io/repository/biocontainers/portello
.. _`portello/tags`: https://quay.io/repository/biocontainers/portello?tab=tags


.. raw:: html

    <script>
        var package = "portello";
        var versions = ["0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/portello/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/portello/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plascope'
.. highlight: bash

plascope
========

.. conda:recipe:: plascope
   :replaces_section_title:
   :noindex:

   PlaScope is a targeted approach to assess the plasmidome of bacteria.

   :homepage: https://github.com/labgem/PlaScope
   :license: GPL / GPL (>=3)
   :recipe: /`plascope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plascope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plascope/meta.yaml>`_

   


.. conda:package:: plascope

   |downloads_plascope| |docker_plascope|

   :versions:
      
      

      ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-1``,  ``1.3-0``

      

   
   :depends centrifuge: ``1.0.3``
   :depends spades: ``>=3.10.1``
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

      mamba install plascope

   and update with::

      mamba update plascope

  To create a new environment, run::

      mamba create --name myenvname plascope

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plascope:<tag>

   (see `plascope/tags`_ for valid values for ``<tag>``)


.. |downloads_plascope| image:: https://img.shields.io/conda/dn/bioconda/plascope.svg?style=flat
   :target: https://anaconda.org/bioconda/plascope
   :alt:   (downloads)
.. |docker_plascope| image:: https://quay.io/repository/biocontainers/plascope/status
   :target: https://quay.io/repository/biocontainers/plascope
.. _`plascope/tags`: https://quay.io/repository/biocontainers/plascope?tab=tags


.. raw:: html

    <script>
        var package = "plascope";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plascope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plascope/README.html
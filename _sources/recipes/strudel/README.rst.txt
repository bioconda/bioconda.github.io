:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strudel'
.. highlight: bash

strudel
=======

.. conda:recipe:: strudel
   :replaces_section_title:
   :noindex:

   Strudel is a graphical tool for visualizing genetic and physical maps of genomes for comparative purposes.

   :homepage: https://ics.hutton.ac.uk/strudel
   :license: BSD-2-Clause
   :recipe: /`strudel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strudel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strudel/meta.yaml>`_

   


.. conda:package:: strudel

   |downloads_strudel| |docker_strudel|

   :versions:
      
      

      ``1.15.08.25-1``,  ``1.15.08.25-0``

      

   
   :depends openjdk: ``>=6,<9``
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

      mamba install strudel

   and update with::

      mamba update strudel

  To create a new environment, run::

      mamba create --name myenvname strudel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strudel:<tag>

   (see `strudel/tags`_ for valid values for ``<tag>``)


.. |downloads_strudel| image:: https://img.shields.io/conda/dn/bioconda/strudel.svg?style=flat
   :target: https://anaconda.org/bioconda/strudel
   :alt:   (downloads)
.. |docker_strudel| image:: https://quay.io/repository/biocontainers/strudel/status
   :target: https://quay.io/repository/biocontainers/strudel
.. _`strudel/tags`: https://quay.io/repository/biocontainers/strudel?tab=tags


.. raw:: html

    <script>
        var package = "strudel";
        var versions = ["1.15.08.25","1.15.08.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strudel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strudel/README.html
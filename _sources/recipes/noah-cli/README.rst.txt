:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'noah-cli'
.. highlight: bash

noah-cli
========

.. conda:recipe:: noah-cli
   :replaces_section_title:
   :noindex:

   a project management tool for reproducible\, portable\, and streamlined bioinformatics analysis

   :homepage: https://github.com/raymond-u/noah-cli
   :license: MIT
   :recipe: /`noah-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/noah-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/noah-cli/meta.yaml>`_

   Noah is a project management tool specifically designed for bioinformatics projects. It enables reproducible analysis of large datasets\, making it effortless to share and collaborate with others.



.. conda:package:: noah-cli

   |downloads_noah-cli| |docker_noah-cli|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends dacite: ``>=1.8.0,<2.0.0``
   :depends fabric: ``>=3.1.0,<4.0.0``
   :depends ordered-set: ``>=4.1.0,<5.0.0``
   :depends pysradb: ``>=2.1.0,<3.0.0``
   :depends python: ``>=3.11.0,<4.0.0``
   :depends requests: ``>=2.31.0,<3.0.0``
   :depends ruamel.yaml: ``>=0.17.0,<0.18.0``
   :depends typer: ``>=0.9.0,<0.10.0``
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

      mamba install noah-cli

   and update with::

      mamba update noah-cli

  To create a new environment, run::

      mamba create --name myenvname noah-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/noah-cli:<tag>

   (see `noah-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_noah-cli| image:: https://img.shields.io/conda/dn/bioconda/noah-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/noah-cli
   :alt:   (downloads)
.. |docker_noah-cli| image:: https://quay.io/repository/biocontainers/noah-cli/status
   :target: https://quay.io/repository/biocontainers/noah-cli
.. _`noah-cli/tags`: https://quay.io/repository/biocontainers/noah-cli?tab=tags


.. raw:: html

    <script>
        var package = "noah-cli";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/noah-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/noah-cli/README.html
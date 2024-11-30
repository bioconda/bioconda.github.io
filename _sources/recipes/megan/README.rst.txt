:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megan'
.. highlight: bash

megan
=====

.. conda:recipe:: megan
   :replaces_section_title:
   :noindex:

   A tool for studying the taxonomic content of a set of DNA reads

   :homepage: https://megan.cs.uni-tuebingen.de/
   :license: GPL >=3
   :recipe: /`megan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megan/meta.yaml>`_
   :links: biotools: :biotools:`megan`

   


.. conda:package:: megan

   |downloads_megan| |docker_megan|

   :versions:
      
      

      ``6.25.9-0``,  ``6.24.20-0``,  ``6.21.7-0``,  ``6.21.2-0``,  ``6.12.3-0``

      

   
   :depends openjdk: ``>=11``
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

      mamba install megan

   and update with::

      mamba update megan

  To create a new environment, run::

      mamba create --name myenvname megan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/megan:<tag>

   (see `megan/tags`_ for valid values for ``<tag>``)


.. |downloads_megan| image:: https://img.shields.io/conda/dn/bioconda/megan.svg?style=flat
   :target: https://anaconda.org/bioconda/megan
   :alt:   (downloads)
.. |docker_megan| image:: https://quay.io/repository/biocontainers/megan/status
   :target: https://quay.io/repository/biocontainers/megan
.. _`megan/tags`: https://quay.io/repository/biocontainers/megan?tab=tags


.. raw:: html

    <script>
        var package = "megan";
        var versions = ["6.25.9","6.24.20","6.21.7","6.21.2","6.12.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megan/README.html
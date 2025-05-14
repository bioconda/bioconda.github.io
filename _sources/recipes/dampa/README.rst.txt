:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dampa'
.. highlight: bash

dampa
=====

.. conda:recipe:: dampa
   :replaces_section_title:
   :noindex:

   DAMPA designs probes for use in targetted metagenomics. It leverages pangenome graphs to increase speed and accuracy.

   :homepage: https://github.com/MultipathogenGenomics/dampa
   :license: MIT
   :recipe: /`dampa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dampa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dampa/meta.yaml>`_

   


.. conda:package:: dampa

   |downloads_dampa| |docker_dampa|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends biopython: ``>=1.84``
   :depends blast: ``>=2.16``
   :depends matplotlib-base: ``>=3.10``
   :depends pandas: ``>=2.0``
   :depends python: ``>=3.8``
   :depends seaborn: ``>=0.13``
   :depends vsearch: ``>=2``
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

      mamba install dampa

   and update with::

      mamba update dampa

  To create a new environment, run::

      mamba create --name myenvname dampa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dampa:<tag>

   (see `dampa/tags`_ for valid values for ``<tag>``)


.. |downloads_dampa| image:: https://img.shields.io/conda/dn/bioconda/dampa.svg?style=flat
   :target: https://anaconda.org/bioconda/dampa
   :alt:   (downloads)
.. |docker_dampa| image:: https://quay.io/repository/biocontainers/dampa/status
   :target: https://quay.io/repository/biocontainers/dampa
.. _`dampa/tags`: https://quay.io/repository/biocontainers/dampa?tab=tags


.. raw:: html

    <script>
        var package = "dampa";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dampa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dampa/README.html
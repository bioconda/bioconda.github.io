:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hypro'
.. highlight: bash

hypro
=====

.. conda:recipe:: hypro
   :replaces_section_title:
   :noindex:

   Extend hypothetical prokka protein annotations using additional homology searches against larger databases

   :homepage: https://github.com/hoelzer-lab/hypro.git
   :license: GPL
   :recipe: /`hypro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hypro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hypro/meta.yaml>`_

   


.. conda:package:: hypro

   |downloads_hypro| |docker_hypro|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends mmseqs2: ``10.6d92c.*``
   :depends mygene: ``3.1.0.*``
   :depends pandas: ``0.25.2.*``
   :depends prokka: ``>=1.14.6``
   :depends python: ``3.7.*``
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

      mamba install hypro

   and update with::

      mamba update hypro

  To create a new environment, run::

      mamba create --name myenvname hypro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hypro:<tag>

   (see `hypro/tags`_ for valid values for ``<tag>``)


.. |downloads_hypro| image:: https://img.shields.io/conda/dn/bioconda/hypro.svg?style=flat
   :target: https://anaconda.org/bioconda/hypro
   :alt:   (downloads)
.. |docker_hypro| image:: https://quay.io/repository/biocontainers/hypro/status
   :target: https://quay.io/repository/biocontainers/hypro
.. _`hypro/tags`: https://quay.io/repository/biocontainers/hypro?tab=tags


.. raw:: html

    <script>
        var package = "hypro";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hypro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hypro/README.html
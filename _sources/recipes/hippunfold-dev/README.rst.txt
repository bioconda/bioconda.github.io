:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hippunfold-dev'
.. highlight: bash

hippunfold-dev
==============

.. conda:recipe:: hippunfold-dev
   :replaces_section_title:
   :noindex:

   Meta\-package that installs hippunfold with development dependencies.


   :homepage: https://github.com/khanlab/hippunfold
   :license: MIT
   :recipe: /`hippunfold-dev <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hippunfold-dev>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hippunfold-dev/meta.yaml>`_

   


.. conda:package:: hippunfold-dev

   |downloads_hippunfold-dev| |docker_hippunfold-dev|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends black: ``>=24.0.0``
   :depends flake8: ``>=4.0.1``
   :depends hippunfold: 
   :depends isort: ``>=5.10.1``
   :depends poethepoet: ``>=0.10.0``
   :depends pylint: ``>=2.11.1``
   :depends pytest: ``>=6.2.5``
   :depends pytest-console-scripts: ``>=1.2.1``
   :depends python: ``>=3.9,<4.0``
   :depends snakefmt: ``>=0.10.0``
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

      mamba install hippunfold-dev

   and update with::

      mamba update hippunfold-dev

  To create a new environment, run::

      mamba create --name myenvname hippunfold-dev

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hippunfold-dev:<tag>

   (see `hippunfold-dev/tags`_ for valid values for ``<tag>``)


.. |downloads_hippunfold-dev| image:: https://img.shields.io/conda/dn/bioconda/hippunfold-dev.svg?style=flat
   :target: https://anaconda.org/bioconda/hippunfold-dev
   :alt:   (downloads)
.. |docker_hippunfold-dev| image:: https://quay.io/repository/biocontainers/hippunfold-dev/status
   :target: https://quay.io/repository/biocontainers/hippunfold-dev
.. _`hippunfold-dev/tags`: https://quay.io/repository/biocontainers/hippunfold-dev?tab=tags


.. raw:: html

    <script>
        var package = "hippunfold-dev";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hippunfold-dev/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hippunfold-dev/README.html
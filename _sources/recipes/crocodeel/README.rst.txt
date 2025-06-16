:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crocodeel'
.. highlight: bash

crocodeel
=========

.. conda:recipe:: crocodeel
   :replaces_section_title:
   :noindex:

   CroCoDeEL is a tool that detects cross\-sample contamination in shotgun metagenomic data

   :homepage: https://github.com/metagenopolis/crocodeel
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`crocodeel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crocodeel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crocodeel/meta.yaml>`_

   CroCoDeEL is a tool that detects cross\-sample \(aka well\-to\-well\) contamination in shotgun metagenomic data.
   It accurately identifies contaminated samples but also pinpoints contamination sources and estimates contamination rates.
   CroCoDeEL relies only on species abundance tables and does not need negative controls.



.. conda:package:: crocodeel

   |downloads_crocodeel| |docker_crocodeel|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends joblib: ``>=1.4``
   :depends matplotlib-base: ``>=3.8``
   :depends numpy: ``>=1.26``
   :depends pandas: ``>=2.2``
   :depends python: ``>=3.12``
   :depends scikit-learn: ``>=1.3,<1.4``
   :depends scipy: ``>=1.13``
   :depends tqdm: ``>=4.66``
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

      mamba install crocodeel

   and update with::

      mamba update crocodeel

  To create a new environment, run::

      mamba create --name myenvname crocodeel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crocodeel:<tag>

   (see `crocodeel/tags`_ for valid values for ``<tag>``)


.. |downloads_crocodeel| image:: https://img.shields.io/conda/dn/bioconda/crocodeel.svg?style=flat
   :target: https://anaconda.org/bioconda/crocodeel
   :alt:   (downloads)
.. |docker_crocodeel| image:: https://quay.io/repository/biocontainers/crocodeel/status
   :target: https://quay.io/repository/biocontainers/crocodeel
.. _`crocodeel/tags`: https://quay.io/repository/biocontainers/crocodeel?tab=tags


.. raw:: html

    <script>
        var package = "crocodeel";
        var versions = ["1.0.7","1.0.6","1.0.5","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crocodeel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crocodeel/README.html
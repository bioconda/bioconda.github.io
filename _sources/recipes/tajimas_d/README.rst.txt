:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tajimas_d'
.. highlight: bash

tajimas_d
=========

.. conda:recipe:: tajimas_d
   :replaces_section_title:
   :noindex:

   Computes Tajimas D\, the Pi\- or Watterson\-Estimator for multiple sequences.

   :homepage: https://github.com/not-a-feature/tajimas_d
   :license: GPL / GPL-3.0-or-later
   :recipe: /`tajimas_d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tajimas_d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tajimas_d/meta.yaml>`_

   Tajima\'s D is a population genetic test statistic that computes the difference between the mean number of pairwise differences and the number of segregating sites. It is used to determine whether a population is expanding or shrinking.



.. conda:package:: tajimas_d

   |downloads_tajimas_d| |docker_tajimas_d|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends python: ``>=3.8``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install tajimas_d

   and update with::

      mamba update tajimas_d

  To create a new environment, run::

      mamba create --name myenvname tajimas_d

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tajimas_d:<tag>

   (see `tajimas_d/tags`_ for valid values for ``<tag>``)


.. |downloads_tajimas_d| image:: https://img.shields.io/conda/dn/bioconda/tajimas_d.svg?style=flat
   :target: https://anaconda.org/bioconda/tajimas_d
   :alt:   (downloads)
.. |docker_tajimas_d| image:: https://quay.io/repository/biocontainers/tajimas_d/status
   :target: https://quay.io/repository/biocontainers/tajimas_d
.. _`tajimas_d/tags`: https://quay.io/repository/biocontainers/tajimas_d?tab=tags


.. raw:: html

    <script>
        var package = "tajimas_d";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tajimas_d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tajimas_d/README.html
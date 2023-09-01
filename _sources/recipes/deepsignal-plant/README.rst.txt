:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepsignal-plant'
.. highlight: bash

deepsignal-plant
================

.. conda:recipe:: deepsignal-plant
   :replaces_section_title:
   :noindex:

   A deep\-learning method for detecting DNA methylation state from Oxford Nanopore sequencing reads of plants

   :homepage: https://github.com/PengNi/deepsignal-plant
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`deepsignal-plant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepsignal-plant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepsignal-plant/meta.yaml>`_

   


.. conda:package:: deepsignal-plant

   |downloads_deepsignal-plant| |docker_deepsignal-plant|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends h5py: ``>=2.8.0``
   :depends numpy: ``>=1.19.2``
   :depends python: ``>=3.8``
   :depends pytorch: ``>=1.2.0,<=1.11.0``
   :depends scikit-learn: ``>=1.0.2``
   :depends statsmodels: ``>=0.13.2``
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

      mamba install deepsignal-plant

   and update with::

      mamba update deepsignal-plant

  To create a new environment, run::

      mamba create --name myenvname deepsignal-plant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepsignal-plant:<tag>

   (see `deepsignal-plant/tags`_ for valid values for ``<tag>``)


.. |downloads_deepsignal-plant| image:: https://img.shields.io/conda/dn/bioconda/deepsignal-plant.svg?style=flat
   :target: https://anaconda.org/bioconda/deepsignal-plant
   :alt:   (downloads)
.. |docker_deepsignal-plant| image:: https://quay.io/repository/biocontainers/deepsignal-plant/status
   :target: https://quay.io/repository/biocontainers/deepsignal-plant
.. _`deepsignal-plant/tags`: https://quay.io/repository/biocontainers/deepsignal-plant?tab=tags


.. raw:: html

    <script>
        var package = "deepsignal-plant";
        var versions = ["0.1.6","0.1.5","0.1.4","0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepsignal-plant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepsignal-plant/README.html
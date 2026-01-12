:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mags-visualization'
.. highlight: bash

mags-visualization
==================

.. conda:recipe:: mags-visualization
   :replaces_section_title:
   :noindex:

   Visualization toolkit for MAG quality\, taxonomy\, clustering\, and annotation.

   :homepage: https://github.com/alexandrah1704/MAGs-visualization
   :license: GPL3 / GPL-3.0
   :recipe: /`mags-visualization <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mags-visualization>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mags-visualization/meta.yaml>`_

   


.. conda:package:: mags-visualization

   |downloads_mags-visualization| |docker_mags-visualization|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends python: ``>=3.9,<3.13``
   :depends seaborn: 
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

      mamba install mags-visualization

   and update with::

      mamba update mags-visualization

  To create a new environment, run::

      mamba create --name myenvname mags-visualization

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mags-visualization:<tag>

   (see `mags-visualization/tags`_ for valid values for ``<tag>``)


.. |downloads_mags-visualization| image:: https://img.shields.io/conda/dn/bioconda/mags-visualization.svg?style=flat
   :target: https://anaconda.org/bioconda/mags-visualization
   :alt:   (downloads)
.. |docker_mags-visualization| image:: https://quay.io/repository/biocontainers/mags-visualization/status
   :target: https://quay.io/repository/biocontainers/mags-visualization
.. _`mags-visualization/tags`: https://quay.io/repository/biocontainers/mags-visualization?tab=tags


.. raw:: html

    <script>
        var package = "mags-visualization";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mags-visualization/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mags-visualization/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plothic'
.. highlight: bash

plothic
=======

.. conda:recipe:: plothic
   :replaces_section_title:
   :noindex:

   Plot Whole genome Hi\-C contact matrix heatmap

   :homepage: https://github.com/Jwindler/PlotHiC
   :documentation: https://github.com/Jwindler/PlotHiC/blob/main/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`plothic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plothic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plothic/meta.yaml>`_

   


.. conda:package:: plothic

   |downloads_plothic| |docker_plothic|

   :versions:
      
      

      ``0.4.19-0``,  ``0.4.18-0``,  ``0.4.17-0``,  ``0.4.16-0``

      

   
   :depends hic-straw: ``>=1.3.1``
   :depends libcurl: 
   :depends matplotlib-base: ``>=3.9.2``
   :depends numpy: ``>=1.21.2``
   :depends pandas: ``>=2.2.3``
   :depends python: 
   :depends scikit-learn: ``>=1.5.2``
   :depends scipy: ``>=1.14.1``
   :depends six: ``>=1.16.0``
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

      mamba install plothic

   and update with::

      mamba update plothic

  To create a new environment, run::

      mamba create --name myenvname plothic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plothic:<tag>

   (see `plothic/tags`_ for valid values for ``<tag>``)


.. |downloads_plothic| image:: https://img.shields.io/conda/dn/bioconda/plothic.svg?style=flat
   :target: https://anaconda.org/bioconda/plothic
   :alt:   (downloads)
.. |docker_plothic| image:: https://quay.io/repository/biocontainers/plothic/status
   :target: https://quay.io/repository/biocontainers/plothic
.. _`plothic/tags`: https://quay.io/repository/biocontainers/plothic?tab=tags


.. raw:: html

    <script>
        var package = "plothic";
        var versions = ["0.4.19","0.4.18","0.4.17","0.4.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plothic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plothic/README.html
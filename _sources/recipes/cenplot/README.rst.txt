:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cenplot'
.. highlight: bash

cenplot
=======

.. conda:recipe:: cenplot
   :replaces_section_title:
   :noindex:

   Centromere plotting library.

   :homepage: https://github.com/logsdon-lab/CenPlot
   :license: MIT
   :recipe: /`cenplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cenplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cenplot/meta.yaml>`_

   


.. conda:package:: cenplot

   |downloads_cenplot| |docker_cenplot|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends censtats: ``>=0.0.13``
   :depends intervaltree: ``>=3.1.0``
   :depends matplotlib-base: ``>=3.10.0``
   :depends numpy: ``>=2.2.1``
   :depends polars: ``>=1.19.0``
   :depends python: ``>=3.12``
   :depends pyyaml: ``>=6.0.2``
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

      mamba install cenplot

   and update with::

      mamba update cenplot

  To create a new environment, run::

      mamba create --name myenvname cenplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cenplot:<tag>

   (see `cenplot/tags`_ for valid values for ``<tag>``)


.. |downloads_cenplot| image:: https://img.shields.io/conda/dn/bioconda/cenplot.svg?style=flat
   :target: https://anaconda.org/bioconda/cenplot
   :alt:   (downloads)
.. |docker_cenplot| image:: https://quay.io/repository/biocontainers/cenplot/status
   :target: https://quay.io/repository/biocontainers/cenplot
.. _`cenplot/tags`: https://quay.io/repository/biocontainers/cenplot?tab=tags


.. raw:: html

    <script>
        var package = "cenplot";
        var versions = ["0.1.5","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cenplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cenplot/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ontologyplot'
.. highlight: bash

r-ontologyplot
==============

.. conda:recipe:: r-ontologyplot
   :replaces_section_title:
   :noindex:

   Functions for visualising sets of ontological terms using the \'graphviz\' layout system.

   :homepage: https://CRAN.R-project.org/package=ontologyPlot
   :license: GPL3 / GPL-2.0-or-later
   :recipe: /`r-ontologyplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ontologyplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ontologyplot/meta.yaml>`_

   


.. conda:package:: r-ontologyplot

   |downloads_r-ontologyplot| |docker_r-ontologyplot|

   :versions:
      
      

      ``1.7-0``,  ``1.6-4``,  ``1.6-3``,  ``1.6-2``,  ``1.6-1``,  ``1.6-0``,  ``1.4-1``,  ``1.4-0``

      

   
   :depends bioconductor-rgraphviz: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ontologyindex: 
   :depends r-paintmap: 
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

      mamba install r-ontologyplot

   and update with::

      mamba update r-ontologyplot

  To create a new environment, run::

      mamba create --name myenvname r-ontologyplot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-ontologyplot:<tag>

   (see `r-ontologyplot/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ontologyplot| image:: https://img.shields.io/conda/dn/bioconda/r-ontologyplot.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ontologyplot
   :alt:   (downloads)
.. |docker_r-ontologyplot| image:: https://quay.io/repository/biocontainers/r-ontologyplot/status
   :target: https://quay.io/repository/biocontainers/r-ontologyplot
.. _`r-ontologyplot/tags`: https://quay.io/repository/biocontainers/r-ontologyplot?tab=tags


.. raw:: html

    <script>
        var package = "r-ontologyplot";
        var versions = ["1.7","1.6","1.6","1.6","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ontologyplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ontologyplot/README.html
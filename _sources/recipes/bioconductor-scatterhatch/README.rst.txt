:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scatterhatch'
.. highlight: bash

bioconductor-scatterhatch
=========================

.. conda:recipe:: bioconductor-scatterhatch
   :replaces_section_title:
   :noindex:

   Creates hatched patterns for scatterplots

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scatterHatch.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scatterhatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scatterhatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scatterhatch/meta.yaml>`_

   The objective of this package is to efficiently create scatterplots where groups can be distinguished by color and texture. Visualizations in computational biology tend to have many groups making it difficult to distinguish between groups solely on color. Thus\, this package is useful for increasing the accessibility of scatterplot visualizations to those with visual impairments such as color blindness.


.. conda:package:: bioconductor-scatterhatch

   |downloads_bioconductor-scatterhatch| |docker_bioconductor-scatterhatch|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-spatstat.geom: 
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

      mamba install bioconductor-scatterhatch

   and update with::

      mamba update bioconductor-scatterhatch

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scatterhatch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scatterhatch:<tag>

   (see `bioconductor-scatterhatch/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scatterhatch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scatterhatch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scatterhatch
   :alt:   (downloads)
.. |docker_bioconductor-scatterhatch| image:: https://quay.io/repository/biocontainers/bioconductor-scatterhatch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scatterhatch
.. _`bioconductor-scatterhatch/tags`: https://quay.io/repository/biocontainers/bioconductor-scatterhatch?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scatterhatch";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scatterhatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scatterhatch/README.html
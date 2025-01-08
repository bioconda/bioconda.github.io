:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseehex'
.. highlight: bash

bioconductor-iseehex
====================

.. conda:recipe:: bioconductor-iseehex
   :replaces_section_title:
   :noindex:

   iSEE extension for summarising data points in hexagonal bins

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iSEEhex.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iseehex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseehex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseehex/meta.yaml>`_

   This package provides panels summarising data points in hexagonal bins for \`iSEE\`. It is part of \`iSEEu\`\, the iSEE universe of panels that extend the \`iSEE\` package.


.. conda:package:: bioconductor-iseehex

   |downloads_bioconductor-iseehex| |docker_bioconductor-iseehex|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-isee: ``>=2.18.0,<2.19.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-hexbin: 
   :depends r-shiny: 
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

      mamba install bioconductor-iseehex

   and update with::

      mamba update bioconductor-iseehex

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iseehex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iseehex:<tag>

   (see `bioconductor-iseehex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iseehex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseehex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseehex
   :alt:   (downloads)
.. |docker_bioconductor-iseehex| image:: https://quay.io/repository/biocontainers/bioconductor-iseehex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseehex
.. _`bioconductor-iseehex/tags`: https://quay.io/repository/biocontainers/bioconductor-iseehex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iseehex";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseehex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseehex/README.html
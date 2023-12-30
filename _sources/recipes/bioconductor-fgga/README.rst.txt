:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fgga'
.. highlight: bash

bioconductor-fgga
=================

.. conda:recipe:: bioconductor-fgga
   :replaces_section_title:
   :noindex:

   Hierarchical ensemble method based on factor graph

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/fgga.html
   :license: GPL-3
   :recipe: /`bioconductor-fgga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgga/meta.yaml>`_

   Package that implements the FGGA algorithm. This package provides a hierarchical ensemble method based ob factor graphs for the consistent cross\-ontology annotation of protein coding genes. FGGA embodies elements of predicate logic\, communication theory\, supervised learning and inference in graphical models.


.. conda:package:: bioconductor-fgga

   |downloads_bioconductor-fgga| |docker_bioconductor-fgga|

   :versions:
      
      

      ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-rbgl: ``>=1.78.0,<1.79.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: 
   :depends r-e1071: 
   :depends r-grbase: 
   :depends r-jsonlite: 
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

      mamba install bioconductor-fgga

   and update with::

      mamba update bioconductor-fgga

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fgga

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fgga:<tag>

   (see `bioconductor-fgga/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fgga| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fgga.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fgga
   :alt:   (downloads)
.. |docker_bioconductor-fgga| image:: https://quay.io/repository/biocontainers/bioconductor-fgga/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fgga
.. _`bioconductor-fgga/tags`: https://quay.io/repository/biocontainers/bioconductor-fgga?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fgga";
        var versions = ["1.9.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fgga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fgga/README.html
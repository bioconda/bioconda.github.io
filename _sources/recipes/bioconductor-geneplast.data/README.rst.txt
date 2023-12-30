:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneplast.data'
.. highlight: bash

bioconductor-geneplast.data
===========================

.. conda:recipe:: bioconductor-geneplast.data
   :replaces_section_title:
   :noindex:

   Input data for the geneplast package via AnnotationHub

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/geneplast.data.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geneplast.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplast.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplast.data/meta.yaml>`_

   The package geneplast.data provides datasets from different sources via AnnotationHub to use in geneplast pipelines. The datasets have species\, phylogenetic trees\, and orthology relationships among eukaryotes from different orthologs databases.


.. conda:package:: bioconductor-geneplast.data

   |downloads_bioconductor-geneplast.data| |docker_bioconductor-geneplast.data|

   :versions:
      
      

      ``0.99.7-0``,  ``0.99.6-2``,  ``0.99.6-1``,  ``0.99.6-0``,  ``0.99.4-0``,  ``0.99.2-2``,  ``0.99.2-1``,  ``0.99.2-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-geneplast: ``>=1.28.0,<1.29.0``
   :depends bioconductor-treeio: ``>=1.26.0,<1.27.0``
   :depends curl: 
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-igraph: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-tibble: 
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

      mamba install bioconductor-geneplast.data

   and update with::

      mamba update bioconductor-geneplast.data

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geneplast.data

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneplast.data:<tag>

   (see `bioconductor-geneplast.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneplast.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneplast.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneplast.data
   :alt:   (downloads)
.. |docker_bioconductor-geneplast.data| image:: https://quay.io/repository/biocontainers/bioconductor-geneplast.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneplast.data
.. _`bioconductor-geneplast.data/tags`: https://quay.io/repository/biocontainers/bioconductor-geneplast.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geneplast.data";
        var versions = ["0.99.7","0.99.6","0.99.6","0.99.6","0.99.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneplast.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneplast.data/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ogre'
.. highlight: bash

bioconductor-ogre
=================

.. conda:recipe:: bioconductor-ogre
   :replaces_section_title:
   :noindex:

   Calculate\, visualize and analyse overlap between genomic regions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/OGRE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ogre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ogre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ogre/meta.yaml>`_

   OGRE calculates overlap between user defined genomic region datasets. Any regions can be supplied i.e. genes\, SNPs\, or reads from sequencing experiments. Key numbers help analyse the extend of overlaps which can also be visualized at a genomic level.


.. conda:package:: bioconductor-ogre

   |downloads_bioconductor-ogre| |docker_bioconductor-ogre|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-gviz: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinydashboard: 
   :depends r-shinyfiles: 
   :depends r-tidyr: 
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

      mamba install bioconductor-ogre

   and update with::

      mamba update bioconductor-ogre

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ogre

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ogre:<tag>

   (see `bioconductor-ogre/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ogre| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ogre.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ogre
   :alt:   (downloads)
.. |docker_bioconductor-ogre| image:: https://quay.io/repository/biocontainers/bioconductor-ogre/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ogre
.. _`bioconductor-ogre/tags`: https://quay.io/repository/biocontainers/bioconductor-ogre?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ogre";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ogre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ogre/README.html
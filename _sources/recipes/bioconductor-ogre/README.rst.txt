:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ogre'
.. highlight: bash

bioconductor-ogre
=================

.. conda:recipe:: bioconductor-ogre
   :replaces_section_title:
   :noindex:

   Calculate\, visualize and analyse overlap between genomic regions

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/OGRE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ogre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ogre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ogre/meta.yaml>`_

   OGRE calculates overlap between user defined genomic region datasets. Any regions can be supplied i.e. genes\, SNPs\, or reads from sequencing experiments. Key numbers help analyse the extend of overlaps which can also be visualized at a genomic level.


.. conda:package:: bioconductor-ogre

   |downloads_bioconductor-ogre| |docker_bioconductor-ogre|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gviz: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinydashboard: 
   :depends r-shinyfiles: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ogre

   and update with::

      conda update bioconductor-ogre

   or use the docker container::

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
        var versions = ["1.4.0","1.2.0"];
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
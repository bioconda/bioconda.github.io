:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ontoproc'
.. highlight: bash

bioconductor-ontoproc
=====================

.. conda:recipe:: bioconductor-ontoproc
   :replaces_section_title:
   :noindex:

   processing of ontologies of anatomy\, cell lines\, and so on

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ontoProc.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ontoproc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ontoproc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ontoproc/meta.yaml>`_

   Support harvesting of diverse bioinformatic ontologies\, making particular use of the ontologyIndex package on CRAN. We provide snapshots of key ontologies for terms about cells\, cell lines\, chemical compounds\, and anatomy\, to help analyze genome\-scale experiments\, particularly cell x compound screens. Another purpose is to strengthen development of compelling use cases for richer interfaces to emerging ontologies.


.. conda:package:: bioconductor-ontoproc

   |downloads_bioconductor-ontoproc| |docker_bioconductor-ontoproc|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocfilecache: ``>=2.2.0,<2.3.0``
   :depends bioconductor-graph: ``>=1.72.0,<1.73.0``
   :depends bioconductor-rgraphviz: ``>=2.38.0,<2.39.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-ontologyindex: 
   :depends r-ontologyplot: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ontoproc

   and update with::

      conda update bioconductor-ontoproc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ontoproc:<tag>

   (see `bioconductor-ontoproc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ontoproc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ontoproc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ontoproc
   :alt:   (downloads)
.. |docker_bioconductor-ontoproc| image:: https://quay.io/repository/biocontainers/bioconductor-ontoproc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ontoproc
.. _`bioconductor-ontoproc/tags`: https://quay.io/repository/biocontainers/bioconductor-ontoproc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ontoproc";
        var versions = ["1.16.0","1.14.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ontoproc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ontoproc/README.html
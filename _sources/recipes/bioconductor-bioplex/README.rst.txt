:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioplex'
.. highlight: bash

bioconductor-bioplex
====================

.. conda:recipe:: bioconductor-bioplex
   :replaces_section_title:
   :noindex:

   R\-side access to BioPlex protein\-protein interaction data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/BioPlex.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bioplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioplex/meta.yaml>`_

   The BioPlex package implements access to the BioPlex protein\-protein interaction networks and related resources from within R. Besides protein\-protein interaction networks for HEK293 and HCT116 cells\, this includes access to CORUM protein complex data\, and transcriptome and proteome data for the two cell lines. Functionality focuses on importing the various data resources and storing them in dedicated Bioconductor data structures\, as a foundation for integrative downstream analysis of the data.


.. conda:package:: bioconductor-bioplex

   |downloads_bioconductor-bioplex| |docker_bioconductor-bioplex|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.6.0,<2.7.0``
   :depends bioconductor-data-packages: ``>=20221106``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-geoquery: ``>=2.66.0,<2.67.0``
   :depends bioconductor-graph: ``>=1.76.0,<1.77.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bioplex

   and update with::

      conda update bioconductor-bioplex

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bioplex:<tag>

   (see `bioconductor-bioplex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bioplex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioplex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bioplex
   :alt:   (downloads)
.. |docker_bioconductor-bioplex| image:: https://quay.io/repository/biocontainers/bioconductor-bioplex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioplex
.. _`bioconductor-bioplex/tags`: https://quay.io/repository/biocontainers/bioconductor-bioplex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bioplex";
        var versions = ["1.4.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioplex/README.html
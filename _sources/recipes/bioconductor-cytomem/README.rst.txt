:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytomem'
.. highlight: bash

bioconductor-cytomem
====================

.. conda:recipe:: bioconductor-cytomem
   :replaces_section_title:
   :noindex:

   Marker Enrichment Modeling \(MEM\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/cytoMEM.html
   :license: GPL-3
   :recipe: /`bioconductor-cytomem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytomem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytomem/meta.yaml>`_

   MEM\, Marker Enrichment Modeling\, automatically generates and displays quantitative labels for cell populations that have been identified from single\-cell data. The input for MEM is a dataset that has pre\-clustered or pre\-gated populations with cells in rows and features in columns. Labels convey a list of measured features and the features\' levels of relative enrichment on each population. MEM can be applied to a wide variety of data types and can compare between MEM labels from flow cytometry\, mass cytometry\, single cell RNA\-seq\, and spectral flow cytometry using RMSD.


.. conda:package:: bioconductor-cytomem

   |downloads_bioconductor-cytomem| |docker_bioconductor-cytomem|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-flowcore: ``>=2.12.0,<2.13.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gplots: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cytomem

   and update with::

      conda update bioconductor-cytomem

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytomem:<tag>

   (see `bioconductor-cytomem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytomem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytomem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytomem
   :alt:   (downloads)
.. |docker_bioconductor-cytomem| image:: https://quay.io/repository/biocontainers/bioconductor-cytomem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytomem
.. _`bioconductor-cytomem/tags`: https://quay.io/repository/biocontainers/bioconductor-cytomem?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytomem";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytomem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytomem/README.html
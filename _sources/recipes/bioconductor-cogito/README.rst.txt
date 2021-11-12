:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cogito'
.. highlight: bash

bioconductor-cogito
===================

.. conda:recipe:: bioconductor-cogito
   :replaces_section_title:
   :noindex:

   Compare genomic intervals tool \- Automated\, complete\, reproducible and clear report about genomic and epigenomic data sets

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Cogito.html
   :license: LGPL-3
   :recipe: /`bioconductor-cogito <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogito>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogito/meta.yaml>`_

   Biological studies often consist of multiple conditions which are examined with different laboratory set ups like RNA\-sequencing or ChIP\-sequencing. To get an overview about the whole resulting data set\, Cogito provides an automated\, complete\, reproducible and clear report about all samples and basic comparisons between all different samples. This report can be used as documentation about the data set or as starting point for further custom analysis.


.. conda:package:: bioconductor-cogito

   |downloads_bioconductor-cogito| |docker_bioconductor-cogito|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-txdb.mmusculus.ucsc.mm9.knowngene: ``>=3.2.0,<3.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-biocmanager: 
   :depends r-entropy: 
   :depends r-ggplot2: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-rmarkdown: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cogito

   and update with::

      conda update bioconductor-cogito

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cogito:<tag>

   (see `bioconductor-cogito/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cogito| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cogito.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cogito
   :alt:   (downloads)
.. |docker_bioconductor-cogito| image:: https://quay.io/repository/biocontainers/bioconductor-cogito/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cogito
.. _`bioconductor-cogito/tags`: https://quay.io/repository/biocontainers/bioconductor-cogito?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cogito";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cogito/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cogito/README.html
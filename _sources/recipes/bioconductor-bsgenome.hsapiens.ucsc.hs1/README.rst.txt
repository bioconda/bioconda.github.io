:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ucsc.hs1'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ucsc.hs1
=======================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ucsc.hs1
   :replaces_section_title:
   :noindex:

   Full genomic sequences for UCSC genome hs1 \(Homo sapiens\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/BSgenome.Hsapiens.UCSC.hs1.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ucsc.hs1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hs1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hs1/meta.yaml>`_

   Full genomic sequences for UCSC genome hs1 \(the hs1 genome is based on assembly T2T\-CHM13v2.0\, with GenBank assembly accession GCA\_009914755.4\). The sequences are stored in DNAString objects.


.. conda:package:: bioconductor-bsgenome.hsapiens.ucsc.hs1

   |downloads_bioconductor-bsgenome.hsapiens.ucsc.hs1| |docker_bioconductor-bsgenome.hsapiens.ucsc.hs1|

   :versions:
      
      

      ``1.4.4-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.hsapiens.ucsc.hs1

   and update with::

      conda update bioconductor-bsgenome.hsapiens.ucsc.hs1

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hs1:<tag>

   (see `bioconductor-bsgenome.hsapiens.ucsc.hs1/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.ucsc.hs1| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hs1.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hs1
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ucsc.hs1| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hs1/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hs1
.. _`bioconductor-bsgenome.hsapiens.ucsc.hs1/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hs1?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.hsapiens.ucsc.hs1";
        var versions = ["1.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hs1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hs1/README.html
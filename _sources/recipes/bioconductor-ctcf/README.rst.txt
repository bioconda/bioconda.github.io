:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctcf'
.. highlight: bash

bioconductor-ctcf
=================

.. conda:recipe:: bioconductor-ctcf
   :replaces_section_title:
   :noindex:

   Genomic coordinates of CTCF binding sites\, with orientation

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/CTCF.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ctcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctcf/meta.yaml>`_

   Genomic coordinates of predicted CTCF binding sites with motif MA0139.1 \(Jaspar\)\, in BED format. With strand orientation \(directionality of binding\). Human \(hg19\, hg38\) and mouse \(mm9\, mm10\) genomes. The binding sites were detected using the FIMO tool of the MEME suite using default settings. Extra columns include motif name \(MA0139.1\)\, score\, p\-value\, q\-value\, and the motif sequence.


.. conda:package:: bioconductor-ctcf

   |downloads_bioconductor-ctcf| |docker_bioconductor-ctcf|

   :versions:
      
      

      ``0.99.9-0``,  ``0.99.4-1``,  ``0.99.4-0``

      

   
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ctcf

   and update with::

      conda update bioconductor-ctcf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ctcf:<tag>

   (see `bioconductor-ctcf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ctcf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctcf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctcf
   :alt:   (downloads)
.. |docker_bioconductor-ctcf| image:: https://quay.io/repository/biocontainers/bioconductor-ctcf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctcf
.. _`bioconductor-ctcf/tags`: https://quay.io/repository/biocontainers/bioconductor-ctcf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ctcf";
        var versions = ["0.99.9","0.99.4","0.99.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctcf/README.html
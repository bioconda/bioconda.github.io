:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eatonetalchipseq'
.. highlight: bash

bioconductor-eatonetalchipseq
=============================

.. conda:recipe:: bioconductor-eatonetalchipseq
   :replaces_section_title:
   :noindex:

   ChIP\-seq data of ORC\-binding sites in Yeast excerpted from Eaton et al. 2010

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/EatonEtAlChIPseq.html
   :license: Artistic 2.0
   :recipe: /`bioconductor-eatonetalchipseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eatonetalchipseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eatonetalchipseq/meta.yaml>`_

   ChIP\-seq analysis subset from \"Conserved nucleosome positioning defines replication origins\" \(PMID 20351051\)


.. conda:package:: bioconductor-eatonetalchipseq

   |downloads_bioconductor-eatonetalchipseq| |docker_bioconductor-eatonetalchipseq|

   :versions:
      
      

      ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.20.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-shortread: ``>=1.52.0,<1.53.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-eatonetalchipseq

   and update with::

      conda update bioconductor-eatonetalchipseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eatonetalchipseq:<tag>

   (see `bioconductor-eatonetalchipseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eatonetalchipseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eatonetalchipseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eatonetalchipseq
   :alt:   (downloads)
.. |docker_bioconductor-eatonetalchipseq| image:: https://quay.io/repository/biocontainers/bioconductor-eatonetalchipseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eatonetalchipseq
.. _`bioconductor-eatonetalchipseq/tags`: https://quay.io/repository/biocontainers/bioconductor-eatonetalchipseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-eatonetalchipseq";
        var versions = ["0.32.0","0.30.0","0.28.0","0.28.0","0.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eatonetalchipseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eatonetalchipseq/README.html
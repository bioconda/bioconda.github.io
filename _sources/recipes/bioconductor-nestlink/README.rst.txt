:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nestlink'
.. highlight: bash

bioconductor-nestlink
=====================

.. conda:recipe:: bioconductor-nestlink
   :replaces_section_title:
   :noindex:

   NestLink an R data package to guide through Engineered Peptide Barcodes for In\-Depth Analyzes of Binding Protein Ensembles

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/NestLink.html
   :license: GPL
   :recipe: /`bioconductor-nestlink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nestlink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nestlink/meta.yaml>`_

   Provides next\-generation sequencing \(NGS\) and mass spectrometry \(MS\) sample data\, code snippets and replication material used for developing NestLink. The NestLink approach is a protein binder selection and identification technology able to biophysically characterize thousands of library members at once without handling individual clones at any stage of the process. Data were acquired on NGS and MS platforms at the Functional Genomics Center Zurich.


.. conda:package:: bioconductor-nestlink

   |downloads_bioconductor-nestlink| |docker_bioconductor-nestlink|

   :versions:
      
      

      ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-shortread: ``>=1.52.0,<1.53.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gplots: ``>=3.0``
   :depends r-protviz: ``>=0.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nestlink

   and update with::

      conda update bioconductor-nestlink

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nestlink:<tag>

   (see `bioconductor-nestlink/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nestlink| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nestlink.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nestlink
   :alt:   (downloads)
.. |docker_bioconductor-nestlink| image:: https://quay.io/repository/biocontainers/bioconductor-nestlink/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nestlink
.. _`bioconductor-nestlink/tags`: https://quay.io/repository/biocontainers/bioconductor-nestlink?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nestlink";
        var versions = ["1.10.0","1.10.0","1.8.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nestlink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nestlink/README.html
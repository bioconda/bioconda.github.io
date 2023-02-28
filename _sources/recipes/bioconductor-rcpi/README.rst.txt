:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcpi'
.. highlight: bash

bioconductor-rcpi
=================

.. conda:recipe:: bioconductor-rcpi
   :replaces_section_title:
   :noindex:

   Molecular Informatics Toolkit for Compound\-Protein Interaction in Drug Discovery

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/Rcpi.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-rcpi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcpi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcpi/meta.yaml>`_

   A molecular informatics toolkit with an integration of bioinformatics and chemoinformatics tools for drug discovery.


.. conda:package:: bioconductor-rcpi

   |downloads_bioconductor-rcpi| |docker_bioconductor-rcpi|

   :versions:
      
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.18.1-0``

      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-gosemsim: ``>=2.24.0,<2.25.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-rcdk: ``>=3.3.8``
   :depends r-rcurl: 
   :depends r-rjson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rcpi

   and update with::

      conda update bioconductor-rcpi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcpi:<tag>

   (see `bioconductor-rcpi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcpi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcpi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcpi
   :alt:   (downloads)
.. |docker_bioconductor-rcpi| image:: https://quay.io/repository/biocontainers/bioconductor-rcpi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcpi
.. _`bioconductor-rcpi/tags`: https://quay.io/repository/biocontainers/bioconductor-rcpi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcpi";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcpi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcpi/README.html
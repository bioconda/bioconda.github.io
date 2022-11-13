:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nanostringqcpro'
.. highlight: bash

bioconductor-nanostringqcpro
============================

.. conda:recipe:: bioconductor-nanostringqcpro
   :replaces_section_title:
   :noindex:

   Quality metrics and data processing methods for NanoString mRNA gene expression data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/NanoStringQCPro.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-nanostringqcpro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringqcpro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringqcpro/meta.yaml>`_

   NanoStringQCPro provides a set of quality metrics that can be used to assess the quality of NanoString mRNA gene expression data \-\- i.e. to identify outlier probes and outlier samples. It also provides different background subtraction and normalization approaches for this data. It outputs suggestions for flagging samples\/probes and an easily sharable html quality control output.


.. conda:package:: bioconductor-nanostringqcpro

   |downloads_bioconductor-nanostringqcpro| |docker_bioconductor-nanostringqcpro|

   :versions:
      
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-knitr: ``>=1.12``
   :depends r-nmf: ``>=0.20.5``
   :depends r-png: ``>=0.1-7``
   :depends r-rcolorbrewer: ``>=1.0-5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nanostringqcpro

   and update with::

      conda update bioconductor-nanostringqcpro

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nanostringqcpro:<tag>

   (see `bioconductor-nanostringqcpro/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nanostringqcpro| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanostringqcpro.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nanostringqcpro
   :alt:   (downloads)
.. |docker_bioconductor-nanostringqcpro| image:: https://quay.io/repository/biocontainers/bioconductor-nanostringqcpro/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanostringqcpro
.. _`bioconductor-nanostringqcpro/tags`: https://quay.io/repository/biocontainers/bioconductor-nanostringqcpro?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nanostringqcpro";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanostringqcpro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanostringqcpro/README.html
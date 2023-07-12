:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-filterffpe'
.. highlight: bash

bioconductor-filterffpe
=======================

.. conda:recipe:: bioconductor-filterffpe
   :replaces_section_title:
   :noindex:

   FFPE Artificial Chimeric Read Filter for NGS data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/FilterFFPE.html
   :license: LGPL-3
   :recipe: /`bioconductor-filterffpe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-filterffpe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-filterffpe/meta.yaml>`_

   This package finds and filters artificial chimeric reads specifically generated in next\-generation sequencing \(NGS\) process of formalin\-fixed paraffin\-embedded \(FFPE\) tissues. These artificial chimeric reads can lead to a large number of false positive structural variation \(SV\) calls. The required input is an indexed BAM file of a FFPE sample.


.. conda:package:: bioconductor-filterffpe

   |downloads_bioconductor-filterffpe| |docker_bioconductor-filterffpe|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-filterffpe

   and update with::

      conda update bioconductor-filterffpe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-filterffpe:<tag>

   (see `bioconductor-filterffpe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-filterffpe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-filterffpe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-filterffpe
   :alt:   (downloads)
.. |docker_bioconductor-filterffpe| image:: https://quay.io/repository/biocontainers/bioconductor-filterffpe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-filterffpe
.. _`bioconductor-filterffpe/tags`: https://quay.io/repository/biocontainers/bioconductor-filterffpe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-filterffpe";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-filterffpe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-filterffpe/README.html
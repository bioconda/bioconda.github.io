:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicinteractionnodes'
.. highlight: bash

bioconductor-genomicinteractionnodes
====================================

.. conda:recipe:: bioconductor-genomicinteractionnodes
   :replaces_section_title:
   :noindex:

   A R\/Bioconductor package to detect the interaction nodes from HiC\/HiChIP\/HiCAR data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/GenomicInteractionNodes.html
   :license: file LICENSE
   :recipe: /`bioconductor-genomicinteractionnodes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicinteractionnodes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicinteractionnodes/meta.yaml>`_

   The GenomicInteractionNodes package can import interactions from bedpe file and define the interaction nodes\, the genomic interaction sites with multiple interaction loops. The interaction nodes is a binding platform regulates one or multiple genes. The detected interaction nodes will be annotated for downstream validation.


.. conda:package:: bioconductor-genomicinteractionnodes

   |downloads_bioconductor-genomicinteractionnodes| |docker_bioconductor-genomicinteractionnodes|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-go.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-graph: ``>=1.76.0,<1.77.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rbgl: ``>=1.74.0,<1.75.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicinteractionnodes

   and update with::

      conda update bioconductor-genomicinteractionnodes

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicinteractionnodes:<tag>

   (see `bioconductor-genomicinteractionnodes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicinteractionnodes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicinteractionnodes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicinteractionnodes
   :alt:   (downloads)
.. |docker_bioconductor-genomicinteractionnodes| image:: https://quay.io/repository/biocontainers/bioconductor-genomicinteractionnodes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicinteractionnodes
.. _`bioconductor-genomicinteractionnodes/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicinteractionnodes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicinteractionnodes";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicinteractionnodes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicinteractionnodes/README.html
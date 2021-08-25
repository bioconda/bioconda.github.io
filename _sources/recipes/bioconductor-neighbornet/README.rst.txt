:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-neighbornet'
.. highlight: bash

bioconductor-neighbornet
========================

.. conda:recipe:: bioconductor-neighbornet
   :replaces_section_title:
   :noindex:

   Neighbor\_net analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/NeighborNet.html
   :license: CC BY-NC-ND 4.0
   :recipe: /`bioconductor-neighbornet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-neighbornet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-neighbornet/meta.yaml>`_

   Identify the putative mechanism explaining the active interactions between genes in the investigated phenotype.


.. conda:package:: bioconductor-neighbornet

   |downloads_bioconductor-neighbornet| |docker_bioconductor-neighbornet|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-graph: ``>=1.70.0,<1.71.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-neighbornet

   and update with::

      conda update bioconductor-neighbornet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-neighbornet:<tag>

   (see `bioconductor-neighbornet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-neighbornet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-neighbornet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-neighbornet
   :alt:   (downloads)
.. |docker_bioconductor-neighbornet| image:: https://quay.io/repository/biocontainers/bioconductor-neighbornet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-neighbornet
.. _`bioconductor-neighbornet/tags`: https://quay.io/repository/biocontainers/bioconductor-neighbornet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-neighbornet";
        var versions = ["1.10.0","1.8.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-neighbornet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-neighbornet/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scale4c'
.. highlight: bash

bioconductor-scale4c
====================

.. conda:recipe:: bioconductor-scale4c
   :replaces_section_title:
   :noindex:

   Scale4C\: an R\/Bioconductor package for scale\-space transformation of 4C\-seq data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Scale4C.html
   :license: LGPL-3
   :recipe: /`bioconductor-scale4c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scale4c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scale4c/meta.yaml>`_

   Scale4C is an R\/Bioconductor package for scale\-space transformation and visualization of 4C\-seq data. The scale\-space transformation is a multi\-scale visualization technique to transform a 2D signal \(e.g. 4C\-seq reads on a genomic interval of choice\) into a tesselation in the scale space \(2D\, genomic position x scale factor\) by applying different smoothing kernels \(Gauss\, with increasing sigma\). This transformation allows for explorative analysis and comparisons of the data\'s structure with other samples.


.. conda:package:: bioconductor-scale4c

   |downloads_bioconductor-scale4c| |docker_bioconductor-scale4c|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-smoothie: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scale4c

   and update with::

      conda update bioconductor-scale4c

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scale4c:<tag>

   (see `bioconductor-scale4c/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scale4c| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scale4c.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scale4c
   :alt:   (downloads)
.. |docker_bioconductor-scale4c| image:: https://quay.io/repository/biocontainers/bioconductor-scale4c/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scale4c
.. _`bioconductor-scale4c/tags`: https://quay.io/repository/biocontainers/bioconductor-scale4c?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scale4c";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scale4c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scale4c/README.html
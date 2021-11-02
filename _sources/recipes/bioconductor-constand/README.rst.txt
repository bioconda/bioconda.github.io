:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-constand'
.. highlight: bash

bioconductor-constand
=====================

.. conda:recipe:: bioconductor-constand
   :replaces_section_title:
   :noindex:

   Data normalization by matrix raking

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/CONSTANd.html
   :license: file LICENSE
   :recipe: /`bioconductor-constand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-constand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-constand/meta.yaml>`_

   Normalizes a data matrix \`data\` by raking \(using the RAS method by Bacharach\, see references\) the Nrows by Ncols matrix such that the row means and column means equal 1. The result is a normalized data matrix \`K\=RAS\`\, a product of row mulipliers \`R\` and column multipliers \`S\` with the original matrix \`A\`. Missing information needs to be presented as \`NA\` values and not as zero values\, because CONSTANd is able to ignore missing values when calculating the mean. Using CONSTANd normalization allows for the direct comparison of values between samples within the same and even across different CONSTANd\-normalized data matrices.


.. conda:package:: bioconductor-constand

   |downloads_bioconductor-constand| |docker_bioconductor-constand|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-constand

   and update with::

      conda update bioconductor-constand

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-constand:<tag>

   (see `bioconductor-constand/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-constand| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-constand.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-constand
   :alt:   (downloads)
.. |docker_bioconductor-constand| image:: https://quay.io/repository/biocontainers/bioconductor-constand/status
   :target: https://quay.io/repository/biocontainers/bioconductor-constand
.. _`bioconductor-constand/tags`: https://quay.io/repository/biocontainers/bioconductor-constand?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-constand";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-constand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-constand/README.html
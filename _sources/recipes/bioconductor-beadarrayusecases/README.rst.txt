:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beadarrayusecases'
.. highlight: bash

bioconductor-beadarrayusecases
==============================

.. conda:recipe:: bioconductor-beadarrayusecases
   :replaces_section_title:
   :noindex:

   Analysing Illumina BeadArray expression data using Bioconductor

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/BeadArrayUseCases.html
   :license: GPL-2
   :recipe: /`bioconductor-beadarrayusecases <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarrayusecases>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarrayusecases/meta.yaml>`_

   Example data files and use cases for processing Illumina BeadArray expression data using Bioconductor


.. conda:package:: bioconductor-beadarrayusecases

   |downloads_bioconductor-beadarrayusecases| |docker_bioconductor-beadarrayusecases|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-beadarray: ``>=2.48.0,<2.49.0``
   :depends bioconductor-data-packages: ``>=20221107``
   :depends bioconductor-geoquery: ``>=2.66.0,<2.67.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beadarrayusecases

   and update with::

      conda update bioconductor-beadarrayusecases

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beadarrayusecases:<tag>

   (see `bioconductor-beadarrayusecases/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beadarrayusecases| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beadarrayusecases.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beadarrayusecases
   :alt:   (downloads)
.. |docker_bioconductor-beadarrayusecases| image:: https://quay.io/repository/biocontainers/bioconductor-beadarrayusecases/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beadarrayusecases
.. _`bioconductor-beadarrayusecases/tags`: https://quay.io/repository/biocontainers/bioconductor-beadarrayusecases?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beadarrayusecases";
        var versions = ["1.36.0","1.32.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beadarrayusecases/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beadarrayusecases/README.html
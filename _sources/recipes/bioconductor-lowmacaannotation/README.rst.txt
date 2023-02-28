:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lowmacaannotation'
.. highlight: bash

bioconductor-lowmacaannotation
==============================

.. conda:recipe:: bioconductor-lowmacaannotation
   :replaces_section_title:
   :noindex:

   LowMACAAnnotation

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/LowMACAAnnotation.html
   :license: GPL-3
   :recipe: /`bioconductor-lowmacaannotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lowmacaannotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lowmacaannotation/meta.yaml>`_

   A package containing the data to run LowMACA package.


.. conda:package:: bioconductor-lowmacaannotation

   |downloads_bioconductor-lowmacaannotation| |docker_bioconductor-lowmacaannotation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.3-10</code>,  <code>0.99.3-9</code>,  <code>0.99.3-8</code>,  <code>0.99.3-7</code>,  <code>0.99.3-6</code>,  <code>0.99.3-5</code>,  <code>0.99.3-4</code>,  <code>0.99.3-3</code>,  <code>0.99.3-2</code>,  </span></summary>
      

      ``0.99.3-10``,  ``0.99.3-9``,  ``0.99.3-8``,  ``0.99.3-7``,  ``0.99.3-6``,  ``0.99.3-5``,  ``0.99.3-4``,  ``0.99.3-3``,  ``0.99.3-2``,  ``0.99.3-1``,  ``0.99.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221103``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lowmacaannotation

   and update with::

      conda update bioconductor-lowmacaannotation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lowmacaannotation:<tag>

   (see `bioconductor-lowmacaannotation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lowmacaannotation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lowmacaannotation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lowmacaannotation
   :alt:   (downloads)
.. |docker_bioconductor-lowmacaannotation| image:: https://quay.io/repository/biocontainers/bioconductor-lowmacaannotation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lowmacaannotation
.. _`bioconductor-lowmacaannotation/tags`: https://quay.io/repository/biocontainers/bioconductor-lowmacaannotation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lowmacaannotation";
        var versions = ["0.99.3","0.99.3","0.99.3","0.99.3","0.99.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lowmacaannotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lowmacaannotation/README.html
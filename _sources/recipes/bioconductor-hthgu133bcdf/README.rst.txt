:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hthgu133bcdf'
.. highlight: bash

bioconductor-hthgu133bcdf
=========================

.. conda:recipe:: bioconductor-hthgu133bcdf
   :replaces_section_title:
   :noindex:

   hthgu133bcdf

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/hthgu133bcdf.html
   :license: LGPL
   :recipe: /`bioconductor-hthgu133bcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hthgu133bcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hthgu133bcdf/meta.yaml>`_

   A package containing an environment representing the HT\_HG\-U133B.cdf file.


.. conda:package:: bioconductor-hthgu133bcdf

   |downloads_bioconductor-hthgu133bcdf| |docker_bioconductor-hthgu133bcdf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  <code>2.18.0-3</code>,  <code>2.18.0-2</code>,  </span></summary>
      

      ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hthgu133bcdf

   and update with::

      conda update bioconductor-hthgu133bcdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hthgu133bcdf:<tag>

   (see `bioconductor-hthgu133bcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hthgu133bcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hthgu133bcdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hthgu133bcdf
   :alt:   (downloads)
.. |docker_bioconductor-hthgu133bcdf| image:: https://quay.io/repository/biocontainers/bioconductor-hthgu133bcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hthgu133bcdf
.. _`bioconductor-hthgu133bcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-hthgu133bcdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hthgu133bcdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hthgu133bcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hthgu133bcdf/README.html
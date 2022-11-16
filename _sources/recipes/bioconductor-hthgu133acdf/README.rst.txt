:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hthgu133acdf'
.. highlight: bash

bioconductor-hthgu133acdf
=========================

.. conda:recipe:: bioconductor-hthgu133acdf
   :replaces_section_title:
   :noindex:

   hthgu133acdf

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/hthgu133acdf.html
   :license: LGPL
   :recipe: /`bioconductor-hthgu133acdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hthgu133acdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hthgu133acdf/meta.yaml>`_

   A package containing an environment representing the HT\_HG\-U133A.cdf file.


.. conda:package:: bioconductor-hthgu133acdf

   |downloads_bioconductor-hthgu133acdf| |docker_bioconductor-hthgu133acdf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  <code>2.18.0-3</code>,  <code>2.18.0-2</code>,  </span></summary>
      

      ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hthgu133acdf

   and update with::

      conda update bioconductor-hthgu133acdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hthgu133acdf:<tag>

   (see `bioconductor-hthgu133acdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hthgu133acdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hthgu133acdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hthgu133acdf
   :alt:   (downloads)
.. |docker_bioconductor-hthgu133acdf| image:: https://quay.io/repository/biocontainers/bioconductor-hthgu133acdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hthgu133acdf
.. _`bioconductor-hthgu133acdf/tags`: https://quay.io/repository/biocontainers/bioconductor-hthgu133acdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hthgu133acdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hthgu133acdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hthgu133acdf/README.html
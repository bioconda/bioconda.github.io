:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cyp450cdf'
.. highlight: bash

bioconductor-cyp450cdf
======================

.. conda:recipe:: bioconductor-cyp450cdf
   :replaces_section_title:
   :noindex:

   cyp450cdf

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/cyp450cdf.html
   :license: LGPL
   :recipe: /`bioconductor-cyp450cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cyp450cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cyp450cdf/meta.yaml>`_

   A package containing an environment representing the CYP450.CDF file.


.. conda:package:: bioconductor-cyp450cdf

   |downloads_bioconductor-cyp450cdf| |docker_bioconductor-cyp450cdf|

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

      conda install bioconductor-cyp450cdf

   and update with::

      conda update bioconductor-cyp450cdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cyp450cdf:<tag>

   (see `bioconductor-cyp450cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cyp450cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cyp450cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cyp450cdf
   :alt:   (downloads)
.. |docker_bioconductor-cyp450cdf| image:: https://quay.io/repository/biocontainers/bioconductor-cyp450cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cyp450cdf
.. _`bioconductor-cyp450cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-cyp450cdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cyp450cdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cyp450cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cyp450cdf/README.html
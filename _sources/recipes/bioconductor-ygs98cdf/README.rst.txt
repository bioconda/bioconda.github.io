:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ygs98cdf'
.. highlight: bash

bioconductor-ygs98cdf
=====================

.. conda:recipe:: bioconductor-ygs98cdf
   :replaces_section_title:
   :noindex:

   ygs98cdf

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/ygs98cdf.html
   :license: LGPL
   :recipe: /`bioconductor-ygs98cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ygs98cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ygs98cdf/meta.yaml>`_

   A package containing an environment representing the YG\_S98.cdf file.


.. conda:package:: bioconductor-ygs98cdf

   |downloads_bioconductor-ygs98cdf| |docker_bioconductor-ygs98cdf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-11</code>,  <code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  <code>2.18.0-3</code>,  </span></summary>
      

      ``2.18.0-11``,  ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ygs98cdf

   and update with::

      conda update bioconductor-ygs98cdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ygs98cdf:<tag>

   (see `bioconductor-ygs98cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ygs98cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ygs98cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ygs98cdf
   :alt:   (downloads)
.. |docker_bioconductor-ygs98cdf| image:: https://quay.io/repository/biocontainers/bioconductor-ygs98cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ygs98cdf
.. _`bioconductor-ygs98cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-ygs98cdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ygs98cdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ygs98cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ygs98cdf/README.html
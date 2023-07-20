:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133bcdf'
.. highlight: bash

bioconductor-hgu133bcdf
=======================

.. conda:recipe:: bioconductor-hgu133bcdf
   :replaces_section_title:
   :noindex:

   hgu133bcdf

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/hgu133bcdf.html
   :license: LGPL
   :recipe: /`bioconductor-hgu133bcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133bcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133bcdf/meta.yaml>`_

   A package containing an environment representing the HG\-U133B.cdf file.


.. conda:package:: bioconductor-hgu133bcdf

   |downloads_bioconductor-hgu133bcdf| |docker_bioconductor-hgu133bcdf|

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

      conda install bioconductor-hgu133bcdf

   and update with::

      conda update bioconductor-hgu133bcdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu133bcdf:<tag>

   (see `bioconductor-hgu133bcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133bcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133bcdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu133bcdf
   :alt:   (downloads)
.. |docker_bioconductor-hgu133bcdf| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133bcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133bcdf
.. _`bioconductor-hgu133bcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133bcdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu133bcdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133bcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133bcdf/README.html
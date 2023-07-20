:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maizecdf'
.. highlight: bash

bioconductor-maizecdf
=====================

.. conda:recipe:: bioconductor-maizecdf
   :replaces_section_title:
   :noindex:

   maizecdf

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/maizecdf.html
   :license: LGPL
   :recipe: /`bioconductor-maizecdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maizecdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maizecdf/meta.yaml>`_

   A package containing an environment representing the Maize.cdf file.


.. conda:package:: bioconductor-maizecdf

   |downloads_bioconductor-maizecdf| |docker_bioconductor-maizecdf|

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

      conda install bioconductor-maizecdf

   and update with::

      conda update bioconductor-maizecdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maizecdf:<tag>

   (see `bioconductor-maizecdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maizecdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maizecdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maizecdf
   :alt:   (downloads)
.. |docker_bioconductor-maizecdf| image:: https://quay.io/repository/biocontainers/bioconductor-maizecdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maizecdf
.. _`bioconductor-maizecdf/tags`: https://quay.io/repository/biocontainers/bioconductor-maizecdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-maizecdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maizecdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maizecdf/README.html
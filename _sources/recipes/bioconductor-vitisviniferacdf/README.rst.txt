:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vitisviniferacdf'
.. highlight: bash

bioconductor-vitisviniferacdf
=============================

.. conda:recipe:: bioconductor-vitisviniferacdf
   :replaces_section_title:
   :noindex:

   vitisviniferacdf

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/vitisviniferacdf.html
   :license: LGPL
   :recipe: /`bioconductor-vitisviniferacdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vitisviniferacdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vitisviniferacdf/meta.yaml>`_

   A package containing an environment representing the Vitis\_Vinifera.cdf file.


.. conda:package:: bioconductor-vitisviniferacdf

   |downloads_bioconductor-vitisviniferacdf| |docker_bioconductor-vitisviniferacdf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-12</code>,  <code>2.18.0-11</code>,  <code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  </span></summary>
      

      ``2.18.0-12``,  ``2.18.0-11``,  ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-1``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vitisviniferacdf

   and update with::

      conda update bioconductor-vitisviniferacdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vitisviniferacdf:<tag>

   (see `bioconductor-vitisviniferacdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vitisviniferacdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vitisviniferacdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vitisviniferacdf
   :alt:   (downloads)
.. |docker_bioconductor-vitisviniferacdf| image:: https://quay.io/repository/biocontainers/bioconductor-vitisviniferacdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vitisviniferacdf
.. _`bioconductor-vitisviniferacdf/tags`: https://quay.io/repository/biocontainers/bioconductor-vitisviniferacdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vitisviniferacdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vitisviniferacdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vitisviniferacdf/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iyer517'
.. highlight: bash

bioconductor-iyer517
====================

.. conda:recipe:: bioconductor-iyer517
   :replaces_section_title:
   :noindex:

   exprSets for Iyer\, Eisen et all 1999 Science paper

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/Iyer517.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iyer517 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iyer517>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iyer517/meta.yaml>`_

   representation of public Iyer data from http\:\/\/genome\-www.stanford.edu\/serum\/clusters.html


.. conda:package:: bioconductor-iyer517

   |downloads_bioconductor-iyer517| |docker_bioconductor-iyer517|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.31.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.31.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-data-packages: ``>=20221104``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iyer517

   and update with::

      conda update bioconductor-iyer517

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iyer517:<tag>

   (see `bioconductor-iyer517/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iyer517| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iyer517.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iyer517
   :alt:   (downloads)
.. |docker_bioconductor-iyer517| image:: https://quay.io/repository/biocontainers/bioconductor-iyer517/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iyer517
.. _`bioconductor-iyer517/tags`: https://quay.io/repository/biocontainers/bioconductor-iyer517?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iyer517";
        var versions = ["1.40.0","1.36.0","1.36.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iyer517/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iyer517/README.html
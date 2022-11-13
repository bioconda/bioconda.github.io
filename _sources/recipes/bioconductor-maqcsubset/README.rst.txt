:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maqcsubset'
.. highlight: bash

bioconductor-maqcsubset
=======================

.. conda:recipe:: bioconductor-maqcsubset
   :replaces_section_title:
   :noindex:

   Experimental Data Package\: MAQCsubset

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/MAQCsubset.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-maqcsubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maqcsubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maqcsubset/meta.yaml>`_

   Data Package automatically created on Sun Nov 19 15\:59\:29 2006.


.. conda:package:: bioconductor-maqcsubset

   |downloads_bioconductor-maqcsubset| |docker_bioconductor-maqcsubset|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-data-packages: ``>=20221111``
   :depends bioconductor-lumi: ``>=2.50.0,<2.51.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-maqcsubset

   and update with::

      conda update bioconductor-maqcsubset

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maqcsubset:<tag>

   (see `bioconductor-maqcsubset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maqcsubset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maqcsubset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maqcsubset
   :alt:   (downloads)
.. |docker_bioconductor-maqcsubset| image:: https://quay.io/repository/biocontainers/bioconductor-maqcsubset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maqcsubset
.. _`bioconductor-maqcsubset/tags`: https://quay.io/repository/biocontainers/bioconductor-maqcsubset?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-maqcsubset";
        var versions = ["1.36.0","1.32.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maqcsubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maqcsubset/README.html
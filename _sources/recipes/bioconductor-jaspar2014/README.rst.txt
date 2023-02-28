:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-jaspar2014'
.. highlight: bash

bioconductor-jaspar2014
=======================

.. conda:recipe:: bioconductor-jaspar2014
   :replaces_section_title:
   :noindex:

   Data package for JASPAR

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/JASPAR2014.html
   :license: GPL-2
   :recipe: /`bioconductor-jaspar2014 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2014>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-jaspar2014/meta.yaml>`_

   Data package for JASPAR 2014. To search this databases\, please use the package TFBSTools.


.. conda:package:: bioconductor-jaspar2014

   |downloads_bioconductor-jaspar2014| |docker_bioconductor-jaspar2014|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-data-packages: ``>=20221107``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-jaspar2014

   and update with::

      conda update bioconductor-jaspar2014

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-jaspar2014:<tag>

   (see `bioconductor-jaspar2014/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-jaspar2014| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-jaspar2014.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-jaspar2014
   :alt:   (downloads)
.. |docker_bioconductor-jaspar2014| image:: https://quay.io/repository/biocontainers/bioconductor-jaspar2014/status
   :target: https://quay.io/repository/biocontainers/bioconductor-jaspar2014
.. _`bioconductor-jaspar2014/tags`: https://quay.io/repository/biocontainers/bioconductor-jaspar2014?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-jaspar2014";
        var versions = ["1.34.0","1.30.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-jaspar2014/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-jaspar2014/README.html
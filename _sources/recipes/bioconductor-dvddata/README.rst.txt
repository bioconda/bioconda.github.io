:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dvddata'
.. highlight: bash

bioconductor-dvddata
====================

.. conda:recipe:: bioconductor-dvddata
   :replaces_section_title:
   :noindex:

   Drug versus Disease Data

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/DvDdata.html
   :license: GPL-3
   :recipe: /`bioconductor-dvddata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dvddata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dvddata/meta.yaml>`_

   Data package which provides default drug and disease expression profiles for the DvD package.


.. conda:package:: bioconductor-dvddata

   |downloads_bioconductor-dvddata| |docker_bioconductor-dvddata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dvddata

   and update with::

      conda update bioconductor-dvddata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dvddata:<tag>

   (see `bioconductor-dvddata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dvddata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dvddata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dvddata
   :alt:   (downloads)
.. |docker_bioconductor-dvddata| image:: https://quay.io/repository/biocontainers/bioconductor-dvddata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dvddata
.. _`bioconductor-dvddata/tags`: https://quay.io/repository/biocontainers/bioconductor-dvddata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dvddata";
        var versions = ["1.30.0","1.30.0","1.28.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dvddata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dvddata/README.html
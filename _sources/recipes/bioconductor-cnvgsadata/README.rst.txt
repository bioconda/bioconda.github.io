:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvgsadata'
.. highlight: bash

bioconductor-cnvgsadata
=======================

.. conda:recipe:: bioconductor-cnvgsadata
   :replaces_section_title:
   :noindex:

   Data used in the vignette of the cnvGSA package

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/cnvGSAdata.html
   :license: LGPL
   :recipe: /`bioconductor-cnvgsadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvgsadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvgsadata/meta.yaml>`_

   This package contains the data used in the vignette of the cnvGSA package.


.. conda:package:: bioconductor-cnvgsadata

   |downloads_bioconductor-cnvgsadata| |docker_bioconductor-cnvgsadata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-cnvgsa: ``>=1.44.0,<1.45.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnvgsadata

   and update with::

      conda update bioconductor-cnvgsadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnvgsadata:<tag>

   (see `bioconductor-cnvgsadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnvgsadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvgsadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnvgsadata
   :alt:   (downloads)
.. |docker_bioconductor-cnvgsadata| image:: https://quay.io/repository/biocontainers/bioconductor-cnvgsadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvgsadata
.. _`bioconductor-cnvgsadata/tags`: https://quay.io/repository/biocontainers/bioconductor-cnvgsadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnvgsadata";
        var versions = ["1.36.0","1.34.0","1.30.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvgsadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvgsadata/README.html
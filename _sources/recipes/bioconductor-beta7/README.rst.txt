:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beta7'
.. highlight: bash

bioconductor-beta7
==================

.. conda:recipe:: bioconductor-beta7
   :replaces_section_title:
   :noindex:

   Rodriguez et al. \(2004\) Differential Gene Expression by Memory\/Effector T Helper Cells Bearing the Gut\-Homing Receptor Integrin alpha4 beta7.

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/beta7.html
   :license: LGPL
   :recipe: /`bioconductor-beta7 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beta7>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beta7/meta.yaml>`_

   Data from 6 gpr files aims to identify differential expressed genes between the beta 7\+ and beta 7\- memory T helper cells.


.. conda:package:: bioconductor-beta7

   |downloads_bioconductor-beta7| |docker_bioconductor-beta7|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.35.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.35.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221103``
   :depends bioconductor-marray: ``>=1.76.0,<1.77.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beta7

   and update with::

      conda update bioconductor-beta7

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beta7:<tag>

   (see `bioconductor-beta7/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beta7| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beta7.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beta7
   :alt:   (downloads)
.. |docker_bioconductor-beta7| image:: https://quay.io/repository/biocontainers/bioconductor-beta7/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beta7
.. _`bioconductor-beta7/tags`: https://quay.io/repository/biocontainers/bioconductor-beta7?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beta7";
        var versions = ["1.35.0","1.32.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beta7/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beta7/README.html
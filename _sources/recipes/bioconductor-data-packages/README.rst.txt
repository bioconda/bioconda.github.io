:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-data-packages'
.. highlight: bash

bioconductor-data-packages
==========================

.. conda:recipe:: bioconductor-data-packages
   :replaces_section_title:
   :noindex:

   A package to enable downloading and installation of Bioconductor data packages

   :homepage: https://github.com/bioconda/bioconda-utils
   :license: MIT
   :recipe: /`bioconductor-data-packages <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-data-packages>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-data-packages/meta.yaml>`_

   


.. conda:package:: bioconductor-data-packages

   |downloads_bioconductor-data-packages| |docker_bioconductor-data-packages|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20230718-1</code>,  <code>20230717-1</code>,  <code>20230717-0</code>,  <code>20230713-0</code>,  <code>20230706-0</code>,  <code>20230420-0</code>,  <code>20230202-0</code>,  <code>20221112-0</code>,  <code>20221111-3</code>,  </span></summary>
      

      ``20230718-1``,  ``20230717-1``,  ``20230717-0``,  ``20230713-0``,  ``20230706-0``,  ``20230420-0``,  ``20230202-0``,  ``20221112-0``,  ``20221111-3``,  ``20221111-2``,  ``20221111-1``,  ``20221111-0``,  ``20221110-2``,  ``20221110-1``,  ``20221110-0``,  ``20221109-2``,  ``20221109-1``,  ``20221109-0``,  ``20221108-1``,  ``20221108-0``,  ``20221107-1``,  ``20221106-3``,  ``20221105-1``,  ``20221104-2``,  ``20221103-0``,  ``20221027-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: 
   :depends r-base: 
   :depends yq: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-data-packages

   and update with::

      conda update bioconductor-data-packages

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-data-packages:<tag>

   (see `bioconductor-data-packages/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-data-packages| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-data-packages.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-data-packages
   :alt:   (downloads)
.. |docker_bioconductor-data-packages| image:: https://quay.io/repository/biocontainers/bioconductor-data-packages/status
   :target: https://quay.io/repository/biocontainers/bioconductor-data-packages
.. _`bioconductor-data-packages/tags`: https://quay.io/repository/biocontainers/bioconductor-data-packages?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-data-packages";
        var versions = ["20230718","20230717","20230717","20230713","20230706"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-data-packages/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-data-packages/README.html
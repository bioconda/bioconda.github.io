:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hapmap100kxba'
.. highlight: bash

bioconductor-hapmap100kxba
==========================

.. conda:recipe:: bioconductor-hapmap100kxba
   :replaces_section_title:
   :noindex:

   Sample data \- Hapmap 100K XBA Affymetrix

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/hapmap100kxba.html
   :license: GPL
   :recipe: /`bioconductor-hapmap100kxba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapmap100kxba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapmap100kxba/meta.yaml>`_

   Sample dataset obtained from http\:\/\/www.hapmap.org


.. conda:package:: bioconductor-hapmap100kxba

   |downloads_bioconductor-hapmap100kxba| |docker_bioconductor-hapmap100kxba|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.39.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.31.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.39.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.31.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221103``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hapmap100kxba

   and update with::

      conda update bioconductor-hapmap100kxba

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hapmap100kxba:<tag>

   (see `bioconductor-hapmap100kxba/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hapmap100kxba| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hapmap100kxba.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hapmap100kxba
   :alt:   (downloads)
.. |docker_bioconductor-hapmap100kxba| image:: https://quay.io/repository/biocontainers/bioconductor-hapmap100kxba/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hapmap100kxba
.. _`bioconductor-hapmap100kxba/tags`: https://quay.io/repository/biocontainers/bioconductor-hapmap100kxba?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hapmap100kxba";
        var versions = ["1.39.0","1.36.0","1.36.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hapmap100kxba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hapmap100kxba/README.html
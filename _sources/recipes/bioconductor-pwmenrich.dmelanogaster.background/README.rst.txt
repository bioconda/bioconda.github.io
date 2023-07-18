:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pwmenrich.dmelanogaster.background'
.. highlight: bash

bioconductor-pwmenrich.dmelanogaster.background
===============================================

.. conda:recipe:: bioconductor-pwmenrich.dmelanogaster.background
   :replaces_section_title:
   :noindex:

   D. melanogaster background for PWMEnrich

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/PWMEnrich.Dmelanogaster.background.html
   :license: GPL-3
   :recipe: /`bioconductor-pwmenrich.dmelanogaster.background <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich.dmelanogaster.background>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich.dmelanogaster.background/meta.yaml>`_

   PWMEnrich pre\-compiled background objects for Drosophila melanogaster and MotifDb D. melanogaster motifs.


.. conda:package:: bioconductor-pwmenrich.dmelanogaster.background

   |downloads_bioconductor-pwmenrich.dmelanogaster.background| |docker_bioconductor-pwmenrich.dmelanogaster.background|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.34.0-0</code>,  <code>4.32.0-0</code>,  <code>4.28.0-1</code>,  <code>4.28.0-0</code>,  <code>4.26.1-0</code>,  <code>4.24.0-1</code>,  <code>4.24.0-0</code>,  <code>4.22.0-0</code>,  <code>4.20.0-0</code>,  </span></summary>
      

      ``4.34.0-0``,  ``4.32.0-0``,  ``4.28.0-1``,  ``4.28.0-0``,  ``4.26.1-0``,  ``4.24.0-1``,  ``4.24.0-0``,  ``4.22.0-0``,  ``4.20.0-0``,  ``4.18.0-1``,  ``4.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-pwmenrich: ``>=4.36.0,<4.37.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pwmenrich.dmelanogaster.background

   and update with::

      conda update bioconductor-pwmenrich.dmelanogaster.background

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pwmenrich.dmelanogaster.background:<tag>

   (see `bioconductor-pwmenrich.dmelanogaster.background/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pwmenrich.dmelanogaster.background| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pwmenrich.dmelanogaster.background.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pwmenrich.dmelanogaster.background
   :alt:   (downloads)
.. |docker_bioconductor-pwmenrich.dmelanogaster.background| image:: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.dmelanogaster.background/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.dmelanogaster.background
.. _`bioconductor-pwmenrich.dmelanogaster.background/tags`: https://quay.io/repository/biocontainers/bioconductor-pwmenrich.dmelanogaster.background?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pwmenrich.dmelanogaster.background";
        var versions = ["4.34.0","4.32.0","4.28.0","4.28.0","4.26.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pwmenrich.dmelanogaster.background/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pwmenrich.dmelanogaster.background/README.html
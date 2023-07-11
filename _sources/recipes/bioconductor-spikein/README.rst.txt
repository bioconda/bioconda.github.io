:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spikein'
.. highlight: bash

bioconductor-spikein
====================

.. conda:recipe:: bioconductor-spikein
   :replaces_section_title:
   :noindex:

   Affymetrix Spike\-In Experiment Data

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/SpikeIn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spikein <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spikein>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spikein/meta.yaml>`_

   Contains the HGU133 and HGU95 spikein experiment data.


.. conda:package:: bioconductor-spikein

   |downloads_bioconductor-spikein| |docker_bioconductor-spikein|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spikein

   and update with::

      conda update bioconductor-spikein

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spikein:<tag>

   (see `bioconductor-spikein/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spikein| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spikein.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spikein
   :alt:   (downloads)
.. |docker_bioconductor-spikein| image:: https://quay.io/repository/biocontainers/bioconductor-spikein/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spikein
.. _`bioconductor-spikein/tags`: https://quay.io/repository/biocontainers/bioconductor-spikein?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spikein";
        var versions = ["1.42.0","1.40.0","1.36.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spikein/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spikein/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.mrna'
.. highlight: bash

bioconductor-rtcga.mrna
=======================

.. conda:recipe:: bioconductor-rtcga.mrna
   :replaces_section_title:
   :noindex:

   mRNA datasets from The Cancer Genome Atlas Project

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/RTCGA.mRNA.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.mrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.mrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.mrna/meta.yaml>`_

   Package provides mRNA datasets from The Cancer Genome Atlas Project for all available cohorts types from http\:\/\/gdac.broadinstitute.org\/. Data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/Gene\+expression\+data Data from 2015\-11\-01 snapshot.


.. conda:package:: bioconductor-rtcga.mrna

   |downloads_bioconductor-rtcga.mrna| |docker_bioconductor-rtcga.mrna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rtcga: ``>=1.24.0,<1.25.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtcga.mrna

   and update with::

      conda update bioconductor-rtcga.mrna

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtcga.mrna:<tag>

   (see `bioconductor-rtcga.mrna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtcga.mrna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.mrna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.mrna
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.mrna| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.mrna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.mrna
.. _`bioconductor-rtcga.mrna/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.mrna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtcga.mrna";
        var versions = ["1.22.0","1.22.0","1.20.0","1.18.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.mrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.mrna/README.html
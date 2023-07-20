:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.rppa'
.. highlight: bash

bioconductor-rtcga.rppa
=======================

.. conda:recipe:: bioconductor-rtcga.rppa
   :replaces_section_title:
   :noindex:

   RPPA datasets from The Cancer Genome Atlas Project

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/RTCGA.RPPA.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.rppa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.rppa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.rppa/meta.yaml>`_

   Package provides RPPA datasets from The Cancer Genome Atlas Project for all available cohorts types from http\:\/\/gdac.broadinstitute.org\/. Data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/Protein\+Array \+Data\+Format\+Specification\?src\=search


.. conda:package:: bioconductor-rtcga.rppa

   |downloads_bioconductor-rtcga.rppa| |docker_bioconductor-rtcga.rppa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-rtcga: ``>=1.30.0,<1.31.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtcga.rppa

   and update with::

      conda update bioconductor-rtcga.rppa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtcga.rppa:<tag>

   (see `bioconductor-rtcga.rppa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtcga.rppa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.rppa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.rppa
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.rppa| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.rppa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.rppa
.. _`bioconductor-rtcga.rppa/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.rppa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtcga.rppa";
        var versions = ["1.28.0","1.25.0","1.22.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.rppa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.rppa/README.html
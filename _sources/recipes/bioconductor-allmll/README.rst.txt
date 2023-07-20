:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-allmll'
.. highlight: bash

bioconductor-allmll
===================

.. conda:recipe:: bioconductor-allmll
   :replaces_section_title:
   :noindex:

   A subset of arrays from a large acute lymphoblastic leukemia \(ALL\) study

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/ALLMLL.html
   :license: GPL-2
   :recipe: /`bioconductor-allmll <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-allmll>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-allmll/meta.yaml>`_

   This package provides probe\-level data for 20 HGU133A and 20 HGU133B arrays which are a subset of arrays from a large ALL study. The data is for the MLL arrays. This data was published in Mary E. Ross\, Xiaodong Zhou\, Guangchun Song\, Sheila A. Shurtleff\, Kevin Girtman\, W. Kent Williams\, Hsi\-Che Liu\, Rami Mahfouz\, Susana C. Raimondi\, Noel Lenny\, Anami Patel\, and James R. Downing \(2003\) Classification of pediatric acute lymphoblastic leukemia by gene expression profiling Blood 102\: 2951\-2959


.. conda:package:: bioconductor-allmll

   |downloads_bioconductor-allmll| |docker_bioconductor-allmll|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-allmll

   and update with::

      conda update bioconductor-allmll

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-allmll:<tag>

   (see `bioconductor-allmll/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-allmll| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-allmll.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-allmll
   :alt:   (downloads)
.. |docker_bioconductor-allmll| image:: https://quay.io/repository/biocontainers/bioconductor-allmll/status
   :target: https://quay.io/repository/biocontainers/bioconductor-allmll
.. _`bioconductor-allmll/tags`: https://quay.io/repository/biocontainers/bioconductor-allmll?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-allmll";
        var versions = ["1.40.0","1.38.0","1.34.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-allmll/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-allmll/README.html
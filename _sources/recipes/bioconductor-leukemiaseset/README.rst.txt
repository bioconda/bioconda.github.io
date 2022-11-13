:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-leukemiaseset'
.. highlight: bash

bioconductor-leukemiaseset
==========================

.. conda:recipe:: bioconductor-leukemiaseset
   :replaces_section_title:
   :noindex:

   Leukemia\'s microarray gene expression data \(expressionSet\).

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/leukemiasEset.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-leukemiaseset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-leukemiaseset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-leukemiaseset/meta.yaml>`_

   Expressionset containing gene expresion data from 60 bone marrow samples of patients with one of the four main types of leukemia \(ALL\, AML\, CLL\, CML\) or non\-leukemia.


.. conda:package:: bioconductor-leukemiaseset

   |downloads_bioconductor-leukemiaseset| |docker_bioconductor-leukemiaseset|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-data-packages: ``>=20221104``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-leukemiaseset

   and update with::

      conda update bioconductor-leukemiaseset

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-leukemiaseset:<tag>

   (see `bioconductor-leukemiaseset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-leukemiaseset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-leukemiaseset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-leukemiaseset
   :alt:   (downloads)
.. |docker_bioconductor-leukemiaseset| image:: https://quay.io/repository/biocontainers/bioconductor-leukemiaseset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-leukemiaseset
.. _`bioconductor-leukemiaseset/tags`: https://quay.io/repository/biocontainers/bioconductor-leukemiaseset?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-leukemiaseset";
        var versions = ["1.34.0","1.30.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-leukemiaseset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-leukemiaseset/README.html
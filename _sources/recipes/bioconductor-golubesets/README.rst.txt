:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-golubesets'
.. highlight: bash

bioconductor-golubesets
=======================

.. conda:recipe:: bioconductor-golubesets
   :replaces_section_title:
   :noindex:

   exprSets for golub leukemia data

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/golubEsets.html
   :license: LGPL
   :recipe: /`bioconductor-golubesets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-golubesets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-golubesets/meta.yaml>`_

   representation of public golub data with some covariate data of provenance unknown to the maintainer at present\; now employs ExpressionSet format


.. conda:package:: bioconductor-golubesets

   |downloads_bioconductor-golubesets| |docker_bioconductor-golubesets|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-golubesets

   and update with::

      conda update bioconductor-golubesets

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-golubesets:<tag>

   (see `bioconductor-golubesets/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-golubesets| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-golubesets.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-golubesets
   :alt:   (downloads)
.. |docker_bioconductor-golubesets| image:: https://quay.io/repository/biocontainers/bioconductor-golubesets/status
   :target: https://quay.io/repository/biocontainers/bioconductor-golubesets
.. _`bioconductor-golubesets/tags`: https://quay.io/repository/biocontainers/bioconductor-golubesets?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-golubesets";
        var versions = ["1.36.0","1.34.0","1.32.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-golubesets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-golubesets/README.html
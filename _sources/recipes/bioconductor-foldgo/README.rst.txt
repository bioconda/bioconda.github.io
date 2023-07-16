:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-foldgo'
.. highlight: bash

bioconductor-foldgo
===================

.. conda:recipe:: bioconductor-foldgo
   :replaces_section_title:
   :noindex:

   Package for Fold\-specific GO Terms Recognition

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/FoldGO.html
   :license: GPL-3
   :recipe: /`bioconductor-foldgo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-foldgo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-foldgo/meta.yaml>`_

   FoldGO is a package designed to annotate gene sets derived from expression experiments and identify fold\-change\-specific GO terms.


.. conda:package:: bioconductor-foldgo

   |downloads_bioconductor-foldgo| |docker_bioconductor-foldgo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.7.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.3-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-topgo: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-tidyr: ``>=0.8.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-foldgo

   and update with::

      conda update bioconductor-foldgo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-foldgo:<tag>

   (see `bioconductor-foldgo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-foldgo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-foldgo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-foldgo
   :alt:   (downloads)
.. |docker_bioconductor-foldgo| image:: https://quay.io/repository/biocontainers/bioconductor-foldgo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-foldgo
.. _`bioconductor-foldgo/tags`: https://quay.io/repository/biocontainers/bioconductor-foldgo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-foldgo";
        var versions = ["1.18.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-foldgo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-foldgo/README.html
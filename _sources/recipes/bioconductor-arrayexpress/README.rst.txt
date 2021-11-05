:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arrayexpress'
.. highlight: bash

bioconductor-arrayexpress
=========================

.. conda:recipe:: bioconductor-arrayexpress
   :replaces_section_title:
   :noindex:

   Access the ArrayExpress Microarray Database at EBI and build Bioconductor data structures\: ExpressionSet\, AffyBatch\, NChannelSet

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ArrayExpress.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-arrayexpress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayexpress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayexpress/meta.yaml>`_

   Access the ArrayExpress Repository at EBI and build Bioconductor data structures\: ExpressionSet\, AffyBatch\, NChannelSet


.. conda:package:: bioconductor-arrayexpress

   |downloads_bioconductor-arrayexpress| |docker_bioconductor-arrayexpress|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-oligo: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arrayexpress

   and update with::

      conda update bioconductor-arrayexpress

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-arrayexpress:<tag>

   (see `bioconductor-arrayexpress/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-arrayexpress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arrayexpress.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arrayexpress
   :alt:   (downloads)
.. |docker_bioconductor-arrayexpress| image:: https://quay.io/repository/biocontainers/bioconductor-arrayexpress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arrayexpress
.. _`bioconductor-arrayexpress/tags`: https://quay.io/repository/biocontainers/bioconductor-arrayexpress?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-arrayexpress";
        var versions = ["1.54.0","1.52.0","1.50.0","1.50.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arrayexpress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arrayexpress/README.html
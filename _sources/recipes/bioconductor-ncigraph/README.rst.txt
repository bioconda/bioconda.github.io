:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ncigraph'
.. highlight: bash

bioconductor-ncigraph
=====================

.. conda:recipe:: bioconductor-ncigraph
   :replaces_section_title:
   :noindex:

   Pathways from the NCI Pathways Database

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/NCIgraph.html
   :license: GPL-3
   :recipe: /`bioconductor-ncigraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncigraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncigraph/meta.yaml>`_
   :links: biotools: :biotools:`ncigraph`, doi: :doi:`10.1038/nmeth.3252`

   Provides various methods to load the pathways from the NCI Pathways Database in R graph objects and to re\-format them.


.. conda:package:: bioconductor-ncigraph

   |downloads_bioconductor-ncigraph| |docker_bioconductor-ncigraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends bioconductor-kegggraph: ``>=1.60.0,<1.61.0``
   :depends bioconductor-rbgl: ``>=1.76.0,<1.77.0``
   :depends bioconductor-rcy3: ``>=2.20.0,<2.21.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-r.methodss3: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ncigraph

   and update with::

      conda update bioconductor-ncigraph

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ncigraph:<tag>

   (see `bioconductor-ncigraph/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ncigraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ncigraph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ncigraph
   :alt:   (downloads)
.. |docker_bioconductor-ncigraph| image:: https://quay.io/repository/biocontainers/bioconductor-ncigraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ncigraph
.. _`bioconductor-ncigraph/tags`: https://quay.io/repository/biocontainers/bioconductor-ncigraph?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ncigraph";
        var versions = ["1.48.0","1.46.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ncigraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ncigraph/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sparse-neighbors-search'
.. highlight: bash

sparse-neighbors-search
=======================

.. conda:recipe:: sparse-neighbors-search
   :replaces_section_title:
   :noindex:

   Approximate k\-nearest neighbors search on sparse datasets

   :homepage: https://github.com/joachimwolff/sparse-neighbors-search
   :license: MIT
   :recipe: /`sparse-neighbors-search <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparse-neighbors-search>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparse-neighbors-search/meta.yaml>`_

   


.. conda:package:: sparse-neighbors-search

   |downloads_sparse-neighbors-search| |docker_sparse-neighbors-search|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7-2</code>,  <code>0.7-1</code>,  <code>0.7-0</code>,  <code>0.6-1</code>,  <code>0.6-0</code>,  <code>0.5-0</code>,  <code>0.4-1</code>,  <code>0.4-0</code>,  <code>0.3-1</code>,  </span></summary>
      

      ``0.7-2``,  ``0.7-1``,  ``0.7-0``,  ``0.6-1``,  ``0.6-0``,  ``0.5-0``,  ``0.4-1``,  ``0.4-0``,  ``0.3-1``,  ``0.3-0``,  ``0.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.17``
   :depends numpy: ``>=1.23.3,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: ``>=0.21``
   :depends scipy: ``>=1.3``
   :depends umap-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sparse-neighbors-search

   and update with::

      conda update sparse-neighbors-search

   or use the docker container::

      docker pull quay.io/biocontainers/sparse-neighbors-search:<tag>

   (see `sparse-neighbors-search/tags`_ for valid values for ``<tag>``)


.. |downloads_sparse-neighbors-search| image:: https://img.shields.io/conda/dn/bioconda/sparse-neighbors-search.svg?style=flat
   :target: https://anaconda.org/bioconda/sparse-neighbors-search
   :alt:   (downloads)
.. |docker_sparse-neighbors-search| image:: https://quay.io/repository/biocontainers/sparse-neighbors-search/status
   :target: https://quay.io/repository/biocontainers/sparse-neighbors-search
.. _`sparse-neighbors-search/tags`: https://quay.io/repository/biocontainers/sparse-neighbors-search?tab=tags


.. raw:: html

    <script>
        var package = "sparse-neighbors-search";
        var versions = ["0.7","0.7","0.7","0.6","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sparse-neighbors-search/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sparse-neighbors-search/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fabiadata'
.. highlight: bash

bioconductor-fabiadata
======================

.. conda:recipe:: bioconductor-fabiadata
   :replaces_section_title:
   :noindex:

   Data sets for FABIA \(Factor Analysis for Bicluster Acquisition\)

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/fabiaData.html
   :license: LGPL (>= 2.1)
   :recipe: /`bioconductor-fabiadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fabiadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fabiadata/meta.yaml>`_

   Supplying gene expression data sets for the demos of the biclustering method \"Factor Analysis for Bicluster Acquisition\" \(FABIA\). The following three data sets are provided\: A\) breast cancer \(van\'t Veer\, Nature\, 2002\)\, B\) multiple tissues \(Su\, PNAS\, 2002\)\, and C\) diffuse large\-B\-cell lymphoma \(Rosenwald\, N Engl J Med\, 2002\).


.. conda:package:: bioconductor-fabiadata

   |downloads_bioconductor-fabiadata| |docker_bioconductor-fabiadata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.27.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fabiadata

   and update with::

      conda update bioconductor-fabiadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fabiadata:<tag>

   (see `bioconductor-fabiadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fabiadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fabiadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fabiadata
   :alt:   (downloads)
.. |docker_bioconductor-fabiadata| image:: https://quay.io/repository/biocontainers/bioconductor-fabiadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fabiadata
.. _`bioconductor-fabiadata/tags`: https://quay.io/repository/biocontainers/bioconductor-fabiadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fabiadata";
        var versions = ["1.38.0","1.36.0","1.32.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fabiadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fabiadata/README.html
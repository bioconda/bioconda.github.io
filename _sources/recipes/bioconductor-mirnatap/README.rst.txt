:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirnatap'
.. highlight: bash

bioconductor-mirnatap
=====================

.. conda:recipe:: bioconductor-mirnatap
   :replaces_section_title:
   :noindex:

   miRNAtap\: microRNA Targets \- Aggregated Predictions

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/miRNAtap.html
   :license: GPL-2
   :recipe: /`bioconductor-mirnatap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatap/meta.yaml>`_
   :links: biotools: :biotools:`mirnatap`, doi: :doi:`10.1038/nmeth.3252`

   The package facilitates implementation of workflows requiring miRNA predictions\, it allows to integrate ranked miRNA target predictions from multiple sources available online and aggregate them with various methods which improves quality of predictions above any of the single sources. Currently predictions are available for Homo sapiens\, Mus musculus and Rattus norvegicus \(the last one through homology translation\).


.. conda:package:: bioconductor-mirnatap

   |downloads_bioconductor-mirnatap| |docker_bioconductor-mirnatap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.23.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.23.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :depends r-plyr: 
   :depends r-rsqlite: 
   :depends r-sqldf: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirnatap

   and update with::

      conda update bioconductor-mirnatap

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirnatap:<tag>

   (see `bioconductor-mirnatap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirnatap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirnatap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirnatap
   :alt:   (downloads)
.. |docker_bioconductor-mirnatap| image:: https://quay.io/repository/biocontainers/bioconductor-mirnatap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirnatap
.. _`bioconductor-mirnatap/tags`: https://quay.io/repository/biocontainers/bioconductor-mirnatap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirnatap";
        var versions = ["1.26.0","1.24.0","1.24.0","1.23.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirnatap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirnatap/README.html
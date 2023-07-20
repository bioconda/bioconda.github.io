:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-egseadata'
.. highlight: bash

bioconductor-egseadata
======================

.. conda:recipe:: bioconductor-egseadata
   :replaces_section_title:
   :noindex:

   Gene set collections for the EGSEA package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/EGSEAdata.html
   :license: file LICENSE
   :recipe: /`bioconductor-egseadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egseadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-egseadata/meta.yaml>`_

   This package includes gene set collections that are used for the Ensemble of Gene Set Enrichment Analyses \(EGSEA\) method for gene set testing. It includes Human and Mouse versions of the MSidDB \(Subramanian\, et al. \(2005\) PNAS\, 102\(43\)\:15545\-15550\) and GeneSetDB \(Araki\, et al. \(2012\) FEBS Open Bio\, 2\:76\-82\) collections.


.. conda:package:: bioconductor-egseadata

   |downloads_bioconductor-egseadata| |docker_bioconductor-egseadata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-egseadata

   and update with::

      conda update bioconductor-egseadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-egseadata:<tag>

   (see `bioconductor-egseadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-egseadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-egseadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-egseadata
   :alt:   (downloads)
.. |docker_bioconductor-egseadata| image:: https://quay.io/repository/biocontainers/bioconductor-egseadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-egseadata
.. _`bioconductor-egseadata/tags`: https://quay.io/repository/biocontainers/bioconductor-egseadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-egseadata";
        var versions = ["1.28.0","1.26.0","1.25.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-egseadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-egseadata/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affycompatible'
.. highlight: bash

bioconductor-affycompatible
===========================

.. conda:recipe:: bioconductor-affycompatible
   :replaces_section_title:
   :noindex:

   Affymetrix GeneChip software compatibility

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/AffyCompatible.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-affycompatible <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycompatible>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affycompatible/meta.yaml>`_
   :links: biotools: :biotools:`affycompatible`, doi: :doi:`10.1038/nmeth.3252`

   This package provides an interface to Affymetrix chip annotation and sample attribute files. The package allows an easy way for users to download and manage local data bases of Affynmetrix NetAffx annotation files. The package also provides access to GeneChip Operating System \(GCOS\) and GeneChip Command Console \(AGCC\)\-compatible sample annotation files.


.. conda:package:: bioconductor-affycompatible

   |downloads_bioconductor-affycompatible| |docker_bioconductor-affycompatible|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcurl: ``>=0.8-1``
   :depends r-xml: ``>=2.8-1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affycompatible

   and update with::

      conda update bioconductor-affycompatible

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affycompatible:<tag>

   (see `bioconductor-affycompatible/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affycompatible| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affycompatible.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affycompatible
   :alt:   (downloads)
.. |docker_bioconductor-affycompatible| image:: https://quay.io/repository/biocontainers/bioconductor-affycompatible/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affycompatible
.. _`bioconductor-affycompatible/tags`: https://quay.io/repository/biocontainers/bioconductor-affycompatible?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affycompatible";
        var versions = ["1.54.0","1.52.0","1.50.0","1.50.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affycompatible/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affycompatible/README.html
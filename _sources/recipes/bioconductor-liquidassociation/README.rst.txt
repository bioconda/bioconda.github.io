:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-liquidassociation'
.. highlight: bash

bioconductor-liquidassociation
==============================

.. conda:recipe:: bioconductor-liquidassociation
   :replaces_section_title:
   :noindex:

   LiquidAssociation

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/LiquidAssociation.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-liquidassociation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-liquidassociation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-liquidassociation/meta.yaml>`_
   :links: biotools: :biotools:`liquidassociation`, doi: :doi:`10.1038/nmeth.3252`

   The package contains functions for calculate direct and model\-based estimators for liquid association. It also provides functions for testing the existence of liquid association given a gene triplet data.


.. conda:package:: bioconductor-liquidassociation

   |downloads_bioconductor-liquidassociation| |docker_bioconductor-liquidassociation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.38.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.38.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-org.sc.sgd.db: ``>=3.14.0,<3.15.0``
   :depends bioconductor-yeastcc: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-geepack: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-liquidassociation

   and update with::

      conda update bioconductor-liquidassociation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-liquidassociation:<tag>

   (see `bioconductor-liquidassociation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-liquidassociation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-liquidassociation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-liquidassociation
   :alt:   (downloads)
.. |docker_bioconductor-liquidassociation| image:: https://quay.io/repository/biocontainers/bioconductor-liquidassociation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-liquidassociation
.. _`bioconductor-liquidassociation/tags`: https://quay.io/repository/biocontainers/bioconductor-liquidassociation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-liquidassociation";
        var versions = ["1.48.0","1.46.0","1.44.0","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-liquidassociation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-liquidassociation/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bicare'
.. highlight: bash

bioconductor-bicare
===================

.. conda:recipe:: bioconductor-bicare
   :replaces_section_title:
   :noindex:

   Biclustering Analysis and Results Exploration

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/BicARE.html
   :license: GPL-2
   :recipe: /`bioconductor-bicare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bicare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bicare/meta.yaml>`_
   :links: biotools: :biotools:`bicare`, doi: :doi:`10.1038/nmeth.3252`

   Biclustering Analysis and Results Exploration


.. conda:package:: bioconductor-bicare

   |downloads_bioconductor-bicare| |docker_bioconductor-bicare|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-gseabase: ``>=1.56.0,<1.57.0``
   :depends bioconductor-multtest: ``>=2.50.0,<2.51.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bicare

   and update with::

      conda update bioconductor-bicare

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bicare:<tag>

   (see `bioconductor-bicare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bicare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bicare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bicare
   :alt:   (downloads)
.. |docker_bioconductor-bicare| image:: https://quay.io/repository/biocontainers/bioconductor-bicare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bicare
.. _`bioconductor-bicare/tags`: https://quay.io/repository/biocontainers/bioconductor-bicare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bicare";
        var versions = ["1.52.0","1.50.0","1.48.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bicare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bicare/README.html
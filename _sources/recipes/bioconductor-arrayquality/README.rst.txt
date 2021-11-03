:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arrayquality'
.. highlight: bash

bioconductor-arrayquality
=========================

.. conda:recipe:: bioconductor-arrayquality
   :replaces_section_title:
   :noindex:

   Assessing array quality on spotted arrays

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/arrayQuality.html
   :license: LGPL
   :recipe: /`bioconductor-arrayquality <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayquality>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrayquality/meta.yaml>`_
   :links: biotools: :biotools:`arrayquality`, doi: :doi:`10.1093/bioinformatics/btn647`

   Functions for performing print\-run and array level quality assessment.


.. conda:package:: bioconductor-arrayquality

   |downloads_bioconductor-arrayquality| |docker_bioconductor-arrayquality|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-marray: ``>=1.72.0,<1.73.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gridbase: 
   :depends r-hexbin: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arrayquality

   and update with::

      conda update bioconductor-arrayquality

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-arrayquality:<tag>

   (see `bioconductor-arrayquality/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-arrayquality| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arrayquality.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arrayquality
   :alt:   (downloads)
.. |docker_bioconductor-arrayquality| image:: https://quay.io/repository/biocontainers/bioconductor-arrayquality/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arrayquality
.. _`bioconductor-arrayquality/tags`: https://quay.io/repository/biocontainers/bioconductor-arrayquality?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-arrayquality";
        var versions = ["1.72.0","1.70.0","1.68.0","1.68.0","1.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arrayquality/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arrayquality/README.html
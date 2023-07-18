:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cghcall'
.. highlight: bash

bioconductor-cghcall
====================

.. conda:recipe:: bioconductor-cghcall
   :replaces_section_title:
   :noindex:

   Calling aberrations for array CGH tumor profiles.

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/CGHcall.html
   :license: GPL (http://www.gnu.org/copyleft/gpl.html)
   :recipe: /`bioconductor-cghcall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghcall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghcall/meta.yaml>`_
   :links: biotools: :biotools:`cghcall`, doi: :doi:`10.1093/bioinformatics/btm030`

   Calls aberrations for array CGH data using a six state mixture model as well as several biological concepts that are ignored by existing algorithms. Visualization of profiles is also provided.


.. conda:package:: bioconductor-cghcall

   |downloads_bioconductor-cghcall| |docker_bioconductor-cghcall|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.56.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-1</code>,  <code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.0-1</code>,  </span></summary>
      

      ``2.62.0-0``,  ``2.60.0-0``,  ``2.56.0-0``,  ``2.54.0-0``,  ``2.52.0-1``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-1``,  ``2.44.0-1``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.34.1-0``,  ``2.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-cghbase: ``>=1.60.0,<1.61.0``
   :depends bioconductor-dnacopy: ``>=1.74.0,<1.75.0``
   :depends bioconductor-impute: ``>=1.74.0,<1.75.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-snowfall: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cghcall

   and update with::

      conda update bioconductor-cghcall

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cghcall:<tag>

   (see `bioconductor-cghcall/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cghcall| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cghcall.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cghcall
   :alt:   (downloads)
.. |docker_bioconductor-cghcall| image:: https://quay.io/repository/biocontainers/bioconductor-cghcall/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cghcall
.. _`bioconductor-cghcall/tags`: https://quay.io/repository/biocontainers/bioconductor-cghcall?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cghcall";
        var versions = ["2.62.0","2.60.0","2.56.0","2.54.0","2.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cghcall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cghcall/README.html
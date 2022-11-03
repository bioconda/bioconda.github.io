:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneticsped'
.. highlight: bash

bioconductor-geneticsped
========================

.. conda:recipe:: bioconductor-geneticsped
   :replaces_section_title:
   :noindex:

   Pedigree and genetic relationship functions

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/GeneticsPed.html
   :license: LGPL (>= 2.1) | file LICENSE
   :recipe: /`bioconductor-geneticsped <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneticsped>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneticsped/meta.yaml>`_

   Classes and methods for handling pedigree data. It also includes functions to calculate genetic relationship measures as relationship and inbreeding coefficients and other utilities. Note that package is not yet stable. Use it with care\!


.. conda:package:: bioconductor-geneticsped

   |downloads_bioconductor-geneticsped| |docker_bioconductor-geneticsped|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.60.0-0</code>,  <code>1.56.0-2</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  </span></summary>
      

      ``1.60.0-0``,  ``1.56.0-2``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=10.4.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-gdata: 
   :depends r-genetics: 
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geneticsped

   and update with::

      conda update bioconductor-geneticsped

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneticsped:<tag>

   (see `bioconductor-geneticsped/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneticsped| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneticsped.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneticsped
   :alt:   (downloads)
.. |docker_bioconductor-geneticsped| image:: https://quay.io/repository/biocontainers/bioconductor-geneticsped/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneticsped
.. _`bioconductor-geneticsped/tags`: https://quay.io/repository/biocontainers/bioconductor-geneticsped?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geneticsped";
        var versions = ["1.60.0","1.56.0","1.56.0","1.56.0","1.54.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneticsped/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneticsped/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isolde'
.. highlight: bash

bioconductor-isolde
===================

.. conda:recipe:: bioconductor-isolde
   :replaces_section_title:
   :noindex:

   Integrative Statistics of alleLe Dependent Expression

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ISoLDE.html
   :license: GPL (>= 2.0)
   :recipe: /`bioconductor-isolde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isolde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isolde/meta.yaml>`_

   This package provides ISoLDE a new method for identifying imprinted genes. This method is dedicated to data arising from RNA sequencing technologies. The ISoLDE package implements original statistical methodology described in the publication below.


.. conda:package:: bioconductor-isolde

   |downloads_bioconductor-isolde| |docker_bioconductor-isolde|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.15.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-isolde

   and update with::

      conda update bioconductor-isolde

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isolde:<tag>

   (see `bioconductor-isolde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isolde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isolde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isolde
   :alt:   (downloads)
.. |docker_bioconductor-isolde| image:: https://quay.io/repository/biocontainers/bioconductor-isolde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isolde
.. _`bioconductor-isolde/tags`: https://quay.io/repository/biocontainers/bioconductor-isolde?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-isolde";
        var versions = ["1.28.0","1.26.0","1.26.0","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isolde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isolde/README.html
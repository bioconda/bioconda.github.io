:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowutils'
.. highlight: bash

bioconductor-flowutils
======================

.. conda:recipe:: bioconductor-flowutils
   :replaces_section_title:
   :noindex:

   Utilities for flow cytometry

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/flowUtils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowutils/meta.yaml>`_
   :links: biotools: :biotools:`flowutils`, doi: :doi:`10.1186/1471-2105-10-145`

   Provides utilities for flow cytometry data.


.. conda:package:: bioconductor-flowutils

   |downloads_bioconductor-flowutils| |docker_bioconductor-flowutils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.46.1-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.46.1-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-flowcore: ``>=2.4.0,<2.5.0``
   :depends bioconductor-graph: ``>=1.70.0,<1.71.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-corpcor: 
   :depends r-runit: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowutils

   and update with::

      conda update bioconductor-flowutils

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowutils:<tag>

   (see `bioconductor-flowutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowutils
   :alt:   (downloads)
.. |docker_bioconductor-flowutils| image:: https://quay.io/repository/biocontainers/bioconductor-flowutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowutils
.. _`bioconductor-flowutils/tags`: https://quay.io/repository/biocontainers/bioconductor-flowutils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowutils";
        var versions = ["1.56.0","1.54.0","1.54.0","1.52.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowutils/README.html
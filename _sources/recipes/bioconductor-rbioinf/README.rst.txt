:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbioinf'
.. highlight: bash

bioconductor-rbioinf
====================

.. conda:recipe:: bioconductor-rbioinf
   :replaces_section_title:
   :noindex:

   RBioinf

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/RBioinf.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rbioinf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbioinf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbioinf/meta.yaml>`_
   :links: biotools: :biotools:`rbioinf`, doi: :doi:`10.1038/nmeth.3252`

   Functions and datasets and examples to accompany the monograph R For Bioinformatics.


.. conda:package:: bioconductor-rbioinf

   |downloads_bioconductor-rbioinf| |docker_bioconductor-rbioinf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.54.0-2</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.54.0-2``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.76.0,<1.77.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbioinf

   and update with::

      conda update bioconductor-rbioinf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbioinf:<tag>

   (see `bioconductor-rbioinf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbioinf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbioinf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbioinf
   :alt:   (downloads)
.. |docker_bioconductor-rbioinf| image:: https://quay.io/repository/biocontainers/bioconductor-rbioinf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbioinf
.. _`bioconductor-rbioinf/tags`: https://quay.io/repository/biocontainers/bioconductor-rbioinf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbioinf";
        var versions = ["1.58.0","1.54.0","1.54.0","1.54.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbioinf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbioinf/README.html
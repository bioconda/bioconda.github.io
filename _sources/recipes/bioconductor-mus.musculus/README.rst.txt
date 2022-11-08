:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mus.musculus'
.. highlight: bash

bioconductor-mus.musculus
=========================

.. conda:recipe:: bioconductor-mus.musculus
   :replaces_section_title:
   :noindex:

   Annotation package for the Mus.musculus object

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/Mus.musculus.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mus.musculus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mus.musculus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mus.musculus/meta.yaml>`_

   Contains the Mus.musculus object to access data from several related annotation packages.


.. conda:package:: bioconductor-mus.musculus

   |downloads_bioconductor-mus.musculus| |docker_bioconductor-mus.musculus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-10</code>,  <code>1.3.1-9</code>,  <code>1.3.1-8</code>,  <code>1.3.1-7</code>,  <code>1.3.1-6</code>,  <code>1.3.1-5</code>,  <code>1.3.1-4</code>,  <code>1.3.1-3</code>,  <code>1.3.1-2</code>,  </span></summary>
      

      ``1.3.1-10``,  ``1.3.1-9``,  ``1.3.1-8``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221103``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-go.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-organismdbi: ``>=1.40.0,<1.41.0``
   :depends bioconductor-txdb.mmusculus.ucsc.mm10.knowngene: ``>=3.10.0,<3.11.0``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mus.musculus

   and update with::

      conda update bioconductor-mus.musculus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mus.musculus:<tag>

   (see `bioconductor-mus.musculus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mus.musculus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mus.musculus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mus.musculus
   :alt:   (downloads)
.. |docker_bioconductor-mus.musculus| image:: https://quay.io/repository/biocontainers/bioconductor-mus.musculus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mus.musculus
.. _`bioconductor-mus.musculus/tags`: https://quay.io/repository/biocontainers/bioconductor-mus.musculus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mus.musculus";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mus.musculus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mus.musculus/README.html
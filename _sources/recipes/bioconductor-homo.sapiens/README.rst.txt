:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-homo.sapiens'
.. highlight: bash

bioconductor-homo.sapiens
=========================

.. conda:recipe:: bioconductor-homo.sapiens
   :replaces_section_title:
   :noindex:

   Annotation package for the Homo.sapiens object

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/Homo.sapiens.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-homo.sapiens <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-homo.sapiens>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-homo.sapiens/meta.yaml>`_

   Contains the Homo.sapiens object to access data from several related annotation packages.


.. conda:package:: bioconductor-homo.sapiens

   |downloads_bioconductor-homo.sapiens| |docker_bioconductor-homo.sapiens|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-17</code>,  <code>1.3.1-16</code>,  <code>1.3.1-15</code>,  <code>1.3.1-14</code>,  <code>1.3.1-13</code>,  <code>1.3.1-12</code>,  <code>1.3.1-11</code>,  <code>1.3.1-10</code>,  <code>1.3.1-9</code>,  </span></summary>
      

      ``1.3.1-17``,  ``1.3.1-16``,  ``1.3.1-15``,  ``1.3.1-14``,  ``1.3.1-13``,  ``1.3.1-12``,  ``1.3.1-11``,  ``1.3.1-10``,  ``1.3.1-9``,  ``1.3.1-8``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-1``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-organismdbi: ``>=1.48.0,<1.49.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-homo.sapiens

   and update with::

      mamba update bioconductor-homo.sapiens

  To create a new environment, run::

      mamba create --name myenvname bioconductor-homo.sapiens

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-homo.sapiens:<tag>

   (see `bioconductor-homo.sapiens/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-homo.sapiens| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-homo.sapiens.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-homo.sapiens
   :alt:   (downloads)
.. |docker_bioconductor-homo.sapiens| image:: https://quay.io/repository/biocontainers/bioconductor-homo.sapiens/status
   :target: https://quay.io/repository/biocontainers/bioconductor-homo.sapiens
.. _`bioconductor-homo.sapiens/tags`: https://quay.io/repository/biocontainers/bioconductor-homo.sapiens?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-homo.sapiens";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-homo.sapiens/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-homo.sapiens/README.html
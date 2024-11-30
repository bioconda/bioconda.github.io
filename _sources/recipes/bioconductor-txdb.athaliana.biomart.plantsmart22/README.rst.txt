:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.athaliana.biomart.plantsmart22'
.. highlight: bash

bioconductor-txdb.athaliana.biomart.plantsmart22
================================================

.. conda:recipe:: bioconductor-txdb.athaliana.biomart.plantsmart22
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/TxDb.Athaliana.BioMart.plantsmart22.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.athaliana.biomart.plantsmart22 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.athaliana.biomart.plantsmart22>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.athaliana.biomart.plantsmart22/meta.yaml>`_

   Exposes an annotation databases generated from BioMart by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.athaliana.biomart.plantsmart22

   |downloads_bioconductor-txdb.athaliana.biomart.plantsmart22| |docker_bioconductor-txdb.athaliana.biomart.plantsmart22|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.1-12</code>,  <code>3.0.1-11</code>,  <code>3.0.1-10</code>,  <code>3.0.1-9</code>,  <code>3.0.1-8</code>,  <code>3.0.1-7</code>,  <code>3.0.1-6</code>,  <code>3.0.1-5</code>,  <code>3.0.1-4</code>,  </span></summary>
      

      ``3.0.1-12``,  ``3.0.1-11``,  ``3.0.1-10``,  ``3.0.1-9``,  ``3.0.1-8``,  ``3.0.1-7``,  ``3.0.1-6``,  ``3.0.1-5``,  ``3.0.1-4``,  ``3.0.1-3``,  ``3.0.1-2``,  ``3.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-txdb.athaliana.biomart.plantsmart22

   and update with::

      mamba update bioconductor-txdb.athaliana.biomart.plantsmart22

  To create a new environment, run::

      mamba create --name myenvname bioconductor-txdb.athaliana.biomart.plantsmart22

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.athaliana.biomart.plantsmart22:<tag>

   (see `bioconductor-txdb.athaliana.biomart.plantsmart22/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.athaliana.biomart.plantsmart22| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.athaliana.biomart.plantsmart22.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.athaliana.biomart.plantsmart22
   :alt:   (downloads)
.. |docker_bioconductor-txdb.athaliana.biomart.plantsmart22| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.athaliana.biomart.plantsmart22/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.athaliana.biomart.plantsmart22
.. _`bioconductor-txdb.athaliana.biomart.plantsmart22/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.athaliana.biomart.plantsmart22?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.athaliana.biomart.plantsmart22";
        var versions = ["3.0.1","3.0.1","3.0.1","3.0.1","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.athaliana.biomart.plantsmart22/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.athaliana.biomart.plantsmart22/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.athaliana.biomart.plantsmart25'
.. highlight: bash

bioconductor-txdb.athaliana.biomart.plantsmart25
================================================

.. conda:recipe:: bioconductor-txdb.athaliana.biomart.plantsmart25
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/TxDb.Athaliana.BioMart.plantsmart25.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.athaliana.biomart.plantsmart25 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.athaliana.biomart.plantsmart25>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.athaliana.biomart.plantsmart25/meta.yaml>`_

   Exposes an annotation databases generated from BioMart by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.athaliana.biomart.plantsmart25

   |downloads_bioconductor-txdb.athaliana.biomart.plantsmart25| |docker_bioconductor-txdb.athaliana.biomart.plantsmart25|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.3-11</code>,  <code>3.1.3-10</code>,  <code>3.1.3-9</code>,  <code>3.1.3-8</code>,  <code>3.1.3-7</code>,  <code>3.1.3-6</code>,  <code>3.1.3-5</code>,  <code>3.1.3-4</code>,  <code>3.1.3-3</code>,  </span></summary>
      

      ``3.1.3-11``,  ``3.1.3-10``,  ``3.1.3-9``,  ``3.1.3-8``,  ``3.1.3-7``,  ``3.1.3-6``,  ``3.1.3-5``,  ``3.1.3-4``,  ``3.1.3-3``,  ``3.1.3-2``,  ``3.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-txdb.athaliana.biomart.plantsmart25

   and update with::

      mamba update bioconductor-txdb.athaliana.biomart.plantsmart25

  To create a new environment, run::

      mamba create --name myenvname bioconductor-txdb.athaliana.biomart.plantsmart25

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.athaliana.biomart.plantsmart25:<tag>

   (see `bioconductor-txdb.athaliana.biomart.plantsmart25/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.athaliana.biomart.plantsmart25| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.athaliana.biomart.plantsmart25.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.athaliana.biomart.plantsmart25
   :alt:   (downloads)
.. |docker_bioconductor-txdb.athaliana.biomart.plantsmart25| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.athaliana.biomart.plantsmart25/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.athaliana.biomart.plantsmart25
.. _`bioconductor-txdb.athaliana.biomart.plantsmart25/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.athaliana.biomart.plantsmart25?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.athaliana.biomart.plantsmart25";
        var versions = ["3.1.3","3.1.3","3.1.3","3.1.3","3.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.athaliana.biomart.plantsmart25/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.athaliana.biomart.plantsmart25/README.html
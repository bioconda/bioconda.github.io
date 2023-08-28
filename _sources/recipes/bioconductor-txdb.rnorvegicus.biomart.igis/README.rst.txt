:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.rnorvegicus.biomart.igis'
.. highlight: bash

bioconductor-txdb.rnorvegicus.biomart.igis
==========================================

.. conda:recipe:: bioconductor-txdb.rnorvegicus.biomart.igis
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/TxDb.Rnorvegicus.BioMart.igis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.rnorvegicus.biomart.igis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.rnorvegicus.biomart.igis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.rnorvegicus.biomart.igis/meta.yaml>`_

   Exposes an annotation databases generated from BioMart by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.rnorvegicus.biomart.igis

   |downloads_bioconductor-txdb.rnorvegicus.biomart.igis| |docker_bioconductor-txdb.rnorvegicus.biomart.igis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.2-11</code>,  <code>2.3.2-10</code>,  <code>2.3.2-9</code>,  <code>2.3.2-8</code>,  <code>2.3.2-7</code>,  <code>2.3.2-6</code>,  <code>2.3.2-5</code>,  <code>2.3.2-4</code>,  <code>2.3.2-3</code>,  </span></summary>
      

      ``2.3.2-11``,  ``2.3.2-10``,  ``2.3.2-9``,  ``2.3.2-8``,  ``2.3.2-7``,  ``2.3.2-6``,  ``2.3.2-5``,  ``2.3.2-4``,  ``2.3.2-3``,  ``2.3.2-2``,  ``2.3.2-0``

      
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

      mamba install bioconductor-txdb.rnorvegicus.biomart.igis

   and update with::

      mamba update bioconductor-txdb.rnorvegicus.biomart.igis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-txdb.rnorvegicus.biomart.igis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdb.rnorvegicus.biomart.igis:<tag>

   (see `bioconductor-txdb.rnorvegicus.biomart.igis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdb.rnorvegicus.biomart.igis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.rnorvegicus.biomart.igis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.rnorvegicus.biomart.igis
   :alt:   (downloads)
.. |docker_bioconductor-txdb.rnorvegicus.biomart.igis| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.rnorvegicus.biomart.igis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.rnorvegicus.biomart.igis
.. _`bioconductor-txdb.rnorvegicus.biomart.igis/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.rnorvegicus.biomart.igis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.rnorvegicus.biomart.igis";
        var versions = ["2.3.2","2.3.2","2.3.2","2.3.2","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.rnorvegicus.biomart.igis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.rnorvegicus.biomart.igis/README.html
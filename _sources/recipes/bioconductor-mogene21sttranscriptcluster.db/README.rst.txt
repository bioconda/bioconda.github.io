:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mogene21sttranscriptcluster.db'
.. highlight: bash

bioconductor-mogene21sttranscriptcluster.db
===========================================

.. conda:recipe:: bioconductor-mogene21sttranscriptcluster.db
   :replaces_section_title:
   :noindex:

   Affymetrix mogene21 annotation data \(chip mogene21sttranscriptcluster\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/mogene21sttranscriptcluster.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mogene21sttranscriptcluster.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogene21sttranscriptcluster.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogene21sttranscriptcluster.db/meta.yaml>`_

   Affymetrix mogene21 annotation data \(chip mogene21sttranscriptcluster\) assembled using data from public repositories


.. conda:package:: bioconductor-mogene21sttranscriptcluster.db

   |downloads_bioconductor-mogene21sttranscriptcluster.db| |docker_bioconductor-mogene21sttranscriptcluster.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.8.0-5</code>,  <code>8.8.0-4</code>,  <code>8.8.0-3</code>,  <code>8.8.0-2</code>,  <code>8.8.0-1</code>,  <code>8.8.0-0</code>,  <code>8.7.0-7</code>,  <code>8.7.0-6</code>,  <code>8.7.0-5</code>,  </span></summary>
      

      ``8.8.0-5``,  ``8.8.0-4``,  ``8.8.0-3``,  ``8.8.0-2``,  ``8.8.0-1``,  ``8.8.0-0``,  ``8.7.0-7``,  ``8.7.0-6``,  ``8.7.0-5``,  ``8.7.0-4``,  ``8.7.0-3``,  ``8.7.0-2``,  ``8.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-org.mm.eg.db: ``>=3.20.0,<3.21.0``
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

      mamba install bioconductor-mogene21sttranscriptcluster.db

   and update with::

      mamba update bioconductor-mogene21sttranscriptcluster.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mogene21sttranscriptcluster.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mogene21sttranscriptcluster.db:<tag>

   (see `bioconductor-mogene21sttranscriptcluster.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mogene21sttranscriptcluster.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mogene21sttranscriptcluster.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mogene21sttranscriptcluster.db
   :alt:   (downloads)
.. |docker_bioconductor-mogene21sttranscriptcluster.db| image:: https://quay.io/repository/biocontainers/bioconductor-mogene21sttranscriptcluster.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mogene21sttranscriptcluster.db
.. _`bioconductor-mogene21sttranscriptcluster.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mogene21sttranscriptcluster.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mogene21sttranscriptcluster.db";
        var versions = ["8.8.0","8.8.0","8.8.0","8.8.0","8.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mogene21sttranscriptcluster.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mogene21sttranscriptcluster.db/README.html
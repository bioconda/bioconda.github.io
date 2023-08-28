:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ragene10stprobeset.db'
.. highlight: bash

bioconductor-ragene10stprobeset.db
==================================

.. conda:recipe:: bioconductor-ragene10stprobeset.db
   :replaces_section_title:
   :noindex:

   Affymetrix ragene10 annotation data \(chip ragene10stprobeset\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/ragene10stprobeset.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ragene10stprobeset.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ragene10stprobeset.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ragene10stprobeset.db/meta.yaml>`_

   Affymetrix ragene10 annotation data \(chip ragene10stprobeset\) assembled using data from public repositories


.. conda:package:: bioconductor-ragene10stprobeset.db

   |downloads_bioconductor-ragene10stprobeset.db| |docker_bioconductor-ragene10stprobeset.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.8.0-3</code>,  <code>8.8.0-2</code>,  <code>8.8.0-1</code>,  <code>8.8.0-0</code>,  <code>8.7.0-7</code>,  <code>8.7.0-6</code>,  <code>8.7.0-5</code>,  <code>8.7.0-4</code>,  <code>8.7.0-3</code>,  </span></summary>
      

      ``8.8.0-3``,  ``8.8.0-2``,  ``8.8.0-1``,  ``8.8.0-0``,  ``8.7.0-7``,  ``8.7.0-6``,  ``8.7.0-5``,  ``8.7.0-4``,  ``8.7.0-3``,  ``8.7.0-2``,  ``8.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-org.rn.eg.db: ``>=3.17.0,<3.18.0``
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

      mamba install bioconductor-ragene10stprobeset.db

   and update with::

      mamba update bioconductor-ragene10stprobeset.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ragene10stprobeset.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ragene10stprobeset.db:<tag>

   (see `bioconductor-ragene10stprobeset.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ragene10stprobeset.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ragene10stprobeset.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ragene10stprobeset.db
   :alt:   (downloads)
.. |docker_bioconductor-ragene10stprobeset.db| image:: https://quay.io/repository/biocontainers/bioconductor-ragene10stprobeset.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ragene10stprobeset.db
.. _`bioconductor-ragene10stprobeset.db/tags`: https://quay.io/repository/biocontainers/bioconductor-ragene10stprobeset.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ragene10stprobeset.db";
        var versions = ["8.8.0","8.8.0","8.8.0","8.8.0","8.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ragene10stprobeset.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ragene10stprobeset.db/README.html
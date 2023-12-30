:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rwgcod.db'
.. highlight: bash

bioconductor-rwgcod.db
======================

.. conda:recipe:: bioconductor-rwgcod.db
   :replaces_section_title:
   :noindex:

   Codelink Rat Whole Genome Bioarray \(\~34 000 rat gene targets\) annotation data \(chip rwgcod\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/rwgcod.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rwgcod.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rwgcod.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rwgcod.db/meta.yaml>`_

   Codelink Rat Whole Genome Bioarray \(\~34 000 rat gene targets\) annotation data \(chip rwgcod\) assembled using data from public repositories


.. conda:package:: bioconductor-rwgcod.db

   |downloads_bioconductor-rwgcod.db| |docker_bioconductor-rwgcod.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-12</code>,  <code>3.4.0-11</code>,  <code>3.4.0-10</code>,  <code>3.4.0-9</code>,  <code>3.4.0-8</code>,  <code>3.4.0-7</code>,  <code>3.4.0-6</code>,  <code>3.4.0-5</code>,  <code>3.4.0-4</code>,  </span></summary>
      

      ``3.4.0-12``,  ``3.4.0-11``,  ``3.4.0-10``,  ``3.4.0-9``,  ``3.4.0-8``,  ``3.4.0-7``,  ``3.4.0-6``,  ``3.4.0-5``,  ``3.4.0-4``,  ``3.4.0-3``,  ``3.4.0-2``,  ``3.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-org.rn.eg.db: ``>=3.18.0,<3.19.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-rwgcod.db

   and update with::

      mamba update bioconductor-rwgcod.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rwgcod.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rwgcod.db:<tag>

   (see `bioconductor-rwgcod.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rwgcod.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rwgcod.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rwgcod.db
   :alt:   (downloads)
.. |docker_bioconductor-rwgcod.db| image:: https://quay.io/repository/biocontainers/bioconductor-rwgcod.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rwgcod.db
.. _`bioconductor-rwgcod.db/tags`: https://quay.io/repository/biocontainers/bioconductor-rwgcod.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rwgcod.db";
        var versions = ["3.4.0","3.4.0","3.4.0","3.4.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rwgcod.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rwgcod.db/README.html
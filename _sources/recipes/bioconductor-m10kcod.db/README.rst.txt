:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-m10kcod.db'
.. highlight: bash

bioconductor-m10kcod.db
=======================

.. conda:recipe:: bioconductor-m10kcod.db
   :replaces_section_title:
   :noindex:

   Codelink UniSet Mouse I Bioarray \(\~10 000 mouse gene targets\) annotation data \(chip m10kcod\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/m10kcod.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-m10kcod.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m10kcod.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m10kcod.db/meta.yaml>`_

   Codelink UniSet Mouse I Bioarray \(\~10 000 mouse gene targets\) annotation data \(chip m10kcod\) assembled using data from public repositories


.. conda:package:: bioconductor-m10kcod.db

   |downloads_bioconductor-m10kcod.db| |docker_bioconductor-m10kcod.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-13</code>,  <code>3.4.0-12</code>,  <code>3.4.0-11</code>,  <code>3.4.0-10</code>,  <code>3.4.0-9</code>,  <code>3.4.0-8</code>,  <code>3.4.0-7</code>,  <code>3.4.0-6</code>,  <code>3.4.0-5</code>,  </span></summary>
      

      ``3.4.0-13``,  ``3.4.0-12``,  ``3.4.0-11``,  ``3.4.0-10``,  ``3.4.0-9``,  ``3.4.0-8``,  ``3.4.0-7``,  ``3.4.0-6``,  ``3.4.0-5``,  ``3.4.0-4``,  ``3.4.0-3``,  ``3.4.0-2``,  ``3.4.0-0``

      
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

      mamba install bioconductor-m10kcod.db

   and update with::

      mamba update bioconductor-m10kcod.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-m10kcod.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-m10kcod.db:<tag>

   (see `bioconductor-m10kcod.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-m10kcod.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-m10kcod.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-m10kcod.db
   :alt:   (downloads)
.. |docker_bioconductor-m10kcod.db| image:: https://quay.io/repository/biocontainers/bioconductor-m10kcod.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-m10kcod.db
.. _`bioconductor-m10kcod.db/tags`: https://quay.io/repository/biocontainers/bioconductor-m10kcod.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-m10kcod.db";
        var versions = ["3.4.0","3.4.0","3.4.0","3.4.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-m10kcod.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-m10kcod.db/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-h10kcod.db'
.. highlight: bash

bioconductor-h10kcod.db
=======================

.. conda:recipe:: bioconductor-h10kcod.db
   :replaces_section_title:
   :noindex:

   Codelink UniSet Human I Bioarray \(\~10 000 human genes\) annotation data \(chip h10kcod\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/h10kcod.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-h10kcod.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h10kcod.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-h10kcod.db/meta.yaml>`_

   Codelink UniSet Human I Bioarray \(\~10 000 human genes\) annotation data \(chip h10kcod\) assembled using data from public repositories


.. conda:package:: bioconductor-h10kcod.db

   |downloads_bioconductor-h10kcod.db| |docker_bioconductor-h10kcod.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-12</code>,  <code>3.4.0-11</code>,  <code>3.4.0-10</code>,  <code>3.4.0-9</code>,  <code>3.4.0-8</code>,  <code>3.4.0-7</code>,  <code>3.4.0-6</code>,  <code>3.4.0-5</code>,  <code>3.4.0-4</code>,  </span></summary>
      

      ``3.4.0-12``,  ``3.4.0-11``,  ``3.4.0-10``,  ``3.4.0-9``,  ``3.4.0-8``,  ``3.4.0-7``,  ``3.4.0-6``,  ``3.4.0-5``,  ``3.4.0-4``,  ``3.4.0-3``,  ``3.4.0-2``,  ``3.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
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

      mamba install bioconductor-h10kcod.db

   and update with::

      mamba update bioconductor-h10kcod.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-h10kcod.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-h10kcod.db:<tag>

   (see `bioconductor-h10kcod.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-h10kcod.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-h10kcod.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-h10kcod.db
   :alt:   (downloads)
.. |docker_bioconductor-h10kcod.db| image:: https://quay.io/repository/biocontainers/bioconductor-h10kcod.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-h10kcod.db
.. _`bioconductor-h10kcod.db/tags`: https://quay.io/repository/biocontainers/bioconductor-h10kcod.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-h10kcod.db";
        var versions = ["3.4.0","3.4.0","3.4.0","3.4.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-h10kcod.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-h10kcod.db/README.html
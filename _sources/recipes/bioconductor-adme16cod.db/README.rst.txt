:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adme16cod.db'
.. highlight: bash

bioconductor-adme16cod.db
=========================

.. conda:recipe:: bioconductor-adme16cod.db
   :replaces_section_title:
   :noindex:

   Codelink ADME Rat 16\-Assay Bioarray annotation data \(chip adme16cod\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/adme16cod.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-adme16cod.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adme16cod.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adme16cod.db/meta.yaml>`_

   Codelink ADME Rat 16\-Assay Bioarray annotation data \(chip adme16cod\) assembled using data from public repositories


.. conda:package:: bioconductor-adme16cod.db

   |downloads_bioconductor-adme16cod.db| |docker_bioconductor-adme16cod.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-11</code>,  <code>3.4.0-10</code>,  <code>3.4.0-9</code>,  <code>3.4.0-8</code>,  <code>3.4.0-7</code>,  <code>3.4.0-6</code>,  <code>3.4.0-5</code>,  <code>3.4.0-4</code>,  <code>3.4.0-3</code>,  </span></summary>
      

      ``3.4.0-11``,  ``3.4.0-10``,  ``3.4.0-9``,  ``3.4.0-8``,  ``3.4.0-7``,  ``3.4.0-6``,  ``3.4.0-5``,  ``3.4.0-4``,  ``3.4.0-3``,  ``3.4.0-2``,  ``3.4.0-0``

      
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

      mamba install bioconductor-adme16cod.db

   and update with::

      mamba update bioconductor-adme16cod.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-adme16cod.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adme16cod.db:<tag>

   (see `bioconductor-adme16cod.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adme16cod.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adme16cod.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adme16cod.db
   :alt:   (downloads)
.. |docker_bioconductor-adme16cod.db| image:: https://quay.io/repository/biocontainers/bioconductor-adme16cod.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adme16cod.db
.. _`bioconductor-adme16cod.db/tags`: https://quay.io/repository/biocontainers/bioconductor-adme16cod.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adme16cod.db";
        var versions = ["3.4.0","3.4.0","3.4.0","3.4.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adme16cod.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adme16cod.db/README.html
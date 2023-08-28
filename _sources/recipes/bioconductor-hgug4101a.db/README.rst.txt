:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgug4101a.db'
.. highlight: bash

bioconductor-hgug4101a.db
=========================

.. conda:recipe:: bioconductor-hgug4101a.db
   :replaces_section_title:
   :noindex:

   Agilent Human 2 cDNA Microarry Kit annotation data \(chip hgug4101a\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/hgug4101a.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgug4101a.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgug4101a.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgug4101a.db/meta.yaml>`_

   Agilent Human 2 cDNA Microarry Kit annotation data \(chip hgug4101a\) assembled using data from public repositories


.. conda:package:: bioconductor-hgug4101a.db

   |downloads_bioconductor-hgug4101a.db| |docker_bioconductor-hgug4101a.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.3-11</code>,  <code>3.2.3-10</code>,  <code>3.2.3-9</code>,  <code>3.2.3-8</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  <code>3.2.3-5</code>,  <code>3.2.3-4</code>,  <code>3.2.3-3</code>,  </span></summary>
      

      ``3.2.3-11``,  ``3.2.3-10``,  ``3.2.3-9``,  ``3.2.3-8``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
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

      mamba install bioconductor-hgug4101a.db

   and update with::

      mamba update bioconductor-hgug4101a.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hgug4101a.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgug4101a.db:<tag>

   (see `bioconductor-hgug4101a.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgug4101a.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgug4101a.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgug4101a.db
   :alt:   (downloads)
.. |docker_bioconductor-hgug4101a.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgug4101a.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgug4101a.db
.. _`bioconductor-hgug4101a.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hgug4101a.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgug4101a.db";
        var versions = ["3.2.3","3.2.3","3.2.3","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgug4101a.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgug4101a.db/README.html
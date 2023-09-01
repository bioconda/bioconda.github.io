:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumihumanall.db'
.. highlight: bash

bioconductor-lumihumanall.db
============================

.. conda:recipe:: bioconductor-lumihumanall.db
   :replaces_section_title:
   :noindex:

   Illumina Human Illumina expression annotation data \(chip lumiHumanAll\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/lumiHumanAll.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lumihumanall.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumihumanall.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumihumanall.db/meta.yaml>`_

   Illumina Human Illumina expression annotation data \(chip lumiHumanAll\) assembled using data from public repositories


.. conda:package:: bioconductor-lumihumanall.db

   |downloads_bioconductor-lumihumanall.db| |docker_bioconductor-lumihumanall.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-14</code>,  <code>1.22.0-13</code>,  <code>1.22.0-12</code>,  <code>1.22.0-11</code>,  <code>1.22.0-10</code>,  <code>1.22.0-9</code>,  <code>1.22.0-8</code>,  <code>1.22.0-7</code>,  <code>1.22.0-6</code>,  </span></summary>
      

      ``1.22.0-14``,  ``1.22.0-13``,  ``1.22.0-12``,  ``1.22.0-11``,  ``1.22.0-10``,  ``1.22.0-9``,  ``1.22.0-8``,  ``1.22.0-7``,  ``1.22.0-6``,  ``1.22.0-5``,  ``1.22.0-3``,  ``1.22.0-2``,  ``1.22.0-0``

      
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
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-lumihumanall.db

   and update with::

      mamba update bioconductor-lumihumanall.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lumihumanall.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lumihumanall.db:<tag>

   (see `bioconductor-lumihumanall.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumihumanall.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumihumanall.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lumihumanall.db
   :alt:   (downloads)
.. |docker_bioconductor-lumihumanall.db| image:: https://quay.io/repository/biocontainers/bioconductor-lumihumanall.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumihumanall.db
.. _`bioconductor-lumihumanall.db/tags`: https://quay.io/repository/biocontainers/bioconductor-lumihumanall.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lumihumanall.db";
        var versions = ["1.22.0","1.22.0","1.22.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumihumanall.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumihumanall.db/README.html
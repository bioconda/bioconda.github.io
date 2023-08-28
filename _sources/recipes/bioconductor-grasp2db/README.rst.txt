:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-grasp2db'
.. highlight: bash

bioconductor-grasp2db
=====================

.. conda:recipe:: bioconductor-grasp2db
   :replaces_section_title:
   :noindex:

   grasp2db\, sqlite wrap of GRASP 2.0

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/grasp2db.html
   :license: Artistic-2.0 + file LICENSE
   :recipe: /`bioconductor-grasp2db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grasp2db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grasp2db/meta.yaml>`_

   grasp2db\, sqlite wrap of NHLBI GRASP 2.0\, an extended GWAS catalog.


.. conda:package:: bioconductor-grasp2db

   |downloads_bioconductor-grasp2db| |docker_bioconductor-grasp2db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-12</code>,  <code>1.1.0-11</code>,  <code>1.1.0-10</code>,  <code>1.1.0-9</code>,  <code>1.1.0-8</code>,  <code>1.1.0-7</code>,  <code>1.1.0-6</code>,  <code>1.1.0-5</code>,  <code>1.1.0-4</code>,  </span></summary>
      

      ``1.1.0-12``,  ``1.1.0-11``,  ``1.1.0-10``,  ``1.1.0-9``,  ``1.1.0-8``,  ``1.1.0-7``,  ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbplyr: 
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-grasp2db

   and update with::

      mamba update bioconductor-grasp2db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-grasp2db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-grasp2db:<tag>

   (see `bioconductor-grasp2db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-grasp2db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-grasp2db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-grasp2db
   :alt:   (downloads)
.. |docker_bioconductor-grasp2db| image:: https://quay.io/repository/biocontainers/bioconductor-grasp2db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-grasp2db
.. _`bioconductor-grasp2db/tags`: https://quay.io/repository/biocontainers/bioconductor-grasp2db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-grasp2db";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-grasp2db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-grasp2db/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.mxanthus.db'
.. highlight: bash

bioconductor-org.mxanthus.db
============================

.. conda:recipe:: bioconductor-org.mxanthus.db
   :replaces_section_title:
   :noindex:

   Genome wide annotation for Myxococcus xanthus DK 1622

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/org.Mxanthus.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.mxanthus.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.mxanthus.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.mxanthus.db/meta.yaml>`_

   Genome wide annotation for Myxococcus xanthus DK 1622\, primarily based on mapping using Gene identifiers.


.. conda:package:: bioconductor-org.mxanthus.db

   |downloads_bioconductor-org.mxanthus.db| |docker_bioconductor-org.mxanthus.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.27-10</code>,  <code>1.0.27-9</code>,  <code>1.0.27-8</code>,  <code>1.0.27-7</code>,  <code>1.0.27-6</code>,  <code>1.0.27-5</code>,  <code>1.0.27-3</code>,  <code>1.0.27-2</code>,  <code>1.0.27-1</code>,  </span></summary>
      

      ``1.0.27-10``,  ``1.0.27-9``,  ``1.0.27-8``,  ``1.0.27-7``,  ``1.0.27-6``,  ``1.0.27-5``,  ``1.0.27-3``,  ``1.0.27-2``,  ``1.0.27-1``,  ``1.0.27-0``,  ``1.0.23-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-biocstyle: ``>=2.34.0,<2.35.0``
   :depends bioconductor-data-packages: ``>=20241103``
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

      mamba install bioconductor-org.mxanthus.db

   and update with::

      mamba update bioconductor-org.mxanthus.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-org.mxanthus.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-org.mxanthus.db:<tag>

   (see `bioconductor-org.mxanthus.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-org.mxanthus.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.mxanthus.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-org.mxanthus.db
   :alt:   (downloads)
.. |docker_bioconductor-org.mxanthus.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.mxanthus.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.mxanthus.db
.. _`bioconductor-org.mxanthus.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.mxanthus.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-org.mxanthus.db";
        var versions = ["1.0.27","1.0.27","1.0.27","1.0.27","1.0.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.mxanthus.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.mxanthus.db/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pedbarrayv10.db'
.. highlight: bash

bioconductor-pedbarrayv10.db
============================

.. conda:recipe:: bioconductor-pedbarrayv10.db
   :replaces_section_title:
   :noindex:

   FHCRC Nelson Lab pedbarrayv10 Annotation Data \(pedbarrayv10\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/pedbarrayv10.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pedbarrayv10.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pedbarrayv10.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pedbarrayv10.db/meta.yaml>`_

   FHCRC Nelson Lab pedbarrayv10 Annotation Data \(pedbarrayv10\) assembled using data from public repositories


.. conda:package:: bioconductor-pedbarrayv10.db

   |downloads_bioconductor-pedbarrayv10.db| |docker_bioconductor-pedbarrayv10.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.3-12</code>,  <code>3.2.3-11</code>,  <code>3.2.3-10</code>,  <code>3.2.3-9</code>,  <code>3.2.3-8</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  <code>3.2.3-5</code>,  <code>3.2.3-4</code>,  </span></summary>
      

      ``3.2.3-12``,  ``3.2.3-11``,  ``3.2.3-10``,  ``3.2.3-9``,  ``3.2.3-8``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      
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

      mamba install bioconductor-pedbarrayv10.db

   and update with::

      mamba update bioconductor-pedbarrayv10.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pedbarrayv10.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pedbarrayv10.db:<tag>

   (see `bioconductor-pedbarrayv10.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pedbarrayv10.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pedbarrayv10.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pedbarrayv10.db
   :alt:   (downloads)
.. |docker_bioconductor-pedbarrayv10.db| image:: https://quay.io/repository/biocontainers/bioconductor-pedbarrayv10.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pedbarrayv10.db
.. _`bioconductor-pedbarrayv10.db/tags`: https://quay.io/repository/biocontainers/bioconductor-pedbarrayv10.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pedbarrayv10.db";
        var versions = ["3.2.3","3.2.3","3.2.3","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pedbarrayv10.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pedbarrayv10.db/README.html
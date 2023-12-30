:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirbase.db'
.. highlight: bash

bioconductor-mirbase.db
=======================

.. conda:recipe:: bioconductor-mirbase.db
   :replaces_section_title:
   :noindex:

   miRBase\: the microRNA database

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/mirbase.db.html
   :license: file LICENSE
   :recipe: /`bioconductor-mirbase.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbase.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbase.db/meta.yaml>`_

   miRBase\: the microRNA database assembled using data from miRBase \(http\:\/\/www.mirbase.org\/\).


.. conda:package:: bioconductor-mirbase.db

   |downloads_bioconductor-mirbase.db| |docker_bioconductor-mirbase.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-12</code>,  <code>1.2.0-11</code>,  <code>1.2.0-10</code>,  <code>1.2.0-9</code>,  <code>1.2.0-8</code>,  <code>1.2.0-7</code>,  <code>1.2.0-6</code>,  <code>1.2.0-5</code>,  <code>1.2.0-4</code>,  </span></summary>
      

      ``1.2.0-12``,  ``1.2.0-11``,  ``1.2.0-10``,  ``1.2.0-9``,  ``1.2.0-8``,  ``1.2.0-7``,  ``1.2.0-6``,  ``1.2.0-5``,  ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-mirbase.db

   and update with::

      mamba update bioconductor-mirbase.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mirbase.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirbase.db:<tag>

   (see `bioconductor-mirbase.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirbase.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirbase.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirbase.db
   :alt:   (downloads)
.. |docker_bioconductor-mirbase.db| image:: https://quay.io/repository/biocontainers/bioconductor-mirbase.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirbase.db
.. _`bioconductor-mirbase.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mirbase.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirbase.db";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirbase.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirbase.db/README.html
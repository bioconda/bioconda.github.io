:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dazz_db'
.. highlight: bash

dazz_db
=======

.. conda:recipe:: dazz_db
   :replaces_section_title:
   :noindex:

   DAZZ\_DB\: The Dazzler Data Base

   :homepage: https://github.com/thegenemyers/DAZZ_DB
   :license: Custom
   :recipe: /`dazz_db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dazz_db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dazz_db/meta.yaml>`_

   


.. conda:package:: dazz_db

   |downloads_dazz_db| |docker_dazz_db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-0</code>,  <code>1.0p2-7</code>,  <code>1.0p2-6</code>,  <code>1.0p2-5</code>,  <code>1.0p2-4</code>,  <code>1.0p2-3</code>,  <code>1.0p2-2</code>,  <code>1.0p2-1</code>,  <code>1.0p2-0</code>,  </span></summary>
      

      ``1.0-0``,  ``1.0p2-7``,  ``1.0p2-6``,  ``1.0p2-5``,  ``1.0p2-4``,  ``1.0p2-3``,  ``1.0p2-2``,  ``1.0p2-1``,  ``1.0p2-0``,  ``1.0p1-1``,  ``1.0p1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: 
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

      mamba install dazz_db

   and update with::

      mamba update dazz_db

  To create a new environment, run::

      mamba create --name myenvname dazz_db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dazz_db:<tag>

   (see `dazz_db/tags`_ for valid values for ``<tag>``)


.. |downloads_dazz_db| image:: https://img.shields.io/conda/dn/bioconda/dazz_db.svg?style=flat
   :target: https://anaconda.org/bioconda/dazz_db
   :alt:   (downloads)
.. |docker_dazz_db| image:: https://quay.io/repository/biocontainers/dazz_db/status
   :target: https://quay.io/repository/biocontainers/dazz_db
.. _`dazz_db/tags`: https://quay.io/repository/biocontainers/dazz_db?tab=tags


.. raw:: html

    <script>
        var package = "dazz_db";
        var versions = ["1.0","1.0p2","1.0p2","1.0p2","1.0p2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dazz_db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dazz_db/README.html
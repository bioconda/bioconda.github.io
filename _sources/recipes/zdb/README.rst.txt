:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zdb'
.. highlight: bash

zdb
===

.. conda:recipe:: zdb
   :replaces_section_title:
   :noindex:

   zDB is both a bacterial comparative genomics pipeline and a tool to visualize the results

   :homepage: https://github.com/metagenlab/zDB/
   :license: MIT
   :recipe: /`zdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zdb/meta.yaml>`_
   :links: biotools: :biotools:`zDB`

   


.. conda:package:: zdb

   |downloads_zdb| |docker_zdb|

   :versions:
      
      

      ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.7-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.0-0``

      

   
   :depends mamba: 
   :depends nextflow: ``>=21.04.0,<=22.10.8``
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

      mamba install zdb

   and update with::

      mamba update zdb

  To create a new environment, run::

      mamba create --name myenvname zdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/zdb:<tag>

   (see `zdb/tags`_ for valid values for ``<tag>``)


.. |downloads_zdb| image:: https://img.shields.io/conda/dn/bioconda/zdb.svg?style=flat
   :target: https://anaconda.org/bioconda/zdb
   :alt:   (downloads)
.. |docker_zdb| image:: https://quay.io/repository/biocontainers/zdb/status
   :target: https://quay.io/repository/biocontainers/zdb
.. _`zdb/tags`: https://quay.io/repository/biocontainers/zdb?tab=tags


.. raw:: html

    <script>
        var package = "zdb";
        var versions = ["1.2.1","1.2.1","1.2.0","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zdb/README.html
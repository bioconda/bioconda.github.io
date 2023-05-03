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
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.7-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.0-0``

      

   
   :depends nextflow: ``>=21.04.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install zdb

   and update with::

      conda update zdb

   or use the docker container::

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
        var versions = ["1.1.1","1.1.0","1.0.7","1.0.4","1.0.3"];
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
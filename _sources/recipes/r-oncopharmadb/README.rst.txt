:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-oncopharmadb'
.. highlight: bash

r-oncopharmadb
==============

.. conda:recipe:: r-oncopharmadb
   :replaces_section_title:
   :noindex:

   Targeted and non\-targeted anticancer drugs and drug regimens

   :homepage: https://github.com/sigven/oncoPharmaDB
   :license: MIT / MIT
   :recipe: /`r-oncopharmadb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-oncopharmadb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-oncopharmadb/meta.yaml>`_

   


.. conda:package:: r-oncopharmadb

   |downloads_r-oncopharmadb| |docker_r-oncopharmadb|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-magrittr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-oncopharmadb

   and update with::

      conda update r-oncopharmadb

   or use the docker container::

      docker pull quay.io/biocontainers/r-oncopharmadb:<tag>

   (see `r-oncopharmadb/tags`_ for valid values for ``<tag>``)


.. |downloads_r-oncopharmadb| image:: https://img.shields.io/conda/dn/bioconda/r-oncopharmadb.svg?style=flat
   :target: https://anaconda.org/bioconda/r-oncopharmadb
   :alt:   (downloads)
.. |docker_r-oncopharmadb| image:: https://quay.io/repository/biocontainers/r-oncopharmadb/status
   :target: https://quay.io/repository/biocontainers/r-oncopharmadb
.. _`r-oncopharmadb/tags`: https://quay.io/repository/biocontainers/r-oncopharmadb?tab=tags


.. raw:: html

    <script>
        var package = "r-oncopharmadb";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-oncopharmadb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-oncopharmadb/README.html
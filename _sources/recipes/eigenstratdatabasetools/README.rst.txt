:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eigenstratdatabasetools'
.. highlight: bash

eigenstratdatabasetools
=======================

.. conda:recipe:: eigenstratdatabasetools
   :replaces_section_title:
   :noindex:

   A set of tools to compare and manipulate the contents of EingenStrat databases\, and to calculate SNP coverage statistics in such databases.

   :homepage: https://github.com/TCLamnidis/EigenStratDatabaseTools
   :license: GPL-3.0-only
   :recipe: /`eigenstratdatabasetools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eigenstratdatabasetools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eigenstratdatabasetools/meta.yaml>`_

   


.. conda:package:: eigenstratdatabasetools

   |downloads_eigenstratdatabasetools| |docker_eigenstratdatabasetools|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends pandas: 
   :depends python: 
   :depends sh: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install eigenstratdatabasetools

   and update with::

      conda update eigenstratdatabasetools

   or use the docker container::

      docker pull quay.io/biocontainers/eigenstratdatabasetools:<tag>

   (see `eigenstratdatabasetools/tags`_ for valid values for ``<tag>``)


.. |downloads_eigenstratdatabasetools| image:: https://img.shields.io/conda/dn/bioconda/eigenstratdatabasetools.svg?style=flat
   :target: https://anaconda.org/bioconda/eigenstratdatabasetools
   :alt:   (downloads)
.. |docker_eigenstratdatabasetools| image:: https://quay.io/repository/biocontainers/eigenstratdatabasetools/status
   :target: https://quay.io/repository/biocontainers/eigenstratdatabasetools
.. _`eigenstratdatabasetools/tags`: https://quay.io/repository/biocontainers/eigenstratdatabasetools?tab=tags


.. raw:: html

    <script>
        var package = "eigenstratdatabasetools";
        var versions = ["1.0.2","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eigenstratdatabasetools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eigenstratdatabasetools/README.html
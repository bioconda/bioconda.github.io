:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-files'
.. highlight: bash

galaxy-files
============

.. conda:recipe:: galaxy-files
   :replaces_section_title:
   :noindex:

   The Galaxy file sources framework and default plugins.

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: AFL-3.0
   :recipe: /`galaxy-files <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-files>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-files/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-files

   |downloads_galaxy-files| |docker_galaxy-files|

   :versions:
      
      

      ``23.0.5-0``,  ``23.0.4-0``

      

   
   :depends fs: 
   :depends galaxy-util: ``>=23.0``
   :depends python: ``>=3.7``
   :depends typing-extensions: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-files

   and update with::

      conda update galaxy-files

   or use the docker container::

      docker pull quay.io/biocontainers/galaxy-files:<tag>

   (see `galaxy-files/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-files| image:: https://img.shields.io/conda/dn/bioconda/galaxy-files.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-files
   :alt:   (downloads)
.. |docker_galaxy-files| image:: https://quay.io/repository/biocontainers/galaxy-files/status
   :target: https://quay.io/repository/biocontainers/galaxy-files
.. _`galaxy-files/tags`: https://quay.io/repository/biocontainers/galaxy-files?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-files";
        var versions = ["23.0.5","23.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-files/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-files/README.html
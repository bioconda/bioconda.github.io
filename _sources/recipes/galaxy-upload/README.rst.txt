:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-upload'
.. highlight: bash

galaxy-upload
=============

.. conda:recipe:: galaxy-upload
   :replaces_section_title:
   :noindex:

   Galaxy Command\-Line Upload Utility

   :homepage: https://github.com/galaxyproject/galaxy-upload
   :documentation: https://galaxy-upload.readthedocs.org
   
   :license: MIT
   :recipe: /`galaxy-upload <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-upload>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-upload/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-upload

   |downloads_galaxy-upload| |docker_galaxy-upload|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bioblend: ``>=0.18.0``
   :depends click: 
   :depends click-option-group: 
   :depends python: 
   :depends rich: 
   :depends tuspy: ``>=1.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-upload

   and update with::

      conda update galaxy-upload

   or use the docker container::

      docker pull quay.io/biocontainers/galaxy-upload:<tag>

   (see `galaxy-upload/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-upload| image:: https://img.shields.io/conda/dn/bioconda/galaxy-upload.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-upload
   :alt:   (downloads)
.. |docker_galaxy-upload| image:: https://quay.io/repository/biocontainers/galaxy-upload/status
   :target: https://quay.io/repository/biocontainers/galaxy-upload
.. _`galaxy-upload/tags`: https://quay.io/repository/biocontainers/galaxy-upload?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-upload";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-upload/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-upload/README.html
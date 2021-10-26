:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'liv_utils'
.. highlight: bash

liv_utils
=========

.. conda:recipe:: liv_utils
   :replaces_section_title:
   :noindex:

   Liverpool University Basic Tools

   :homepage: https://github.com/neilswainston/liv-utils
   :license: MIT
   :recipe: /`liv_utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liv_utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liv_utils/meta.yaml>`_

   


.. conda:package:: liv_utils

   |downloads_liv_utils| |docker_liv_utils|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends pysbol2: 
   :depends python: ``>3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install liv_utils

   and update with::

      conda update liv_utils

   or use the docker container::

      docker pull quay.io/biocontainers/liv_utils:<tag>

   (see `liv_utils/tags`_ for valid values for ``<tag>``)


.. |downloads_liv_utils| image:: https://img.shields.io/conda/dn/bioconda/liv_utils.svg?style=flat
   :target: https://anaconda.org/bioconda/liv_utils
   :alt:   (downloads)
.. |docker_liv_utils| image:: https://quay.io/repository/biocontainers/liv_utils/status
   :target: https://quay.io/repository/biocontainers/liv_utils
.. _`liv_utils/tags`: https://quay.io/repository/biocontainers/liv_utils?tab=tags


.. raw:: html

    <script>
        var package = "liv_utils";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/liv_utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/liv_utils/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snaketool-utils'
.. highlight: bash

snaketool-utils
===============

.. conda:recipe:: snaketool-utils
   :replaces_section_title:
   :noindex:

   Utility functions for Snaketool CLI for bioinformatics tools

   :homepage: https://github.com/beardymcjohnface/snaketool-utils
   :license: MIT
   :recipe: /`snaketool-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snaketool-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snaketool-utils/meta.yaml>`_

   


.. conda:package:: snaketool-utils

   |downloads_snaketool-utils| |docker_snaketool-utils|

   :versions:
      
      

      ``0.0.3-0``

      

   
   :depends click: ``>=8.1.3``
   :depends python: ``>=3.7``
   :depends pyyaml: ``>=6.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snaketool-utils

   and update with::

      conda update snaketool-utils

   or use the docker container::

      docker pull quay.io/biocontainers/snaketool-utils:<tag>

   (see `snaketool-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_snaketool-utils| image:: https://img.shields.io/conda/dn/bioconda/snaketool-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/snaketool-utils
   :alt:   (downloads)
.. |docker_snaketool-utils| image:: https://quay.io/repository/biocontainers/snaketool-utils/status
   :target: https://quay.io/repository/biocontainers/snaketool-utils
.. _`snaketool-utils/tags`: https://quay.io/repository/biocontainers/snaketool-utils?tab=tags


.. raw:: html

    <script>
        var package = "snaketool-utils";
        var versions = ["0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snaketool-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snaketool-utils/README.html
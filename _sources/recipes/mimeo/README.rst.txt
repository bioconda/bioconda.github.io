:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mimeo'
.. highlight: bash

mimeo
=====

.. conda:recipe:: mimeo
   :replaces_section_title:

   Scan genomes for internally repeated sequences\, elements which are repetitive in another species\, or high\-identity HGT candidate regions between species.

   :homepage: https://github.com/Adamtaranto/mimeo
   :license: MIT / MIT License
   :recipe: /`mimeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimeo/meta.yaml>`_

   


.. conda:package:: mimeo

   |downloads_mimeo| |docker_mimeo|

   :versions: 1.1.1-1, 1.1.1-0
   
   :depends biopython: >=1.70
   
   :depends pandas: >=0.20.3
   
   :depends python: >=3.5,<3.6.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mimeo

   and update with::

      conda update mimeo

   or use the docker container::

      docker pull quay.io/biocontainers/mimeo:<tag>

   (see `mimeo/tags`_ for valid values for ``<tag>``)


.. |downloads_mimeo| image:: https://img.shields.io/conda/dn/bioconda/mimeo.svg?style=flat
   :alt:   (downloads)
.. |docker_mimeo| image:: https://quay.io/repository/biocontainers/mimeo/status
   :target: https://quay.io/repository/biocontainers/mimeo
.. _`mimeo/tags`: https://quay.io/repository/biocontainers/mimeo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mimeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mimeo/README.html
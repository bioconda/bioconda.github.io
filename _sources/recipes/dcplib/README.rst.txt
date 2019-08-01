:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dcplib'
.. highlight: bash

dcplib
======

.. conda:recipe:: dcplib
   :replaces_section_title:

   Modules shared among multiple Data Coordination Platform components.

   :homepage: http://github.com/HumanCellAtlas/dcplib
   :license: MIT / MIT
   :recipe: /`dcplib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dcplib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dcplib/meta.yaml>`_

   


.. conda:package:: dcplib

   |downloads_dcplib| |docker_dcplib|

   :versions: 3.0.0-0, 2.1.2-0, 2.1.1-0, 2.0.3-0
   
   :depends boto3: >=1.7.13
   :depends crc32c: 
   :depends puremagic: 1.4
   :depends python: >=3
   :depends requests: >=2.18.4,<3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dcplib

   and update with::

      conda update dcplib

   or use the docker container::

      docker pull quay.io/biocontainers/dcplib:<tag>

   (see `dcplib/tags`_ for valid values for ``<tag>``)


.. |downloads_dcplib| image:: https://img.shields.io/conda/dn/bioconda/dcplib.svg?style=flat
   :target: https://anaconda.org/bioconda/dcplib
   :alt:   (downloads)
.. |docker_dcplib| image:: https://quay.io/repository/biocontainers/dcplib/status
   :target: https://quay.io/repository/biocontainers/dcplib
.. _`dcplib/tags`: https://quay.io/repository/biocontainers/dcplib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dcplib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dcplib/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'myriad'
.. highlight: bash

myriad
======

.. conda:recipe:: myriad
   :replaces_section_title:

   Simple distributed computing.

   :homepage: https://github.com/cjw85/myriad
   :license: MIT / MIT License
   :recipe: /`myriad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/myriad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/myriad/meta.yaml>`_

   


.. conda:package:: myriad

   |downloads_myriad| |docker_myriad|

   :versions: 0.1.4-0, 0.1.3-2, 0.1.3-0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install myriad

   and update with::

      conda update myriad

   or use the docker container::

      docker pull quay.io/biocontainers/myriad:<tag>

   (see `myriad/tags`_ for valid values for ``<tag>``)


.. |downloads_myriad| image:: https://img.shields.io/conda/dn/bioconda/myriad.svg?style=flat
   :alt:   (downloads)
.. |docker_myriad| image:: https://quay.io/repository/biocontainers/myriad/status
   :target: https://quay.io/repository/biocontainers/myriad
.. _`myriad/tags`: https://quay.io/repository/biocontainers/myriad?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/myriad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/myriad/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'compalignp'
.. highlight: bash

compalignp
==========

.. conda:recipe:: compalignp
   :replaces_section_title:

   Compute fractional \"identity\" between trusted alignment and test alignment.

   :homepage: http://www.biophys.uni-duesseldorf.de/bralibase/
   :license: GPL
   :recipe: /`compalignp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/compalignp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/compalignp/meta.yaml>`_

   


.. conda:package:: compalignp

   |downloads_compalignp| |docker_compalignp|

   :versions: 1.0-1, 1.0-0
   
   :depends libgcc-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install compalignp

   and update with::

      conda update compalignp

   or use the docker container::

      docker pull quay.io/biocontainers/compalignp:<tag>

   (see `compalignp/tags`_ for valid values for ``<tag>``)


.. |downloads_compalignp| image:: https://img.shields.io/conda/dn/bioconda/compalignp.svg?style=flat
   :alt:   (downloads)
.. |docker_compalignp| image:: https://quay.io/repository/biocontainers/compalignp/status
   :target: https://quay.io/repository/biocontainers/compalignp
.. _`compalignp/tags`: https://quay.io/repository/biocontainers/compalignp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/compalignp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/compalignp/README.html
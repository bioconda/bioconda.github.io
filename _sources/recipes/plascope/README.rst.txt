:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plascope'
.. highlight: bash

plascope
========

.. conda:recipe:: plascope
   :replaces_section_title:
   :noindex:

   PlaScope is a targeted approach to assess the plasmidome of bacteria.

   :homepage: https://github.com/labgem/PlaScope
   :license: GPL / GPL (>=3)
   :recipe: /`plascope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plascope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plascope/meta.yaml>`_

   


.. conda:package:: plascope

   |downloads_plascope| |docker_plascope|

   :versions:
      
      

      ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-1``,  ``1.3-0``

      

   
   :depends centrifuge: ``1.0.3``
   :depends spades: ``>=3.10.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plascope

   and update with::

      conda update plascope

   or use the docker container::

      docker pull quay.io/biocontainers/plascope:<tag>

   (see `plascope/tags`_ for valid values for ``<tag>``)


.. |downloads_plascope| image:: https://img.shields.io/conda/dn/bioconda/plascope.svg?style=flat
   :target: https://anaconda.org/bioconda/plascope
   :alt:   (downloads)
.. |docker_plascope| image:: https://quay.io/repository/biocontainers/plascope/status
   :target: https://quay.io/repository/biocontainers/plascope
.. _`plascope/tags`: https://quay.io/repository/biocontainers/plascope?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plascope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plascope/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stacks_summary'
.. highlight: bash

stacks_summary
==============

.. conda:recipe:: stacks_summary
   :replaces_section_title:

   Stacks reports generator

   :homepage: https://github.com/mariabernard/galaxy_wrappers
   :license: GPL / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`stacks_summary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stacks_summary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stacks_summary/meta.yaml>`_

   


.. conda:package:: stacks_summary

   |downloads_stacks_summary| |docker_stacks_summary|

   :versions: 1.1-1, 1.1-0, 1.0-1, 1.0-0
   
   :depends numpy: 
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stacks_summary

   and update with::

      conda update stacks_summary

   or use the docker container::

      docker pull quay.io/biocontainers/stacks_summary:<tag>

   (see `stacks_summary/tags`_ for valid values for ``<tag>``)


.. |downloads_stacks_summary| image:: https://img.shields.io/conda/dn/bioconda/stacks_summary.svg?style=flat
   :alt:   (downloads)
.. |docker_stacks_summary| image:: https://quay.io/repository/biocontainers/stacks_summary/status
   :target: https://quay.io/repository/biocontainers/stacks_summary
.. _`stacks_summary/tags`: https://quay.io/repository/biocontainers/stacks_summary?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stacks_summary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stacks_summary/README.html
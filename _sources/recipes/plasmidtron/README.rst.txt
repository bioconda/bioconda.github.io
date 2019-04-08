:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasmidtron'
.. highlight: bash

plasmidtron
===========

.. conda:recipe:: plasmidtron
   :replaces_section_title:

   PlasmidTron\: assembling the cause of phenotypes from NGS data

   :homepage: https://github.com/sanger-pathogens/plasmidtron
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`plasmidtron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidtron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidtron/meta.yaml>`_

   


.. conda:package:: plasmidtron

   |downloads_plasmidtron| |docker_plasmidtron|

   :versions: 0.4.1-1, 0.4.1-0, 0.3.5-0, 0.3.3-0
   
   :depends biopython: 
   :depends kmc: >=2.3.0
   :depends matplotlib: 
   :depends pyfastaq: >=3.12.0
   :depends python: >=3.5,<3.6.0a0
   :depends spades: >=3.9.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plasmidtron

   and update with::

      conda update plasmidtron

   or use the docker container::

      docker pull quay.io/biocontainers/plasmidtron:<tag>

   (see `plasmidtron/tags`_ for valid values for ``<tag>``)


.. |downloads_plasmidtron| image:: https://img.shields.io/conda/dn/bioconda/plasmidtron.svg?style=flat
   :alt:   (downloads)
.. |docker_plasmidtron| image:: https://quay.io/repository/biocontainers/plasmidtron/status
   :target: https://quay.io/repository/biocontainers/plasmidtron
.. _`plasmidtron/tags`: https://quay.io/repository/biocontainers/plasmidtron?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasmidtron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasmidtron/README.html
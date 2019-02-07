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

   :versions: 0.4.1, 0.3.5, 0.3.3

   :depends: :conda:package:`biopython`  :conda:package:`kmc` >=2.3.0 :conda:package:`matplotlib`  :conda:package:`pyfastaq` >=3.12.0 :conda:package:`python` 3.5* :conda:package:`spades` >=3.9.0 

   :required~by: |required_by_plasmidtron|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plasmidtron

   and update with::

      conda update plasmidtron

   or use the docker container::

      docker pull quay.io/repository/biocontainers/plasmidtron


.. |required_by_plasmidtron| conda:required_by:: plasmidtron
.. |downloads_plasmidtron| image:: https://img.shields.io/conda/dn/bioconda/plasmidtron.svg?style=flat
   :alt:   (downloads)
.. |docker_plasmidtron| image:: https://quay.io/repository/biocontainers/plasmidtron/status
   :target: https://quay.io/repository/biocontainers/plasmidtron







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasmidtron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasmidtron/README.html


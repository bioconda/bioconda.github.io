.. title:: Package Recipe 'kraken'
.. highlight: bash


kraken
======

.. conda:recipe:: kraken
   :replaces_section_title:

   Kraken is a system for assigning taxonomic labels to short DNA sequences\, usually obtained through metagenomic studies.

   :homepage: http://ccb.jhu.edu/software/kraken/
   :license: GPLv3
   :recipe: /`kraken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kraken/meta.yaml>`_
   :links: biotools: :biotools:`kraken`, doi: :doi:`10.1186/gb-2014-15-3-r46`

   


.. conda:package:: kraken

   |downloads_kraken| |docker_kraken|

   :versions: 1.1, 1.0, 0.10.6_eaf8fb68, 0.10.5beta

   :depends: :conda:package:`jellyfish` 1.* :conda:package:`libgcc-ng` >=4.9 :conda:package:`perl`  

   :required~by: |required_by_kraken|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kraken

   and update with::

      conda update kraken

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kraken


.. |required_by_kraken| conda:required_by:: kraken
.. |downloads_kraken| image:: https://img.shields.io/conda/dn/bioconda/kraken.svg?style=flat
   :alt:   (downloads)
.. |docker_kraken| image:: https://quay.io/repository/biocontainers/kraken/status
   :target: https://quay.io/repository/biocontainers/kraken







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kraken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kraken/README.html


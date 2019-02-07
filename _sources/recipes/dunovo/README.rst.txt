.. title:: Package Recipe 'dunovo'
.. highlight: bash


dunovo
======

.. conda:recipe:: dunovo
   :replaces_section_title:

   Du Novo\: A pipeline for processing duplex sequencing data.

   :homepage: https://github.com/galaxyproject/dunovo
   :license: GPLv2
   :recipe: /`dunovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dunovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dunovo/meta.yaml>`_

   


.. conda:package:: dunovo

   |downloads_dunovo| |docker_dunovo|

   :versions: 2.15, 2.14, 2.0.12, 2.0.9, 2.0.8, 2.0.6, 0.8.1, 0.7.6, 0.7.5, 0.7.4, 0.7.1, 0.7

   :depends: :conda:package:`bowtie` >=1.1.2 :conda:package:`gawk`  :conda:package:`libgcc`  :conda:package:`mafft` 7.221 :conda:package:`networkx` <2.0 :conda:package:`paste`  :conda:package:`python` 2.7* 

   :required~by: |required_by_dunovo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dunovo

   and update with::

      conda update dunovo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dunovo


.. |required_by_dunovo| conda:required_by:: dunovo
.. |downloads_dunovo| image:: https://img.shields.io/conda/dn/bioconda/dunovo.svg?style=flat
   :alt:   (downloads)
.. |docker_dunovo| image:: https://quay.io/repository/biocontainers/dunovo/status
   :target: https://quay.io/repository/biocontainers/dunovo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dunovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dunovo/README.html


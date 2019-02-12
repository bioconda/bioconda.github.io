.. title:: Package Recipe 'expansionhunter'
.. highlight: bash


expansionhunter
===============

.. conda:recipe:: expansionhunter
   :replaces_section_title:

   a tool for estimating repeat sizes

   :homepage: https://github.com/Illumina/ExpansionHunter
   :license: GPL3
   :recipe: /`expansionhunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expansionhunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expansionhunter/meta.yaml>`_

   


.. conda:package:: expansionhunter

   |downloads_expansionhunter| |docker_expansionhunter|

   :versions: 2.0.8, 2.0.6

   :depends: :conda:package:`boost` 1.61* :conda:package:`icu`  :conda:package:`libgcc`  

   :required~by: |required_by_expansionhunter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install expansionhunter

   and update with::

      conda update expansionhunter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/expansionhunter


.. |required_by_expansionhunter| conda:required_by:: expansionhunter
.. |downloads_expansionhunter| image:: https://img.shields.io/conda/dn/bioconda/expansionhunter.svg?style=flat
   :alt:   (downloads)
.. |docker_expansionhunter| image:: https://quay.io/repository/biocontainers/expansionhunter/status
   :target: https://quay.io/repository/biocontainers/expansionhunter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/expansionhunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/expansionhunter/README.html


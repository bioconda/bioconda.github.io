.. title:: Package Recipe 'trnascan-se'
.. highlight: bash


trnascan-se
===========

.. conda:recipe:: trnascan-se
   :replaces_section_title:

   tRNA detection in large\-scale genome sequence

   :homepage: http://lowelab.ucsc.edu/tRNAscan-SE/
   :license: GPLv3
   :recipe: /`trnascan-se <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trnascan-se>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trnascan-se/meta.yaml>`_

   


.. conda:package:: trnascan-se

   |downloads_trnascan-se| |docker_trnascan-se|

   :versions: 2.0, 1.3.1

   :depends: :conda:package:`infernal` ==1.1.2 :conda:package:`libgcc`  :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_trnascan-se|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trnascan-se

   and update with::

      conda update trnascan-se

   or use the docker container::

      docker pull quay.io/repository/biocontainers/trnascan-se


.. |required_by_trnascan-se| conda:required_by:: trnascan-se
.. |downloads_trnascan-se| image:: https://img.shields.io/conda/dn/bioconda/trnascan-se.svg?style=flat
   :alt:   (downloads)
.. |docker_trnascan-se| image:: https://quay.io/repository/biocontainers/trnascan-se/status
   :target: https://quay.io/repository/biocontainers/trnascan-se







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trnascan-se/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trnascan-se/README.html


.. title:: Package Recipe 'mapdamage2'
.. highlight: bash


mapdamage2
==========

.. conda:recipe:: mapdamage2
   :replaces_section_title:

   mapDamage\: tracking and quantifying damage patterns in ancient DNA sequences http\:\/\/geogenetics.ku.dk\/all\_literature\/mapdamage\/

   :homepage: https://github.com/ginolhac/mapDamage
   :license: MIT
   :recipe: /`mapdamage2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapdamage2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapdamage2/meta.yaml>`_

   


.. conda:package:: mapdamage2

   |downloads_mapdamage2| |docker_mapdamage2|

   :versions: 2.0.9, 2.0.8, 2.0.6

   :depends: :conda:package:`pysam`  :conda:package:`python` >=2.7,<3 :conda:package:`seqtk`  

   :required~by: |required_by_mapdamage2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mapdamage2

   and update with::

      conda update mapdamage2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mapdamage2


.. |required_by_mapdamage2| conda:required_by:: mapdamage2
.. |downloads_mapdamage2| image:: https://img.shields.io/conda/dn/bioconda/mapdamage2.svg?style=flat
   :alt:   (downloads)
.. |docker_mapdamage2| image:: https://quay.io/repository/biocontainers/mapdamage2/status
   :target: https://quay.io/repository/biocontainers/mapdamage2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapdamage2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapdamage2/README.html


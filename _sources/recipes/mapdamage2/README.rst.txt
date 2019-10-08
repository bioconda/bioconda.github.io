:orphan:  .. only available via index, not via toctree

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

   :versions: 2.1.1-0, 2.1.0-0, 2.0.9-0, 2.0.8-0, 2.0.6-2, 2.0.6-1, 2.0.6-0
   
   :depends pysam: 
   :depends python: >=3.5
   :depends seqtk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mapdamage2

   and update with::

      conda update mapdamage2

   or use the docker container::

      docker pull quay.io/biocontainers/mapdamage2:<tag>

   (see `mapdamage2/tags`_ for valid values for ``<tag>``)


.. |downloads_mapdamage2| image:: https://img.shields.io/conda/dn/bioconda/mapdamage2.svg?style=flat
   :target: https://anaconda.org/bioconda/mapdamage2
   :alt:   (downloads)
.. |docker_mapdamage2| image:: https://quay.io/repository/biocontainers/mapdamage2/status
   :target: https://quay.io/repository/biocontainers/mapdamage2
.. _`mapdamage2/tags`: https://quay.io/repository/biocontainers/mapdamage2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapdamage2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapdamage2/README.html
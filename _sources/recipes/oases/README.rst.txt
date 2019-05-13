:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oases'
.. highlight: bash

oases
=====

.. conda:recipe:: oases
   :replaces_section_title:

   De novo transcriptome assembler for short reads

   :homepage: http://www.ebi.ac.uk/~zerbino/oases/
   :license: GPL
   :recipe: /`oases <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oases>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oases/meta.yaml>`_
   :links: biotools: :biotools:`oases`

   


.. conda:package:: oases

   |downloads_oases| |docker_oases|

   :versions: 0.2.09-1, 0.2.09-0
   
   :depends libgcc-ng: >=4.9
   :depends velvet: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install oases

   and update with::

      conda update oases

   or use the docker container::

      docker pull quay.io/biocontainers/oases:<tag>

   (see `oases/tags`_ for valid values for ``<tag>``)


.. |downloads_oases| image:: https://img.shields.io/conda/dn/bioconda/oases.svg?style=flat
   :target: https://anaconda.org/bioconda/oases
   :alt:   (downloads)
.. |docker_oases| image:: https://quay.io/repository/biocontainers/oases/status
   :target: https://quay.io/repository/biocontainers/oases
.. _`oases/tags`: https://quay.io/repository/biocontainers/oases?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oases/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oases/README.html
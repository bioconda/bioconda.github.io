:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crisprbact'
.. highlight: bash

crisprbact
==========

.. conda:recipe:: crisprbact
   :replaces_section_title:

   Tools to design and analyse CRISPRi experiments

   :homepage: https://gitlab.pasteur.fr/dbikard/crisprbact
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`crisprbact <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprbact>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprbact/meta.yaml>`_

   


.. conda:package:: crisprbact

   |downloads_crisprbact| |docker_crisprbact|

   :versions: 0.3.6-0, 0.3.5-0, 0.3.4-0, 0.3.3-0, 0.3.2-0, 0.1.0-0
   
   :depends biopython: >=1.75,<2.0
   :depends click: >=7.0,<8.0
   :depends numpy: >=1.17,<2.0
   :depends pandas: >=0.25.3
   :depends poetry: 
   :depends python: >=3.7
   :depends rope: >=0.16.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crisprbact

   and update with::

      conda update crisprbact

   or use the docker container::

      docker pull quay.io/biocontainers/crisprbact:<tag>

   (see `crisprbact/tags`_ for valid values for ``<tag>``)


.. |downloads_crisprbact| image:: https://img.shields.io/conda/dn/bioconda/crisprbact.svg?style=flat
   :target: https://anaconda.org/bioconda/crisprbact
   :alt:   (downloads)
.. |docker_crisprbact| image:: https://quay.io/repository/biocontainers/crisprbact/status
   :target: https://quay.io/repository/biocontainers/crisprbact
.. _`crisprbact/tags`: https://quay.io/repository/biocontainers/crisprbact?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crisprbact/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crisprbact/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteinortho'
.. highlight: bash

proteinortho
============

.. conda:recipe:: proteinortho
   :replaces_section_title:

   Proteinortho is a tool to detect orthologous genes within different species.

   :homepage: https://gitlab.com/paulklemm_PHD/proteinortho/
   :license: GPL / GNU GPL-3
   :recipe: /`proteinortho <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteinortho>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteinortho/meta.yaml>`_

   


.. conda:package:: proteinortho

   |downloads_proteinortho| |docker_proteinortho|

   :versions: 6.0.3-0, 6.0.2c-0, 6.0.1-0, 6.0-0, 6.0b-0
   
   :depends diamond: 
   :depends libcxx: >=4.0.1
   :depends libgfortran: >=3.0.1,<4.0.0.a0
   :depends openblas: >=0.3.3,<0.3.4.0a0
   :depends openmp: 
   :depends perl: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proteinortho

   and update with::

      conda update proteinortho

   or use the docker container::

      docker pull quay.io/biocontainers/proteinortho:<tag>

   (see `proteinortho/tags`_ for valid values for ``<tag>``)


.. |downloads_proteinortho| image:: https://img.shields.io/conda/dn/bioconda/proteinortho.svg?style=flat
   :target: https://anaconda.org/bioconda/proteinortho
   :alt:   (downloads)
.. |docker_proteinortho| image:: https://quay.io/repository/biocontainers/proteinortho/status
   :target: https://quay.io/repository/biocontainers/proteinortho
.. _`proteinortho/tags`: https://quay.io/repository/biocontainers/proteinortho?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteinortho/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteinortho/README.html
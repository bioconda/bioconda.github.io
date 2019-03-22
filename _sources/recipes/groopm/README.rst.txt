:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'groopm'
.. highlight: bash

groopm
======

.. conda:recipe:: groopm
   :replaces_section_title:

   Metagenomic binning suite

   :homepage: https://ecogenomics.github.io/GroopM/
   :license: LGPL-3.0
   :recipe: /`groopm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/groopm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/groopm/meta.yaml>`_

   


.. conda:package:: groopm

   |downloads_groopm| |docker_groopm|

   :versions: 0.3.4-0
   
   :depends bamm: 
   
   :depends matplotlib: >=1.1.0
   
   :depends numpy: >=1.6.1
   
   :depends pillow: 
   
   :depends pytables: >=2.3
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends scipy: >=0.10.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install groopm

   and update with::

      conda update groopm

   or use the docker container::

      docker pull quay.io/biocontainers/groopm:<tag>

   (see `groopm/tags`_ for valid values for ``<tag>``)


.. |downloads_groopm| image:: https://img.shields.io/conda/dn/bioconda/groopm.svg?style=flat
   :alt:   (downloads)
.. |docker_groopm| image:: https://quay.io/repository/biocontainers/groopm/status
   :target: https://quay.io/repository/biocontainers/groopm
.. _`groopm/tags`: https://quay.io/repository/biocontainers/groopm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/groopm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/groopm/README.html
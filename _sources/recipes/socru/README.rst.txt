:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'socru'
.. highlight: bash

socru
=====

.. conda:recipe:: socru
   :replaces_section_title:

   Order and orientation of complete bacterial genomes

   :homepage: https://github.com/quadram-institute-bioscience/socru
   :license: GPLv3
   :recipe: /`socru <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/socru>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/socru/meta.yaml>`_

   


.. conda:package:: socru

   |downloads_socru| |docker_socru|

   :versions: 2.1.6-0, 2.1.4-0, 2.1.2-0, 2.1.1-0, 2.1.0-0, 2.0.0-0, 1.0.1-0, 1.0.0-0, 0.0.5-0
   
   :depends barrnap: 
   :depends biopython: >=1.68
   :depends blast: 
   :depends matplotlib: 
   :depends numpy: 
   :depends python: >=3
   :depends pyyaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install socru

   and update with::

      conda update socru

   or use the docker container::

      docker pull quay.io/biocontainers/socru:<tag>

   (see `socru/tags`_ for valid values for ``<tag>``)


.. |downloads_socru| image:: https://img.shields.io/conda/dn/bioconda/socru.svg?style=flat
   :target: https://anaconda.org/bioconda/socru
   :alt:   (downloads)
.. |docker_socru| image:: https://quay.io/repository/biocontainers/socru/status
   :target: https://quay.io/repository/biocontainers/socru
.. _`socru/tags`: https://quay.io/repository/biocontainers/socru?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/socru/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/socru/README.html
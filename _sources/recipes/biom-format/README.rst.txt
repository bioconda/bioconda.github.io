:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biom-format'
.. highlight: bash

biom-format
===========

.. conda:recipe:: biom-format
   :replaces_section_title:

   Biological Observation Matrix \(BIOM\) format

   :homepage: http://www.biom-format.org
   :license: BSD License
   :recipe: /`biom-format <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biom-format>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biom-format/meta.yaml>`_

   


.. conda:package:: biom-format

   |downloads_biom-format| |docker_biom-format|

   :versions: 2.1.7-0, 2.1.6-1, 2.1.6-0, 2.1.5-4, 2.1.5-3, 2.1.5-2, 2.1.5-1, 2.1.5-0, 2.1.4-2, 2.1.4-1, 2.1.4-0, 1.3.1-1, 1.3.1-0
   
   :depends click: 
   
   :depends future: >=0.15.0
   
   :depends h5py: 
   
   :depends numpy: >=1.3.0
   
   :depends pandas: >=0.20.0
   
   :depends pyqi: 0.3.2
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends scipy: >=0.13.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biom-format

   and update with::

      conda update biom-format

   or use the docker container::

      docker pull quay.io/biocontainers/biom-format:<tag>

   (see `biom-format/tags`_ for valid values for ``<tag>``)


.. |downloads_biom-format| image:: https://img.shields.io/conda/dn/bioconda/biom-format.svg?style=flat
   :alt:   (downloads)
.. |docker_biom-format| image:: https://quay.io/repository/biocontainers/biom-format/status
   :target: https://quay.io/repository/biocontainers/biom-format
.. _`biom-format/tags`: https://quay.io/repository/biocontainers/biom-format?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biom-format/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biom-format/README.html
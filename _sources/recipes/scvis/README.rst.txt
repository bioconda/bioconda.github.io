:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scvis'
.. highlight: bash

scvis
=====

.. conda:recipe:: scvis
   :replaces_section_title:

   scvis is a python package for dimension reduction of high\-dimensional biological data\, especially single\-cell RNA\-sequencing \(scRNA\-seq\) data.

   :homepage: https://bitbucket.org/jerry00/scvis-dev/commits/all
   :license: Creative Commons Attribution 4.0 International License
   :recipe: /`scvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvis/meta.yaml>`_

   


.. conda:package:: scvis

   |downloads_scvis| |docker_scvis|

   :versions: 0.1.0-0
   
   :depends matplotlib: >=1.5.1
   :depends nomkl: 
   :depends numpy: >=1.11.1
   :depends pandas: >=0.19.1
   :depends pip: 
   :depends python: 
   :depends pyyaml: >=3.11
   :depends setuptools: 
   :depends tensorflow: >=1.12
   :depends wheel: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scvis

   and update with::

      conda update scvis

   or use the docker container::

      docker pull quay.io/biocontainers/scvis:<tag>

   (see `scvis/tags`_ for valid values for ``<tag>``)


.. |downloads_scvis| image:: https://img.shields.io/conda/dn/bioconda/scvis.svg?style=flat
   :alt:   (downloads)
.. |docker_scvis| image:: https://quay.io/repository/biocontainers/scvis/status
   :target: https://quay.io/repository/biocontainers/scvis
.. _`scvis/tags`: https://quay.io/repository/biocontainers/scvis?tab=tags






Notes
-----
conda\-forge\:\:tensorflow requires GLIBC \>\=2.16. It should be present on most\, but not all systems. See https\:\/\/github.com\/conda\-forge\/tensorflow\-feedstock\/issues\/67


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scvis/README.html
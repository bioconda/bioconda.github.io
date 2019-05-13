:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pipits'
.. highlight: bash

pipits
======

.. conda:recipe:: pipits
   :replaces_section_title:

   PIPITS\: An automated pipeline for analyses of fungal internal transcribed spacer \(ITS\) sequences from the Illumina sequencing platform

   :homepage: https://github.com/hsgweon/pipits
   :license: GPL3 / GNU General Public License v3.0
   :recipe: /`pipits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipits/meta.yaml>`_

   


.. conda:package:: pipits

   |downloads_pipits| |docker_pipits|

   :versions: 2.3-4, 2.3-3, 2.3-2, 2.3-1, 2.3-0, 2.2-2, 2.2-1, 2.1-5, 2.1-3, 2.1-2, 2.1-1, 2.0-1, 2.0-0
   
   :depends biom-format: 
   :depends fastx_toolkit: 
   :depends hmmer: 
   :depends itsx: 
   :depends numpy: 
   :depends pandas: 
   :depends pispino: >=1.1
   :depends progressbar2: 
   :depends python: >=3.6,<3.7.0a0
   :depends rdptools: 
   :depends requests: 
   :depends seqkit: 
   :depends vsearch: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pipits

   and update with::

      conda update pipits

   or use the docker container::

      docker pull quay.io/biocontainers/pipits:<tag>

   (see `pipits/tags`_ for valid values for ``<tag>``)


.. |downloads_pipits| image:: https://img.shields.io/conda/dn/bioconda/pipits.svg?style=flat
   :target: https://anaconda.org/bioconda/pipits
   :alt:   (downloads)
.. |docker_pipits| image:: https://quay.io/repository/biocontainers/pipits/status
   :target: https://quay.io/repository/biocontainers/pipits
.. _`pipits/tags`: https://quay.io/repository/biocontainers/pipits?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pipits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pipits/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biskit'
.. highlight: bash

biskit
======

.. conda:recipe:: biskit
   :replaces_section_title:

   A Python platform for structural bioinformatics

   :homepage: http://biskit.pasteur.fr
   :developer docs: https://github.com/graik/biskit
   :license: LGPL / GNU General Public License (GPL)
   :recipe: /`biskit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biskit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biskit/meta.yaml>`_

   Biskit is a modular\, object\-oriented Python library for structural bioinformatics research.


.. conda:package:: biskit

   |downloads_biskit| |docker_biskit|

   :versions: 2.4.3-1, 2.4.3-0
   
   :depends biopython: 
   
   :depends numpy: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biskit

   and update with::

      conda update biskit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/biskit:<tag>

   (see `biskit/tags`_ for valid values for ``<tag>``)


.. |downloads_biskit| image:: https://img.shields.io/conda/dn/bioconda/biskit.svg?style=flat
   :alt:   (downloads)
.. |docker_biskit| image:: https://quay.io/repository/biocontainers/biskit/status
   :target: https://quay.io/repository/biocontainers/biskit
.. _`biskit/tags`: https://quay.io/repository/biocontainers/biskit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biskit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biskit/README.html
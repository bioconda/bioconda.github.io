:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dupre'
.. highlight: bash

dupre
=====

.. conda:recipe:: dupre
   :replaces_section_title:

   Duplicate rate estimation using linear programming and the hypergeometric distribution

   :homepage: https://bitbucket.org/genomeinformatics/dupre/
   :license: MIT
   :recipe: /`dupre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dupre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dupre/meta.yaml>`_

   


.. conda:package:: dupre

   |downloads_dupre| |docker_dupre|

   :versions: 0.1-2, 0.1-1, 0.1-0
   
   :depends h5py: 
   :depends numpy: 
   :depends pulp: 
   :depends pysam: 
   :depends python: >=3
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dupre

   and update with::

      conda update dupre

   or use the docker container::

      docker pull quay.io/biocontainers/dupre:<tag>

   (see `dupre/tags`_ for valid values for ``<tag>``)


.. |downloads_dupre| image:: https://img.shields.io/conda/dn/bioconda/dupre.svg?style=flat
   :target: https://anaconda.org/bioconda/dupre
   :alt:   (downloads)
.. |docker_dupre| image:: https://quay.io/repository/biocontainers/dupre/status
   :target: https://quay.io/repository/biocontainers/dupre
.. _`dupre/tags`: https://quay.io/repository/biocontainers/dupre?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dupre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dupre/README.html
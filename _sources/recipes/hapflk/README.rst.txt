:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hapflk'
.. highlight: bash

hapflk
======

.. conda:recipe:: hapflk
   :replaces_section_title:
   :noindex:

   hapflk is a software implementing the hapFLK and FLK tests for the detection of selection signatures based on multiple population genotyping data.

   :homepage: https://forge-dga.jouy.inra.fr/projects/hapflk
   :license: GPLv3
   :recipe: /`hapflk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapflk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapflk/meta.yaml>`_

   


.. conda:package:: hapflk

   |downloads_hapflk| |docker_hapflk|

   :versions:
      
      

      ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hapflk

   and update with::

      conda update hapflk

   or use the docker container::

      docker pull quay.io/biocontainers/hapflk:<tag>

   (see `hapflk/tags`_ for valid values for ``<tag>``)


.. |downloads_hapflk| image:: https://img.shields.io/conda/dn/bioconda/hapflk.svg?style=flat
   :target: https://anaconda.org/bioconda/hapflk
   :alt:   (downloads)
.. |docker_hapflk| image:: https://quay.io/repository/biocontainers/hapflk/status
   :target: https://quay.io/repository/biocontainers/hapflk
.. _`hapflk/tags`: https://quay.io/repository/biocontainers/hapflk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hapflk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hapflk/README.html
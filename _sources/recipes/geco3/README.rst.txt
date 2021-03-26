:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geco3'
.. highlight: bash

geco3
=====

.. conda:recipe:: geco3
   :replaces_section_title:
   :noindex:

   An efficient DNA sequence compressor using Neural Networks

   :homepage: https://github.com/cobilab/geco3
   :license: GPL / GPL3
   :recipe: /`geco3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geco3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geco3/meta.yaml>`_

   


.. conda:package:: geco3

   |downloads_geco3| |docker_geco3|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install geco3

   and update with::

      conda update geco3

   or use the docker container::

      docker pull quay.io/biocontainers/geco3:<tag>

   (see `geco3/tags`_ for valid values for ``<tag>``)


.. |downloads_geco3| image:: https://img.shields.io/conda/dn/bioconda/geco3.svg?style=flat
   :target: https://anaconda.org/bioconda/geco3
   :alt:   (downloads)
.. |docker_geco3| image:: https://quay.io/repository/biocontainers/geco3/status
   :target: https://quay.io/repository/biocontainers/geco3
.. _`geco3/tags`: https://quay.io/repository/biocontainers/geco3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geco3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geco3/README.html
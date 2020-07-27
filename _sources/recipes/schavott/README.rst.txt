:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'schavott'
.. highlight: bash

schavott
========

.. conda:recipe:: schavott
   :replaces_section_title:
   :noindex:

   Assembly and scaffolding of bacterial genomes in real time using MinION\-sequencing.

   :homepage: http://github.com/emilhaegglund/schavott
   :license: MIT
   :recipe: /`schavott <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schavott>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schavott/meta.yaml>`_

   


.. conda:package:: schavott

   |downloads_schavott| |docker_schavott|

   :versions:
      
      

      ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.3-0``,  ``0.2-0``

      

   
   :depends bokeh: 
   :depends h5py: ``>=2.2.0``
   :depends numpy: 
   :depends pyfasta: 
   :depends python: 
   :depends watchdog: ``>=0.8.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install schavott

   and update with::

      conda update schavott

   or use the docker container::

      docker pull quay.io/biocontainers/schavott:<tag>

   (see `schavott/tags`_ for valid values for ``<tag>``)


.. |downloads_schavott| image:: https://img.shields.io/conda/dn/bioconda/schavott.svg?style=flat
   :target: https://anaconda.org/bioconda/schavott
   :alt:   (downloads)
.. |docker_schavott| image:: https://quay.io/repository/biocontainers/schavott/status
   :target: https://quay.io/repository/biocontainers/schavott
.. _`schavott/tags`: https://quay.io/repository/biocontainers/schavott?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/schavott/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/schavott/README.html
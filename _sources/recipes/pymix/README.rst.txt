:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymix'
.. highlight: bash

pymix
=====

.. conda:recipe:: pymix
   :replaces_section_title:

   Python mixture package

   :homepage: http://www.pymix.org/pymix
   :license: GPL2
   :recipe: /`pymix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymix/meta.yaml>`_

   


.. conda:package:: pymix

   |downloads_pymix| |docker_pymix|

   :versions: 0.8-1, 0.8-0
   
   :depends ghmm: 
   
   :depends glib: 
   
   :depends gsl: >=2.2.1,<2.3.0a0
   
   :depends matplotlib: >=1.1.0,!=1.4.2,<1.5.0
   
   :depends numpy: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends xorg-libsm: 
   
   :depends xorg-libxau: 
   
   :depends xorg-libxdmcp: 
   
   :depends xorg-libxext: 
   
   :depends xorg-libxrender: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pymix

   and update with::

      conda update pymix

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pymix:<tag>

   (see `pymix/tags`_ for valid values for ``<tag>``)


.. |downloads_pymix| image:: https://img.shields.io/conda/dn/bioconda/pymix.svg?style=flat
   :alt:   (downloads)
.. |docker_pymix| image:: https://quay.io/repository/biocontainers/pymix/status
   :target: https://quay.io/repository/biocontainers/pymix
.. _`pymix/tags`: https://quay.io/repository/biocontainers/pymix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymix/README.html
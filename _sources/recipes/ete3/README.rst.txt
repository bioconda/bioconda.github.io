:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ete3'
.. highlight: bash

ete3
====

.. conda:recipe:: ete3
   :replaces_section_title:

   A Python framework for the analysis and visualization of trees

   :homepage: http://etetoolkit.org/
   :license: GPLv3
   :recipe: /`ete3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ete3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ete3/meta.yaml>`_

   


.. conda:package:: ete3

   |downloads_ete3| |docker_ete3|

   :versions: 3.1.1-1, 3.1.1-0, 3.0.0b35-1, 3.0.0b35-0
   
   :depends lxml: 
   
   :depends numpy: 
   
   :depends pyqt: >=4.11.4,<4.12.0a0
   
   :depends python: 
   
   :depends scipy: 
   
   :depends six: 
   
   :depends xorg-libsm: 
   
   :depends xorg-libxau: 
   
   :depends xorg-libxdmcp: 
   
   :depends xorg-libxext: 
   
   :depends xorg-libxrender: 
   
   :depends xorg-xextproto: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ete3

   and update with::

      conda update ete3

   or use the docker container::

      docker pull quay.io/biocontainers/ete3:<tag>

   (see `ete3/tags`_ for valid values for ``<tag>``)


.. |downloads_ete3| image:: https://img.shields.io/conda/dn/bioconda/ete3.svg?style=flat
   :alt:   (downloads)
.. |docker_ete3| image:: https://quay.io/repository/biocontainers/ete3/status
   :target: https://quay.io/repository/biocontainers/ete3
.. _`ete3/tags`: https://quay.io/repository/biocontainers/ete3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ete3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ete3/README.html
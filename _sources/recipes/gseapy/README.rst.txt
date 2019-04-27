:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gseapy'
.. highlight: bash

gseapy
======

.. conda:recipe:: gseapy
   :replaces_section_title:

   Gene Set Enrichment Analysis in Python

   :homepage: https://github.com/zqfang/gseapy
   :license: MIT / MIT License
   :recipe: /`gseapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gseapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gseapy/meta.yaml>`_

   


.. conda:package:: gseapy

   |downloads_gseapy| |docker_gseapy|

   :versions: 0.9.13-0, 0.9.9-0, 0.9.8-0, 0.9.7-0, 0.9.5-1, 0.9.3-1, 0.9.3-0, 0.9.2-0, 0.9.1-0, 0.9.0-0, 0.8.11-0, 0.8.6-0, 0.8.3-0, 0.8.2-0, 0.7.4-3, 0.7.4-0, 0.7.3-0, 0.7.2-0, 0.6.2-0, 0.6.0-0, 0.5.3-0, 0.5.2a0-0, 0.4.2-0
   
   :depends beautifulsoup4: >=4.4.1
   :depends bioservices: 
   :depends html5lib: 
   :depends lxml: 
   :depends matplotlib: >=1.4.3
   :depends numpy: >=1.13.0
   :depends pandas: >=0.16
   :depends python: >3
   :depends requests: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gseapy

   and update with::

      conda update gseapy

   or use the docker container::

      docker pull quay.io/biocontainers/gseapy:<tag>

   (see `gseapy/tags`_ for valid values for ``<tag>``)


.. |downloads_gseapy| image:: https://img.shields.io/conda/dn/bioconda/gseapy.svg?style=flat
   :alt:   (downloads)
.. |docker_gseapy| image:: https://quay.io/repository/biocontainers/gseapy/status
   :target: https://quay.io/repository/biocontainers/gseapy
.. _`gseapy/tags`: https://quay.io/repository/biocontainers/gseapy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gseapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gseapy/README.html
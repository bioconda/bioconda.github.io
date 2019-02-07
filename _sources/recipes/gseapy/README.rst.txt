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

   :versions: 0.9.9, 0.9.8, 0.9.7, 0.9.5, 0.9.3, 0.9.2, 0.9.1, 0.9.0, 0.8.11, 0.8.6, 0.8.3, 0.8.2, 0.7.4, 0.7.3, 0.7.2, 0.6.2, 0.6.0, 0.5.3, 0.5.2a0, 0.4.2

   :depends: :conda:package:`beautifulsoup4` >=4.4.1 :conda:package:`bioservices`  :conda:package:`html5lib`  :conda:package:`lxml`  :conda:package:`matplotlib` >=1.4.3 :conda:package:`numpy` >=1.13.0 :conda:package:`pandas` >=0.16 :conda:package:`python` >3 :conda:package:`requests`  :conda:package:`scipy`  

   :required~by: |required_by_gseapy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gseapy

   and update with::

      conda update gseapy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gseapy


.. |required_by_gseapy| conda:required_by:: gseapy
.. |downloads_gseapy| image:: https://img.shields.io/conda/dn/bioconda/gseapy.svg?style=flat
   :alt:   (downloads)
.. |docker_gseapy| image:: https://quay.io/repository/biocontainers/gseapy/status
   :target: https://quay.io/repository/biocontainers/gseapy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gseapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gseapy/README.html


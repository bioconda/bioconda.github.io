.. title:: Package Recipe 'dxpy'
.. highlight: bash


dxpy
====

.. conda:recipe:: dxpy
   :replaces_section_title:

   DNAnexus Platform API bindings for Python

   :homepage: https://github.com/dnanexus/dx-toolkit
   :documentation: https://wiki.dnanexus.com/downloads#DNAnexus-Platform-SDK
   
   :license: Apache / Apache-2.0
   :recipe: /`dxpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dxpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dxpy/meta.yaml>`_

   


.. conda:package:: dxpy

   |downloads_dxpy| |docker_dxpy|

   :versions: 0.273.0, 0.261.1, 0.257.3, 0.254.0, 0.250.2, 0.247.0, 0.225.0, 0.223.0

   :depends: :conda:package:`argcomplete` >=1.9.4 :conda:package:`beautifulsoup4` >=4.4.1 :conda:package:`cryptography` <=2.2.2 :conda:package:`futures` >=3.0.4 :conda:package:`psutil` >=3.3.0 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`python-dateutil` >=2.5 :conda:package:`python-magic` >=0.4.6 :conda:package:`requests` >=2.8.0 :conda:package:`websocket-client` >=0.53.0 

   :required~by: |required_by_dxpy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dxpy

   and update with::

      conda update dxpy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dxpy


.. |required_by_dxpy| conda:required_by:: dxpy
.. |downloads_dxpy| image:: https://img.shields.io/conda/dn/bioconda/dxpy.svg?style=flat
   :alt:   (downloads)
.. |docker_dxpy| image:: https://quay.io/repository/biocontainers/dxpy/status
   :target: https://quay.io/repository/biocontainers/dxpy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dxpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dxpy/README.html


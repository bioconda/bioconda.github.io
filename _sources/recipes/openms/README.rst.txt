:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openms'
.. highlight: bash

openms
======

.. conda:recipe:: openms
   :replaces_section_title:

   OpenMS is an open\-source software C\+\+ library for LC\-MS data management and analyses

   :homepage: https://github.com/OpenMS/OpenMS
   :license: BSD
   :recipe: /`openms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openms/meta.yaml>`_
   :links: biotools: :biotools:`openms`, doi: :doi:`10.1007/978-1-60761-987-1_23`

   


.. conda:package:: openms

   |downloads_openms| |docker_openms|

   :versions: 2.4.0-1, 2.4.0-0, 2.3.0-3, 2.3.0-2, 2.3.0-1, 2.3.0-0, 2.2.0-2, 2.2.0-1, 2.2.0-0, 2.1.0-0
   
   :depends boost: >=1.68.0,<1.68.1.0a0
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends coinmp: 
   
   :depends eigen: 
   
   :depends glpk: >=4.65,<4.66.0a0
   
   :depends gsl: >=2.4,<2.5.0a0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends libsvm: >=3.21,<3.22.0a0
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends qt: >=5.6.2,<5.7.0a0
   
   :depends xerces-c: >=3.2.2,<3.2.3.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install openms

   and update with::

      conda update openms

   or use the docker container::

      docker pull quay.io/repository/biocontainers/openms:<tag>

   (see `openms/tags`_ for valid values for ``<tag>``)


.. |downloads_openms| image:: https://img.shields.io/conda/dn/bioconda/openms.svg?style=flat
   :alt:   (downloads)
.. |docker_openms| image:: https://quay.io/repository/biocontainers/openms/status
   :target: https://quay.io/repository/biocontainers/openms
.. _`openms/tags`: https://quay.io/repository/biocontainers/openms?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openms/README.html
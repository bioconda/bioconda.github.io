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
   :links: biotools: :biotools:`openms`, doi: :doi:`10.1038/nmeth.3959`

   


.. conda:package:: libopenms

   |downloads_libopenms| |docker_libopenms|

   :versions: 2.4.0-3
   
   :depends boost: >=1.70.0,<1.70.1.0a0
   :depends bzip2: >=1.0.8,<2.0a0
   :depends coinmp: 
   :depends eigen: 
   :depends glpk: >=4.65,<4.66.0a0
   :depends gsl: >=2.5,<2.6.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends libsvm: >=3.21,<3.22.0a0
   :depends libtool: 
   :depends qt: >=5.12.5,<5.13.0a0
   :depends sqlite: >=3.30.1,<4.0a0
   :depends xerces-c: >=3.2.2,<3.2.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libopenms

   and update with::

      conda update libopenms

   or use the docker container::

      docker pull quay.io/biocontainers/libopenms:<tag>

   (see `libopenms/tags`_ for valid values for ``<tag>``)


.. |downloads_libopenms| image:: https://img.shields.io/conda/dn/bioconda/libopenms.svg?style=flat
   :target: https://anaconda.org/bioconda/libopenms
   :alt:   (downloads)
.. |docker_libopenms| image:: https://quay.io/repository/biocontainers/openms/status
   :target: https://quay.io/repository/biocontainers/openms
.. _`libopenms/tags`: https://quay.io/repository/biocontainers/libopenms?tab=tags



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

      docker pull quay.io/biocontainers/openms:<tag>

   (see `openms/tags`_ for valid values for ``<tag>``)


.. |downloads_openms| image:: https://img.shields.io/conda/dn/bioconda/openms.svg?style=flat
   :target: https://anaconda.org/bioconda/openms
   :alt:   (downloads)
.. |docker_openms| image:: https://quay.io/repository/biocontainers/openms/status
   :target: https://quay.io/repository/biocontainers/openms
.. _`openms/tags`: https://quay.io/repository/biocontainers/openms?tab=tags



.. conda:package:: openms-tools

   |downloads_openms-tools| |docker_openms-tools|

   :versions: 2.4.0-3
   
   :depends libgcc-ng: >=7.3.0
   :depends libopenms: 2.4.0 hcf7c050_3
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install openms-tools

   and update with::

      conda update openms-tools

   or use the docker container::

      docker pull quay.io/biocontainers/openms-tools:<tag>

   (see `openms-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_openms-tools| image:: https://img.shields.io/conda/dn/bioconda/openms-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/openms-tools
   :alt:   (downloads)
.. |docker_openms-tools| image:: https://quay.io/repository/biocontainers/openms/status
   :target: https://quay.io/repository/biocontainers/openms
.. _`openms-tools/tags`: https://quay.io/repository/biocontainers/openms-tools?tab=tags



.. conda:package:: pyopenms

   |downloads_pyopenms| |docker_pyopenms|

   :versions: 2.4.0-3, 2.4.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libopenms: 2.4.0 hcf7c050_3
   :depends libstdcxx-ng: >=7.3.0
   :depends numpy: 
   :depends python: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyopenms

   and update with::

      conda update pyopenms

   or use the docker container::

      docker pull quay.io/biocontainers/pyopenms:<tag>

   (see `pyopenms/tags`_ for valid values for ``<tag>``)


.. |downloads_pyopenms| image:: https://img.shields.io/conda/dn/bioconda/pyopenms.svg?style=flat
   :target: https://anaconda.org/bioconda/pyopenms
   :alt:   (downloads)
.. |docker_pyopenms| image:: https://quay.io/repository/biocontainers/openms/status
   :target: https://quay.io/repository/biocontainers/openms
.. _`pyopenms/tags`: https://quay.io/repository/biocontainers/pyopenms?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openms/README.html
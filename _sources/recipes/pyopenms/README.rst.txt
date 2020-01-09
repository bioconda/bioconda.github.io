:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyopenms'
.. highlight: bash

pyopenms
========

.. conda:recipe:: pyopenms
   :replaces_section_title:

   OpenMS is an open\-source software C\+\+ library for LC\-MS data management and analyses

   :homepage: https://github.com/OpenMS/OpenMS
   :license: BSD
   :recipe: /`pyopenms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopenms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopenms/meta.yaml>`_
   :links: biotools: :biotools:`openms`, doi: :doi:`10.1038/nmeth.3959`

   


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
.. |docker_pyopenms| image:: https://quay.io/repository/biocontainers/pyopenms/status
   :target: https://quay.io/repository/biocontainers/pyopenms
.. _`pyopenms/tags`: https://quay.io/repository/biocontainers/pyopenms?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyopenms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyopenms/README.html
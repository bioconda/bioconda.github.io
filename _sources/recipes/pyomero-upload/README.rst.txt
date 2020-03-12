:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyomero-upload'
.. highlight: bash

pyomero-upload
==============

.. conda:recipe:: pyomero-upload
   :replaces_section_title:

   Client library offering helper methods to upload data to an OMERO server.

   :homepage: http://www.synthsys.ed.ac.uk/
   :license: MIT
   :recipe: /`pyomero-upload <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyomero-upload>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyomero-upload/meta.yaml>`_

   


.. conda:package:: pyomero-upload

   |downloads_pyomero-upload| |docker_pyomero-upload|

   :versions: 5.4.10_1.2.0-0, 1.1.0-0, 1.0.0-3, 1.0.0-2, 1.0.0-1, 1.0.0-0
   
   :depends enum34: 
   :depends filetype: 
   :depends future: 
   :depends numpy: 
   :depends pandas: 
   :depends pillow: 
   :depends python: <3
   :depends python-omero: 5.4.10.*
   :depends pyyaml: 
   :depends requests: 
   :depends scipy: 
   :depends zeroc-ice: 3.6.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyomero-upload

   and update with::

      conda update pyomero-upload

   or use the docker container::

      docker pull quay.io/biocontainers/pyomero-upload:<tag>

   (see `pyomero-upload/tags`_ for valid values for ``<tag>``)


.. |downloads_pyomero-upload| image:: https://img.shields.io/conda/dn/bioconda/pyomero-upload.svg?style=flat
   :target: https://anaconda.org/bioconda/pyomero-upload
   :alt:   (downloads)
.. |docker_pyomero-upload| image:: https://quay.io/repository/biocontainers/pyomero-upload/status
   :target: https://quay.io/repository/biocontainers/pyomero-upload
.. _`pyomero-upload/tags`: https://quay.io/repository/biocontainers/pyomero-upload?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyomero-upload/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyomero-upload/README.html
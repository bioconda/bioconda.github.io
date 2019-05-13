:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-tripal'
.. highlight: bash

python-tripal
=============

.. conda:recipe:: python-tripal
   :replaces_section_title:

   Tripal API library

   :homepage: https://github.com/galaxy-genome-annotation/python-tripal
   :license: MIT / MIT License
   :recipe: /`python-tripal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-tripal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-tripal/meta.yaml>`_
   :links: biotools: :biotools:`tripal`

   


.. conda:package:: python-tripal

   |downloads_python-tripal| |docker_python-tripal|

   :versions: 3.2.1-0, 3.2-0, 3.1.1-0, 3.0-1, 3.0-0, 2.0.4-0, 2.0.3-0, 2.0.2-0, 2.0.1-0, 1.8-0, 1.7-0, 1.5-0
   
   :depends click: 
   :depends future: 
   :depends python: 
   :depends pyyaml: 
   :depends requests: >=2.4.3
   :depends wrapt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-tripal

   and update with::

      conda update python-tripal

   or use the docker container::

      docker pull quay.io/biocontainers/python-tripal:<tag>

   (see `python-tripal/tags`_ for valid values for ``<tag>``)


.. |downloads_python-tripal| image:: https://img.shields.io/conda/dn/bioconda/python-tripal.svg?style=flat
   :target: https://anaconda.org/bioconda/python-tripal
   :alt:   (downloads)
.. |docker_python-tripal| image:: https://quay.io/repository/biocontainers/python-tripal/status
   :target: https://quay.io/repository/biocontainers/python-tripal
.. _`python-tripal/tags`: https://quay.io/repository/biocontainers/python-tripal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-tripal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-tripal/README.html
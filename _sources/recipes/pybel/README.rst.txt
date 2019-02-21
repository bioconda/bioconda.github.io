:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybel'
.. highlight: bash

pybel
=====

.. conda:recipe:: pybel
   :replaces_section_title:

   PyBEL is a Python package for parsing and handling biological networks encoded in the Biological Expression Language \(BEL\)

   :homepage: https://github.com/pybel/pybel
   :license: Apache Software License
   :recipe: /`pybel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybel/meta.yaml>`_

   


.. conda:package:: pybel

   |downloads_pybel| |docker_pybel|

   :versions: 0.9.3-1, 0.9.3-0, 0.5.4-0, 0.4.0-0
   
   :depends click: 
   
   :depends configparser: 
   
   :depends ndex-python: 
   
   :depends networkx: 
   
   :depends onto2nx: 
   
   :depends py2neo: 
   
   :depends pyparsing: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends requests: 
   
   :depends requests-file: 
   
   :depends sqlalchemy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pybel

   and update with::

      conda update pybel

   or use the docker container::

      docker pull quay.io/biocontainers/pybel:<tag>

   (see `pybel/tags`_ for valid values for ``<tag>``)


.. |downloads_pybel| image:: https://img.shields.io/conda/dn/bioconda/pybel.svg?style=flat
   :alt:   (downloads)
.. |docker_pybel| image:: https://quay.io/repository/biocontainers/pybel/status
   :target: https://quay.io/repository/biocontainers/pybel
.. _`pybel/tags`: https://quay.io/repository/biocontainers/pybel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybel/README.html
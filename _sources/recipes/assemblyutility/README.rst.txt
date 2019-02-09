.. title:: Package Recipe 'assemblyutility'
.. highlight: bash


assemblyutility
===============

.. conda:recipe:: assemblyutility
   :replaces_section_title:

   Tools for DBG2OLC genoome assembler

   :homepage: https://github.com/yechengxi/AssemblyUtility
   :license: 
   :recipe: /`assemblyutility <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblyutility>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblyutility/meta.yaml>`_

   


.. conda:package:: assemblyutility

   |downloads_assemblyutility| |docker_assemblyutility|

   :versions: 20160209

   :depends: :conda:package:`zlib`  

   :required~by: |required_by_assemblyutility|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install assemblyutility

   and update with::

      conda update assemblyutility

   or use the docker container::

      docker pull quay.io/repository/biocontainers/assemblyutility


.. |required_by_assemblyutility| conda:required_by:: assemblyutility
.. |downloads_assemblyutility| image:: https://img.shields.io/conda/dn/bioconda/assemblyutility.svg?style=flat
   :alt:   (downloads)
.. |docker_assemblyutility| image:: https://quay.io/repository/biocontainers/assemblyutility/status
   :target: https://quay.io/repository/biocontainers/assemblyutility







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assemblyutility/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assemblyutility/README.html


:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyimzml'
.. highlight: bash

pyimzml
=======

.. conda:recipe:: pyimzml
   :replaces_section_title:

   Parser for conversion of imzML 1.1.0 files

   :homepage: https://github.com/alexandrovteam/pyimzML
   :license: Apache / Apache-2.0
   :recipe: /`pyimzml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyimzml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyimzml/meta.yaml>`_

   


.. conda:package:: pyimzml

   |downloads_pyimzml| |docker_pyimzml|

   :versions: 1.2.4-0, 1.2.3-0, 1.2.1-1, 1.2.1-0
   
   :depends numpy: 
   
   :depends python: 
   
   :depends wheezy.template: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyimzml

   and update with::

      conda update pyimzml

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyimzml:<tag>

   (see `pyimzml/tags`_ for valid values for ``<tag>``)


.. |downloads_pyimzml| image:: https://img.shields.io/conda/dn/bioconda/pyimzml.svg?style=flat
   :alt:   (downloads)
.. |docker_pyimzml| image:: https://quay.io/repository/biocontainers/pyimzml/status
   :target: https://quay.io/repository/biocontainers/pyimzml
.. _`pyimzml/tags`: https://quay.io/repository/biocontainers/pyimzml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyimzml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyimzml/README.html
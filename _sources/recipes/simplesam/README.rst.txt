:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simplesam'
.. highlight: bash

simplesam
=========

.. conda:recipe:: simplesam
   :replaces_section_title:

   Simple pure Python SAM parser and objects for working with SAM records

   :homepage: http://mattshirley.com
   :documentation: http://simplesam.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/mdshw5/simplesam
   :license: MIT
   :recipe: /`simplesam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simplesam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simplesam/meta.yaml>`_

   


.. conda:package:: simplesam

   |downloads_simplesam| |docker_simplesam|

   :versions: 0.1.3.1-0
   
   :depends pip: 
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install simplesam

   and update with::

      conda update simplesam

   or use the docker container::

      docker pull quay.io/biocontainers/simplesam:<tag>

   (see `simplesam/tags`_ for valid values for ``<tag>``)


.. |downloads_simplesam| image:: https://img.shields.io/conda/dn/bioconda/simplesam.svg?style=flat
   :target: https://anaconda.org/bioconda/simplesam
   :alt:   (downloads)
.. |docker_simplesam| image:: https://quay.io/repository/biocontainers/simplesam/status
   :target: https://quay.io/repository/biocontainers/simplesam
.. _`simplesam/tags`: https://quay.io/repository/biocontainers/simplesam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simplesam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simplesam/README.html
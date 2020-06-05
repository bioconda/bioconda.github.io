:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abacat'
.. highlight: bash

abacat
======

.. conda:recipe:: abacat
   :replaces_section_title:
   :noindex:

   abacat \- A BActerial genome Curation and Annotation Toolkit

   :homepage: https://github.com/vinisalazar/abacat
   :license: MIT / MIT
   :recipe: /`abacat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abacat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abacat/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3740277`

   


.. conda:package:: abacat

   |downloads_abacat| |docker_abacat|

   :versions:
      
      

      ``0.0.4a-0``

      

   
   :depends biopython: 
   :depends fastani: ``>=1.3``
   :depends matplotlib-base: 
   :depends pandas: 
   :depends prodigal: ``>=2.6.2``
   :depends python: ``>=3.6``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install abacat

   and update with::

      conda update abacat

   or use the docker container::

      docker pull quay.io/biocontainers/abacat:<tag>

   (see `abacat/tags`_ for valid values for ``<tag>``)


.. |downloads_abacat| image:: https://img.shields.io/conda/dn/bioconda/abacat.svg?style=flat
   :target: https://anaconda.org/bioconda/abacat
   :alt:   (downloads)
.. |docker_abacat| image:: https://quay.io/repository/biocontainers/abacat/status
   :target: https://quay.io/repository/biocontainers/abacat
.. _`abacat/tags`: https://quay.io/repository/biocontainers/abacat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abacat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abacat/README.html
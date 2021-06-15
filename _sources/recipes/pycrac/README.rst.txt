:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pycrac'
.. highlight: bash

pycrac
======

.. conda:recipe:: pycrac
   :replaces_section_title:
   :noindex:

   Python NextGen sequencing data processing software

   :homepage: http://sandergranneman.bio.ed.ac.uk/Granneman_Lab/pyCRAC_software.html
   :license: Apache / Apache-2.0
   :recipe: /`pycrac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycrac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycrac/meta.yaml>`_

   


.. conda:package:: pycrac

   |downloads_pycrac| |docker_pycrac|

   :versions:
      
      

      ``1.5.1-0``

      

   
   :depends numpy: ``>=1.5.1``
   :depends pysam: ``>=0.6``
   :depends python: 
   :depends six: ``>=1.9.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pycrac

   and update with::

      conda update pycrac

   or use the docker container::

      docker pull quay.io/biocontainers/pycrac:<tag>

   (see `pycrac/tags`_ for valid values for ``<tag>``)


.. |downloads_pycrac| image:: https://img.shields.io/conda/dn/bioconda/pycrac.svg?style=flat
   :target: https://anaconda.org/bioconda/pycrac
   :alt:   (downloads)
.. |docker_pycrac| image:: https://quay.io/repository/biocontainers/pycrac/status
   :target: https://quay.io/repository/biocontainers/pycrac
.. _`pycrac/tags`: https://quay.io/repository/biocontainers/pycrac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycrac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycrac/README.html
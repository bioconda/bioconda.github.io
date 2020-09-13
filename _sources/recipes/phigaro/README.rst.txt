:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phigaro'
.. highlight: bash

phigaro
=======

.. conda:recipe:: phigaro
   :replaces_section_title:
   :noindex:

   Phigaro is a scalable command\-line tool for predicting phages and prophages.

   :homepage: https://phigaro.readthedocs.io/
   :license: MIT / MIT
   :recipe: /`phigaro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phigaro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phigaro/meta.yaml>`_

   


.. conda:package:: phigaro

   |downloads_phigaro| |docker_phigaro|

   :versions:
      
      

      ``2.2.6-0``

      

   
   :depends argparse: 
   :depends beautifulsoup4: ``>=4.4.0``
   :depends biopython: 
   :depends bs4: 
   :depends future: 
   :depends hmmer: 
   :depends lxml: 
   :depends numpy: 
   :depends pandas: ``>=0.23.4``
   :depends plotly: 
   :depends prodigal: 
   :depends python: ``>=3.6``
   :depends pyyaml: ``>=5.1``
   :depends sh: 
   :depends six: ``>=1.7.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phigaro

   and update with::

      conda update phigaro

   or use the docker container::

      docker pull quay.io/biocontainers/phigaro:<tag>

   (see `phigaro/tags`_ for valid values for ``<tag>``)


.. |downloads_phigaro| image:: https://img.shields.io/conda/dn/bioconda/phigaro.svg?style=flat
   :target: https://anaconda.org/bioconda/phigaro
   :alt:   (downloads)
.. |docker_phigaro| image:: https://quay.io/repository/biocontainers/phigaro/status
   :target: https://quay.io/repository/biocontainers/phigaro
.. _`phigaro/tags`: https://quay.io/repository/biocontainers/phigaro?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phigaro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phigaro/README.html
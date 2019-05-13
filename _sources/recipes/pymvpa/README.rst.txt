:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymvpa'
.. highlight: bash

pymvpa
======

.. conda:recipe:: pymvpa
   :replaces_section_title:

   PyMVPA \-\- Multivariate Pattern Analysis in Python

   :homepage: http://www.pymvpa.org/
   :developer docs: https://github.com/PyMVPA/PyMVPA
   :license: perl_5
   :recipe: /`pymvpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymvpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymvpa/meta.yaml>`_

   


.. conda:package:: pymvpa

   |downloads_pymvpa| |docker_pymvpa|

   :versions: 2.6.5-0, 2.6.4-0, 2.6.0-2, 2.6.0-1, 2.6.0-0
   
   :depends libgcc-ng: >=4.9
   :depends libsvm: >=3.21,<3.22.0a0
   :depends matplotlib: 
   :depends numpy: 
   :depends python: >=2.7,<2.8.0a0
   :depends scipy: 
   :depends swig: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pymvpa

   and update with::

      conda update pymvpa

   or use the docker container::

      docker pull quay.io/biocontainers/pymvpa:<tag>

   (see `pymvpa/tags`_ for valid values for ``<tag>``)


.. |downloads_pymvpa| image:: https://img.shields.io/conda/dn/bioconda/pymvpa.svg?style=flat
   :target: https://anaconda.org/bioconda/pymvpa
   :alt:   (downloads)
.. |docker_pymvpa| image:: https://quay.io/repository/biocontainers/pymvpa/status
   :target: https://quay.io/repository/biocontainers/pymvpa
.. _`pymvpa/tags`: https://quay.io/repository/biocontainers/pymvpa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymvpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymvpa/README.html
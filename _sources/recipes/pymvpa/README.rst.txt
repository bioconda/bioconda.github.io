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

   :versions: 2.6.5, 2.6.4, 2.6.0

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libsvm` >=3.21,<3.22.0a0 :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy`  :conda:package:`swig`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_pymvpa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pymvpa

   and update with::

      conda update pymvpa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pymvpa


.. |required_by_pymvpa| conda:required_by:: pymvpa
.. |downloads_pymvpa| image:: https://img.shields.io/conda/dn/bioconda/pymvpa.svg?style=flat
   :alt:   (downloads)
.. |docker_pymvpa| image:: https://quay.io/repository/biocontainers/pymvpa/status
   :target: https://quay.io/repository/biocontainers/pymvpa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymvpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymvpa/README.html


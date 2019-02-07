.. title:: Package Recipe 'sevenbridges-python'
.. highlight: bash


sevenbridges-python
===================

.. conda:recipe:: sevenbridges-python
   :replaces_section_title:

   SBG API python client bindings

   :homepage: https://github.com/sbg/sevenbridges-python
   :license: Apache / Apache-2.0
   :recipe: /`sevenbridges-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sevenbridges-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sevenbridges-python/meta.yaml>`_

   sevenbridges\-python is a Python library that provides an interface for the Seven Bridges Platform the Cancer Genomics Cloud and Cavatica public APIs. It works with Python versions 2.6\+ and supports Python 3.


.. conda:package:: sevenbridges-python

   |downloads_sevenbridges-python| |docker_sevenbridges-python|

   :versions: 0.17.7, 0.17.5, 0.17.4, 0.17.3, 0.17.2, 0.17.1, 0.17.0, 0.16.0, 0.15.2, 0.15.0, 0.7.2

   :depends: :conda:package:`futures` >=3.0.4 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`requests` >=2.18.4 :conda:package:`six` >=1.10.0 

   :required~by: |required_by_sevenbridges-python|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sevenbridges-python

   and update with::

      conda update sevenbridges-python

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sevenbridges-python


.. |required_by_sevenbridges-python| conda:required_by:: sevenbridges-python
.. |downloads_sevenbridges-python| image:: https://img.shields.io/conda/dn/bioconda/sevenbridges-python.svg?style=flat
   :alt:   (downloads)
.. |docker_sevenbridges-python| image:: https://quay.io/repository/biocontainers/sevenbridges-python/status
   :target: https://quay.io/repository/biocontainers/sevenbridges-python







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sevenbridges-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sevenbridges-python/README.html


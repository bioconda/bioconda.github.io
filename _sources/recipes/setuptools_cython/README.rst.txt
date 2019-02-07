.. title:: Package Recipe 'setuptools_cython'
.. highlight: bash


setuptools_cython
=================

.. conda:recipe:: setuptools_cython
   :replaces_section_title:

   Cython setuptools integration

   :homepage: http://pypi.python.org/pypi/setuptools_cython/
   :license: http://www.gnu.org/licenses/gpl-2.0.html
   :recipe: /`setuptools_cython <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/setuptools_cython>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/setuptools_cython/meta.yaml>`_

   


.. conda:package:: setuptools_cython

   |downloads_setuptools_cython| |docker_setuptools_cython|

   :versions: 0.2.1

   :depends: :conda:package:`cython`  :conda:package:`python` 2.7* :conda:package:`setuptools`  

   :required~by: |required_by_setuptools_cython|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install setuptools_cython

   and update with::

      conda update setuptools_cython

   or use the docker container::

      docker pull quay.io/repository/biocontainers/setuptools_cython


.. |required_by_setuptools_cython| conda:required_by:: setuptools_cython
.. |downloads_setuptools_cython| image:: https://img.shields.io/conda/dn/bioconda/setuptools_cython.svg?style=flat
   :alt:   (downloads)
.. |docker_setuptools_cython| image:: https://quay.io/repository/biocontainers/setuptools_cython/status
   :target: https://quay.io/repository/biocontainers/setuptools_cython







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/setuptools_cython/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/setuptools_cython/README.html


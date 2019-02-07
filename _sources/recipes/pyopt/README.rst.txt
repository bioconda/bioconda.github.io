.. title:: Package Recipe 'pyopt'
.. highlight: bash


pyopt
=====

.. conda:recipe:: pyopt
   :replaces_section_title:

   

   :homepage: http://www.pyopt.org/index.html
   :license: LGPLv3
   :recipe: /`pyopt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyopt/meta.yaml>`_

   


.. conda:package:: pyopt

   |downloads_pyopt| |docker_pyopt|

   :versions: 1.2.0

   :depends: :conda:package:`mpi4py`  :conda:package:`numpy` >=1.0 :conda:package:`python` 2.7* 

   :required~by: |required_by_pyopt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyopt

   and update with::

      conda update pyopt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyopt


.. |required_by_pyopt| conda:required_by:: pyopt
.. |downloads_pyopt| image:: https://img.shields.io/conda/dn/bioconda/pyopt.svg?style=flat
   :alt:   (downloads)
.. |docker_pyopt| image:: https://quay.io/repository/biocontainers/pyopt/status
   :target: https://quay.io/repository/biocontainers/pyopt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyopt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyopt/README.html


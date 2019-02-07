.. title:: Package Recipe 'yahmm'
.. highlight: bash


yahmm
=====

.. conda:recipe:: yahmm
   :replaces_section_title:

   YAHMM is a HMM package for Python\, implemented in Cython for speed.

   :homepage: http://pypi.python.org/pypi/yahmm/
   :license: MIT
   :recipe: /`yahmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yahmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yahmm/meta.yaml>`_

   


.. conda:package:: yahmm

   |downloads_yahmm| |docker_yahmm|

   :versions: 1.1.3

   :depends: :conda:package:`cython` >=0.20.1 :conda:package:`matplotlib` >=1.3.1 :conda:package:`networkx` >=1.8.1 :conda:package:`numpy` >=1.8.0 :conda:package:`python` 2.7* :conda:package:`scipy` >=0.13.3 

   :required~by: |required_by_yahmm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install yahmm

   and update with::

      conda update yahmm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/yahmm


.. |required_by_yahmm| conda:required_by:: yahmm
.. |downloads_yahmm| image:: https://img.shields.io/conda/dn/bioconda/yahmm.svg?style=flat
   :alt:   (downloads)
.. |docker_yahmm| image:: https://quay.io/repository/biocontainers/yahmm/status
   :target: https://quay.io/repository/biocontainers/yahmm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yahmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yahmm/README.html


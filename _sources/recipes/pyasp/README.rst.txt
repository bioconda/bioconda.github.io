.. title:: Package Recipe 'pyasp'
.. highlight: bash


pyasp
=====

.. conda:recipe:: pyasp/1.4.3
   :replaces_section_title:

   A convenience wrapper for the ASP tools gringo\, gringo4 and clasp.

   :homepage: http://pypi.python.org/pypi/pyasp/
   :license: GPLv3+
   :recipe: /`pyasp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyasp>`_/`1.4.3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyasp/1.4.3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyasp/1.4.3/meta.yaml>`_

   


.. conda:package:: pyasp

   |downloads_pyasp| |docker_pyasp|

   :versions: 1.4.3

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_pyasp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyasp

   and update with::

      conda update pyasp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyasp


.. |required_by_pyasp| conda:required_by:: pyasp
.. |downloads_pyasp| image:: https://img.shields.io/conda/dn/bioconda/pyasp.svg?style=flat
   :alt:   (downloads)
.. |docker_pyasp| image:: https://quay.io/repository/biocontainers/pyasp/status
   :target: https://quay.io/repository/biocontainers/pyasp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyasp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyasp/README.html


.. title:: Package Recipe 'tclap'
.. highlight: bash


tclap
=====

.. conda:recipe:: tclap/1.2.1
   :replaces_section_title:

   TCLAP is a small\, flexible library that provides a simple interface for defining and accessing command line arguments.

   :homepage: http://tclap.sourceforge.net/
   :license: MIT
   :recipe: /`tclap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tclap>`_/`1.2.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tclap/1.2.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tclap/1.2.1/meta.yaml>`_

   


.. conda:package:: tclap

   |downloads_tclap| |docker_tclap|

   :versions: 1.2.1

   :depends: 

   :required~by: |required_by_tclap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tclap

   and update with::

      conda update tclap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tclap


.. |required_by_tclap| conda:required_by:: tclap
.. |downloads_tclap| image:: https://img.shields.io/conda/dn/bioconda/tclap.svg?style=flat
   :alt:   (downloads)
.. |docker_tclap| image:: https://quay.io/repository/biocontainers/tclap/status
   :target: https://quay.io/repository/biocontainers/tclap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tclap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tclap/README.html


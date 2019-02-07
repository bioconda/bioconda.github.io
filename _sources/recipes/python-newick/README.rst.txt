.. title:: Package Recipe 'python-newick'
.. highlight: bash


python-newick
=============

.. conda:recipe:: python-newick
   :replaces_section_title:

   A python module to read and write the Newick format

   :homepage: https://github.com/glottobank/python-newick
   :license: Apache / Apache License 2.0
   :recipe: /`python-newick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-newick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-newick/meta.yaml>`_

   


.. conda:package:: python-newick

   |downloads_python-newick| |docker_python-newick|

   :versions: 0.9.2, 0.8.0

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_python-newick|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-newick

   and update with::

      conda update python-newick

   or use the docker container::

      docker pull quay.io/repository/biocontainers/python-newick


.. |required_by_python-newick| conda:required_by:: python-newick
.. |downloads_python-newick| image:: https://img.shields.io/conda/dn/bioconda/python-newick.svg?style=flat
   :alt:   (downloads)
.. |docker_python-newick| image:: https://quay.io/repository/biocontainers/python-newick/status
   :target: https://quay.io/repository/biocontainers/python-newick







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-newick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-newick/README.html


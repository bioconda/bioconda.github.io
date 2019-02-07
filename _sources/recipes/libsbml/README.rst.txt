.. title:: Package Recipe 'python-libsbml'
.. highlight: bash


python-libsbml
==============

.. conda:recipe:: libsbml
   :replaces_section_title:

   LibSBML Python API. LibSBML is a library for reading\, writing and manipulating the Systems Biology Markup Language \(SBML\).

   :homepage: http://sbml.org
   :license: LGPL
   :recipe: /`libsbml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libsbml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libsbml/meta.yaml>`_

   


.. conda:package:: python-libsbml

   |downloads_python-libsbml| |docker_python-libsbml|

   :versions: 5.12.0

   :depends: :conda:package:`libgcc`  :conda:package:`python` 2.7* 

   :required~by: |required_by_python-libsbml|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-libsbml

   and update with::

      conda update python-libsbml

   or use the docker container::

      docker pull quay.io/repository/biocontainers/python-libsbml


.. |required_by_python-libsbml| conda:required_by:: python-libsbml
.. |downloads_python-libsbml| image:: https://img.shields.io/conda/dn/bioconda/python-libsbml.svg?style=flat
   :alt:   (downloads)
.. |docker_python-libsbml| image:: https://quay.io/repository/biocontainers/python-libsbml/status
   :target: https://quay.io/repository/biocontainers/python-libsbml







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-libsbml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-libsbml/README.html


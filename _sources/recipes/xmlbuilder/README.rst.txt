.. title:: Package Recipe 'xmlbuilder'
.. highlight: bash


xmlbuilder
==========

.. conda:recipe:: xmlbuilder
   :replaces_section_title:

   pythonic way to crate xml\/\(x\)html files

   :homepage: https://pypi.python.org/pypi/xmlbuilder/1.0
   :license: LGPL / LGPL v3
   :recipe: /`xmlbuilder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xmlbuilder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xmlbuilder/meta.yaml>`_

   


.. conda:package:: xmlbuilder

   |downloads_xmlbuilder| |docker_xmlbuilder|

   :versions: 1.0

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_xmlbuilder|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xmlbuilder

   and update with::

      conda update xmlbuilder

   or use the docker container::

      docker pull quay.io/repository/biocontainers/xmlbuilder


.. |required_by_xmlbuilder| conda:required_by:: xmlbuilder
.. |downloads_xmlbuilder| image:: https://img.shields.io/conda/dn/bioconda/xmlbuilder.svg?style=flat
   :alt:   (downloads)
.. |docker_xmlbuilder| image:: https://quay.io/repository/biocontainers/xmlbuilder/status
   :target: https://quay.io/repository/biocontainers/xmlbuilder







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xmlbuilder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xmlbuilder/README.html


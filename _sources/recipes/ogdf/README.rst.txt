.. title:: Package Recipe 'ogdf'
.. highlight: bash


ogdf
====

.. conda:recipe:: ogdf
   :replaces_section_title:

   The Open Graph Drawing Framework is a self\-contained C\+\+ class library for the automatic layout of diagrams.

   :homepage: http://http://ogdf.net/doku.php
   :license: GPLv3
   :recipe: /`ogdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ogdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ogdf/meta.yaml>`_

   


.. conda:package:: ogdf

   |downloads_ogdf| |docker_ogdf|

   :versions: 201207

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_ogdf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ogdf

   and update with::

      conda update ogdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ogdf


.. |required_by_ogdf| conda:required_by:: ogdf
.. |downloads_ogdf| image:: https://img.shields.io/conda/dn/bioconda/ogdf.svg?style=flat
   :alt:   (downloads)
.. |docker_ogdf| image:: https://quay.io/repository/biocontainers/ogdf/status
   :target: https://quay.io/repository/biocontainers/ogdf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ogdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ogdf/README.html


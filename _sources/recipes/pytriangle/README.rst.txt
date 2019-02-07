.. title:: Package Recipe 'pytriangle'
.. highlight: bash


pytriangle
==========

.. conda:recipe:: pytriangle
   :replaces_section_title:

   A python interface to the 2D triangulation program TRIANGLE

   :homepage: https://github.com/pletzer/pytriangle
   :license: MIT
   :recipe: /`pytriangle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytriangle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytriangle/meta.yaml>`_

   


.. conda:package:: pytriangle

   |downloads_pytriangle| |docker_pytriangle|

   :versions: 1.0.9, 1.0.0

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_pytriangle|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pytriangle

   and update with::

      conda update pytriangle

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pytriangle


.. |required_by_pytriangle| conda:required_by:: pytriangle
.. |downloads_pytriangle| image:: https://img.shields.io/conda/dn/bioconda/pytriangle.svg?style=flat
   :alt:   (downloads)
.. |docker_pytriangle| image:: https://quay.io/repository/biocontainers/pytriangle/status
   :target: https://quay.io/repository/biocontainers/pytriangle







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytriangle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytriangle/README.html


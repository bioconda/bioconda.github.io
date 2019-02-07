.. title:: Package Recipe 'icqsol'
.. highlight: bash


icqsol
======

.. conda:recipe:: icqsol
   :replaces_section_title:

   A collection of utilities for constructing complex geometries from primitive shapes

   :homepage: https://github.com/pletzer/icqsol
   :license: MIT
   :recipe: /`icqsol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icqsol>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icqsol/meta.yaml>`_

   


.. conda:package:: icqsol

   |downloads_icqsol| |docker_icqsol|

   :versions: 0.3.26, 0.3.20

   :depends: :conda:package:`numpy`  :conda:package:`pycsg` ==0.3.12 :conda:package:`python` 2.7* :conda:package:`pytriangle` ==1.0.9 :conda:package:`vtk` ==6.3.0 

   :required~by: |required_by_icqsol|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install icqsol

   and update with::

      conda update icqsol

   or use the docker container::

      docker pull quay.io/repository/biocontainers/icqsol


.. |required_by_icqsol| conda:required_by:: icqsol
.. |downloads_icqsol| image:: https://img.shields.io/conda/dn/bioconda/icqsol.svg?style=flat
   :alt:   (downloads)
.. |docker_icqsol| image:: https://quay.io/repository/biocontainers/icqsol/status
   :target: https://quay.io/repository/biocontainers/icqsol







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/icqsol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/icqsol/README.html


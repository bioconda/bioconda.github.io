.. title:: Package Recipe 'vt'
.. highlight: bash


vt
==

.. conda:recipe:: vt
   :replaces_section_title:

   A tool set for manipulating and generating VCF files

   :homepage: https://genome.sph.umich.edu/wiki/Vt
   :license: MIT
   :recipe: /`vt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vt/meta.yaml>`_

   


.. conda:package:: vt

   |downloads_vt| |docker_vt|

   :versions: 2015.11.10, 0.57721

   :depends: 

   :required~by: |required_by_vt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vt

   and update with::

      conda update vt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vt


.. |required_by_vt| conda:required_by:: vt
.. |downloads_vt| image:: https://img.shields.io/conda/dn/bioconda/vt.svg?style=flat
   :alt:   (downloads)
.. |docker_vt| image:: https://quay.io/repository/biocontainers/vt/status
   :target: https://quay.io/repository/biocontainers/vt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vt/README.html


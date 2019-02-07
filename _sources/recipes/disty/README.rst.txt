.. title:: Package Recipe 'disty'
.. highlight: bash


disty
=====

.. conda:recipe:: disty
   :replaces_section_title:

   Disty McMatrixface \- compute a distance matrix from a core genome alignment file.

   :homepage: https://github.com/c2-d2/disty
   :license: MIT
   :recipe: /`disty <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disty>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/disty/meta.yaml>`_

   


.. conda:package:: disty

   |downloads_disty| |docker_disty|

   :versions: 0.1.0

   :depends: :conda:package:`libgcc`  :conda:package:`zlib` ==1.2.8 

   :required~by: |required_by_disty|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install disty

   and update with::

      conda update disty

   or use the docker container::

      docker pull quay.io/repository/biocontainers/disty


.. |required_by_disty| conda:required_by:: disty
.. |downloads_disty| image:: https://img.shields.io/conda/dn/bioconda/disty.svg?style=flat
   :alt:   (downloads)
.. |docker_disty| image:: https://quay.io/repository/biocontainers/disty/status
   :target: https://quay.io/repository/biocontainers/disty







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/disty/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/disty/README.html


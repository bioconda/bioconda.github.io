.. title:: Package Recipe 'miranda'
.. highlight: bash


miranda
=======

.. conda:recipe:: miranda
   :replaces_section_title:

   An algorithm for finding genomic targets for microRNAs

   :homepage: http://www.microrna.org/
   :license: GPLv2 + RNAlib license (no commercial redistribution)
   :recipe: /`miranda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miranda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miranda/meta.yaml>`_

   


.. conda:package:: miranda

   |downloads_miranda| |docker_miranda|

   :versions: 3.3a

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_miranda|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install miranda

   and update with::

      conda update miranda

   or use the docker container::

      docker pull quay.io/repository/biocontainers/miranda


.. |required_by_miranda| conda:required_by:: miranda
.. |downloads_miranda| image:: https://img.shields.io/conda/dn/bioconda/miranda.svg?style=flat
   :alt:   (downloads)
.. |docker_miranda| image:: https://quay.io/repository/biocontainers/miranda/status
   :target: https://quay.io/repository/biocontainers/miranda







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miranda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miranda/README.html


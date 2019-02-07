.. title:: Package Recipe 'sibelia'
.. highlight: bash


sibelia
=======

.. conda:recipe:: sibelia
   :replaces_section_title:

   Genome comparison via de Bruijn graph.

   :homepage: https://github.com/bioinf/Sibelia
   :license: GPLv2
   :recipe: /`sibelia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sibelia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sibelia/meta.yaml>`_

   


.. conda:package:: sibelia

   |downloads_sibelia| |docker_sibelia|

   :versions: 3.0.7, 3.0.6

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_sibelia|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sibelia

   and update with::

      conda update sibelia

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sibelia


.. |required_by_sibelia| conda:required_by:: sibelia
.. |downloads_sibelia| image:: https://img.shields.io/conda/dn/bioconda/sibelia.svg?style=flat
   :alt:   (downloads)
.. |docker_sibelia| image:: https://quay.io/repository/biocontainers/sibelia/status
   :target: https://quay.io/repository/biocontainers/sibelia







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sibelia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sibelia/README.html


.. title:: Package Recipe 'potrace'
.. highlight: bash


potrace
=======

.. conda:recipe:: potrace/1.11
   :replaces_section_title:

   A tool for tracing a bitmap\, which means\, transforming a bitmap into a smooth\, scalable image

   :homepage: http://potrace.sourceforge.net
   :license: GPL
   :recipe: /`potrace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/potrace>`_/`1.11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/potrace/1.11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/potrace/1.11/meta.yaml>`_

   


.. conda:package:: potrace

   |downloads_potrace| |docker_potrace|

   :versions: 1.11

   :depends: 

   :required~by: |required_by_potrace|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install potrace

   and update with::

      conda update potrace

   or use the docker container::

      docker pull quay.io/repository/biocontainers/potrace


.. |required_by_potrace| conda:required_by:: potrace
.. |downloads_potrace| image:: https://img.shields.io/conda/dn/bioconda/potrace.svg?style=flat
   :alt:   (downloads)
.. |docker_potrace| image:: https://quay.io/repository/biocontainers/potrace/status
   :target: https://quay.io/repository/biocontainers/potrace







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/potrace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/potrace/README.html


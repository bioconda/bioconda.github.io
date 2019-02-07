.. title:: Package Recipe 'pilon'
.. highlight: bash


pilon
=====

.. conda:recipe:: pilon
   :replaces_section_title:

   Pilon is an automated genome assembly improvement and variant detection tool.

   :homepage: https://github.com/broadinstitute/pilon/
   :license: GPLv2
   :recipe: /`pilon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pilon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pilon/meta.yaml>`_

   


.. conda:package:: pilon

   |downloads_pilon| |docker_pilon|

   :versions: 1.23, 1.22, 1.20, 1.19, 1.18, 1.17, 1.16

   :depends: :conda:package:`openjdk`  :conda:package:`python`  

   :required~by: |required_by_pilon|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pilon

   and update with::

      conda update pilon

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pilon


.. |required_by_pilon| conda:required_by:: pilon
.. |downloads_pilon| image:: https://img.shields.io/conda/dn/bioconda/pilon.svg?style=flat
   :alt:   (downloads)
.. |docker_pilon| image:: https://quay.io/repository/biocontainers/pilon/status
   :target: https://quay.io/repository/biocontainers/pilon







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pilon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pilon/README.html


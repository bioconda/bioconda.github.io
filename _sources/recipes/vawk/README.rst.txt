.. title:: Package Recipe 'vawk'
.. highlight: bash


vawk
====

.. conda:recipe:: vawk
   :replaces_section_title:

   An awk\-like VCF parser

   :homepage: https://github.com/cc2qe/vawk
   :license: MIT / MIT
   :recipe: /`vawk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vawk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vawk/meta.yaml>`_

   


.. conda:package:: vawk

   |downloads_vawk| |docker_vawk|

   :versions: 0.0.2

   :depends: :conda:package:`gawk`  :conda:package:`python` <3 

   :required~by: |required_by_vawk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vawk

   and update with::

      conda update vawk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vawk


.. |required_by_vawk| conda:required_by:: vawk
.. |downloads_vawk| image:: https://img.shields.io/conda/dn/bioconda/vawk.svg?style=flat
   :alt:   (downloads)
.. |docker_vawk| image:: https://quay.io/repository/biocontainers/vawk/status
   :target: https://quay.io/repository/biocontainers/vawk







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vawk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vawk/README.html


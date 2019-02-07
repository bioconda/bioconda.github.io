.. title:: Package Recipe 'hardklor'
.. highlight: bash


hardklor
========

.. conda:recipe:: hardklor
   :replaces_section_title:

   Analyze mass spectra

   :homepage: https://github.com/mhoopmann/hardklor
   :license: Apache License, Version 2.0
   :recipe: /`hardklor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hardklor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hardklor/meta.yaml>`_

   


.. conda:package:: hardklor

   |downloads_hardklor| |docker_hardklor|

   :versions: 2.3.0

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_hardklor|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hardklor

   and update with::

      conda update hardklor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hardklor


.. |required_by_hardklor| conda:required_by:: hardklor
.. |downloads_hardklor| image:: https://img.shields.io/conda/dn/bioconda/hardklor.svg?style=flat
   :alt:   (downloads)
.. |docker_hardklor| image:: https://quay.io/repository/biocontainers/hardklor/status
   :target: https://quay.io/repository/biocontainers/hardklor







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hardklor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hardklor/README.html


.. title:: Package Recipe 'somatic-sniper'
.. highlight: bash


somatic-sniper
==============

.. conda:recipe:: somatic-sniper
   :replaces_section_title:

   A tool to call somatic single nucleotide variants.

   :homepage: https://github.com/genome/somatic-sniper/
   :license: MIT
   :recipe: /`somatic-sniper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somatic-sniper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somatic-sniper/meta.yaml>`_

   


.. conda:package:: somatic-sniper

   |downloads_somatic-sniper| |docker_somatic-sniper|

   :versions: 1.0.5.0

   :depends: :conda:package:`zlib`  

   :required~by: |required_by_somatic-sniper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install somatic-sniper

   and update with::

      conda update somatic-sniper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/somatic-sniper


.. |required_by_somatic-sniper| conda:required_by:: somatic-sniper
.. |downloads_somatic-sniper| image:: https://img.shields.io/conda/dn/bioconda/somatic-sniper.svg?style=flat
   :alt:   (downloads)
.. |docker_somatic-sniper| image:: https://quay.io/repository/biocontainers/somatic-sniper/status
   :target: https://quay.io/repository/biocontainers/somatic-sniper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/somatic-sniper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/somatic-sniper/README.html


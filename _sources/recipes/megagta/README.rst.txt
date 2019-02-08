.. title:: Package Recipe 'megagta'
.. highlight: bash


megagta
=======

.. conda:recipe:: megagta
   :replaces_section_title:

   HMM\-guided metagenomic gene\-targeted assembler using iterative de Bruijn graphs

   :homepage: https://github.com/HKU-BAL/megagta
   :license: GNU General Public License v3 (GPLv3
   :recipe: /`megagta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megagta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megagta/meta.yaml>`_

   


.. conda:package:: megagta

   |downloads_megagta| |docker_megagta|

   :versions: 0.1_alpha

   :depends: :conda:package:`hmmer` >=3.1b2 :conda:package:`libgcc`  :conda:package:`python` >=2.7,<3 :conda:package:`zlib`  

   :required~by: |required_by_megagta|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install megagta

   and update with::

      conda update megagta

   or use the docker container::

      docker pull quay.io/repository/biocontainers/megagta


.. |required_by_megagta| conda:required_by:: megagta
.. |downloads_megagta| image:: https://img.shields.io/conda/dn/bioconda/megagta.svg?style=flat
   :alt:   (downloads)
.. |docker_megagta| image:: https://quay.io/repository/biocontainers/megagta/status
   :target: https://quay.io/repository/biocontainers/megagta







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megagta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megagta/README.html


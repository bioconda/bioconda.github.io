.. title:: Package Recipe 'vcfpy'
.. highlight: bash


vcfpy
=====

.. conda:recipe:: vcfpy
   :replaces_section_title:

   Python 3 VCF library with good support for both reading and writing

   :homepage: https://github.com/bihealth/vcfpy
   :license: MIT / MIT
   :recipe: /`vcfpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfpy/meta.yaml>`_

   


.. conda:package:: vcfpy

   |downloads_vcfpy| |docker_vcfpy|

   :versions: 0.12.0, 0.11.2, 0.11.1, 0.11.0

   :depends: :conda:package:`pysam` >=0.10.0 :conda:package:`python` >=3 

   :required~by: |required_by_vcfpy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcfpy

   and update with::

      conda update vcfpy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vcfpy


.. |required_by_vcfpy| conda:required_by:: vcfpy
.. |downloads_vcfpy| image:: https://img.shields.io/conda/dn/bioconda/vcfpy.svg?style=flat
   :alt:   (downloads)
.. |docker_vcfpy| image:: https://quay.io/repository/biocontainers/vcfpy/status
   :target: https://quay.io/repository/biocontainers/vcfpy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfpy/README.html


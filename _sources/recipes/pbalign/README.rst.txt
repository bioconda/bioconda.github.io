.. title:: Package Recipe 'pbalign'
.. highlight: bash


pbalign
=======

.. conda:recipe:: pbalign
   :replaces_section_title:

   Python wrapper for producing PBBAM valid alignments

   :homepage: https://github.com/PacificBiosciences/pbalign
   :license: BSD-3-Clause-Clear
   :recipe: /`pbalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbalign/meta.yaml>`_

   


.. conda:package:: pbalign

   |downloads_pbalign| |docker_pbalign|

   :versions: 0.3.2, 0.3.1

   :depends: :conda:package:`blasr` >=5.3.2 :conda:package:`pbbam` >=0.18.0 :conda:package:`pbcommand` >=1.1.1 :conda:package:`pbcore` >=1.6.5 :conda:package:`pysam` >=0.15.1 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`samtools` >=1.6 :conda:package:`setuptools`  

   :required~by: |required_by_pbalign|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbalign

   and update with::

      conda update pbalign

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pbalign


.. |required_by_pbalign| conda:required_by:: pbalign
.. |downloads_pbalign| image:: https://img.shields.io/conda/dn/bioconda/pbalign.svg?style=flat
   :alt:   (downloads)
.. |docker_pbalign| image:: https://quay.io/repository/biocontainers/pbalign/status
   :target: https://quay.io/repository/biocontainers/pbalign







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbalign/README.html


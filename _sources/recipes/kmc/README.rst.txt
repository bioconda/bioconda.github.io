.. title:: Package Recipe 'kmc'
.. highlight: bash


kmc
===

.. conda:recipe:: kmc
   :replaces_section_title:

   K\-mer Counter is a utility designed for counting k\-mers \(sequences of consecutive k symbols\) in a set of reads from genome sequencing projects.

   :homepage: http://sun.aei.polsl.pl/kmc/
   :license: GPLv2
   :recipe: /`kmc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmc/meta.yaml>`_
   :links: biotools: :biotools:`KMC`, doi: :doi:`10.1093/bioinformatics/btx304`

   


.. conda:package:: kmc

   |downloads_kmc| |docker_kmc|

   :versions: 3.1.1rc1, 3.1.0, 3.0.1, 3.0.0, 2.3.0

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`libgcc-ng` >=7.2.0 :conda:package:`libstdcxx-ng` >=7.2.0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_kmc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kmc

   and update with::

      conda update kmc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kmc


.. |required_by_kmc| conda:required_by:: kmc
.. |downloads_kmc| image:: https://img.shields.io/conda/dn/bioconda/kmc.svg?style=flat
   :alt:   (downloads)
.. |docker_kmc| image:: https://quay.io/repository/biocontainers/kmc/status
   :target: https://quay.io/repository/biocontainers/kmc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmc/README.html


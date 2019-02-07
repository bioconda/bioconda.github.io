.. title:: Package Recipe 'rnalien'
.. highlight: bash


rnalien
=======

.. conda:recipe:: rnalien
   :replaces_section_title:

   A tool for unsupervised construction of RNA family models

   :homepage: http://rna.tbi.univie.ac.at/rnalien/tool
   :license: GPL-3
   :recipe: /`rnalien <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnalien>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnalien/meta.yaml>`_
   :links: biotools: :biotools:`RNAlien`, doi: :doi:`10.1093/nar/gkw558`

   


.. conda:package:: rnalien

   |downloads_rnalien| |docker_rnalien|

   :versions: 1.3.7, 1.3.6, 1.3.5, 1.3.4, 1.2.5

   :depends: :conda:package:`ca-certificates`  :conda:package:`gmp`  :conda:package:`infernal` ==1.1.2 :conda:package:`libgcc`  :conda:package:`locarna` ==1.9.1 :conda:package:`perl` 5.22.0* :conda:package:`rnacode` ==0.3 :conda:package:`rnaz` ==2.1 :conda:package:`viennarna` ==2.3.3 :conda:package:`zlib`  

   :required~by: |required_by_rnalien|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnalien

   and update with::

      conda update rnalien

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rnalien


.. |required_by_rnalien| conda:required_by:: rnalien
.. |downloads_rnalien| image:: https://img.shields.io/conda/dn/bioconda/rnalien.svg?style=flat
   :alt:   (downloads)
.. |docker_rnalien| image:: https://quay.io/repository/biocontainers/rnalien/status
   :target: https://quay.io/repository/biocontainers/rnalien







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnalien/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnalien/README.html


.. title:: Package Recipe 'pyloh'
.. highlight: bash


pyloh
=====

.. conda:recipe:: pyloh
   :replaces_section_title:

   Deconvolving tumor purity and ploidy by integrating copy number alterations and loss of heterozygosity

   :homepage: https://github.com/uci-cbcl/PyLOH
   :license: GPLv2
   :recipe: /`pyloh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyloh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyloh/meta.yaml>`_

   


.. conda:package:: pyloh

   |downloads_pyloh| |docker_pyloh|

   :versions: 1.4.3, 1.4.1

   :depends: :conda:package:`matplotlib` >=1.2 :conda:package:`numpy` >=1.6.1 :conda:package:`pysam` >=0.7 :conda:package:`python` 2.7* :conda:package:`scipy` >=0.10 

   :required~by: |required_by_pyloh|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyloh

   and update with::

      conda update pyloh

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyloh


.. |required_by_pyloh| conda:required_by:: pyloh
.. |downloads_pyloh| image:: https://img.shields.io/conda/dn/bioconda/pyloh.svg?style=flat
   :alt:   (downloads)
.. |docker_pyloh| image:: https://quay.io/repository/biocontainers/pyloh/status
   :target: https://quay.io/repository/biocontainers/pyloh







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyloh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyloh/README.html


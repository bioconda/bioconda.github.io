.. title:: Package Recipe 'outrigger'
.. highlight: bash


outrigger
=========

.. conda:recipe:: outrigger
   :replaces_section_title:

   Outrigger detects \*de novo\* exons and quantifies their percent spliced\-in

   :homepage: https://yeolab.github.io/outrigger
   :license: BSD / BSD License
   :recipe: /`outrigger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/outrigger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/outrigger/meta.yaml>`_

   


.. conda:package:: outrigger

   |downloads_outrigger| |docker_outrigger|

   :versions: 1.1.1

   :depends: :conda:package:`biopython`  :conda:package:`coverage`  :conda:package:`gffutils` >=0.8.7.1 :conda:package:`graphlite`  :conda:package:`joblib`  :conda:package:`pandas` >=0.17.0 :conda:package:`pybedtools`  :conda:package:`pysam`  :conda:package:`pytest` >=3.0.0 :conda:package:`python` 2.7* 

   :required~by: |required_by_outrigger|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install outrigger

   and update with::

      conda update outrigger

   or use the docker container::

      docker pull quay.io/repository/biocontainers/outrigger


.. |required_by_outrigger| conda:required_by:: outrigger
.. |downloads_outrigger| image:: https://img.shields.io/conda/dn/bioconda/outrigger.svg?style=flat
   :alt:   (downloads)
.. |docker_outrigger| image:: https://quay.io/repository/biocontainers/outrigger/status
   :target: https://quay.io/repository/biocontainers/outrigger







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/outrigger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/outrigger/README.html


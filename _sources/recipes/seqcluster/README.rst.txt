.. title:: Package Recipe 'seqcluster'
.. highlight: bash


seqcluster
==========

.. conda:recipe:: seqcluster
   :replaces_section_title:

   small RNA analysis from NGS data

   :homepage: https://github.com/lpantano/seqclsuter
   :license: MIT
   :recipe: /`seqcluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqcluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqcluster/meta.yaml>`_
   :links: biotools: :biotools:`seqcluster`

   


.. conda:package:: seqcluster

   |downloads_seqcluster| |docker_seqcluster|

   :versions: 1.2.4a14, 1.2.4a12, 1.2.4a6, 1.2.4a5, 1.2.4a, 1.2.3, 1.2.2, 1.2.1, 1.2.0, 1.1.14, 1.1.13

   :depends: :conda:package:`biopython`  :conda:package:`mirtop`  :conda:package:`pandas`  :conda:package:`progressbar2`  :conda:package:`pybedtools`  :conda:package:`pysam` >=0.8.1 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`pyyaml`  :conda:package:`scipy`  :conda:package:`six`  

   :required~by: |required_by_seqcluster|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqcluster

   and update with::

      conda update seqcluster

   or use the docker container::

      docker pull quay.io/repository/biocontainers/seqcluster


.. |required_by_seqcluster| conda:required_by:: seqcluster
.. |downloads_seqcluster| image:: https://img.shields.io/conda/dn/bioconda/seqcluster.svg?style=flat
   :alt:   (downloads)
.. |docker_seqcluster| image:: https://quay.io/repository/biocontainers/seqcluster/status
   :target: https://quay.io/repository/biocontainers/seqcluster







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqcluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqcluster/README.html


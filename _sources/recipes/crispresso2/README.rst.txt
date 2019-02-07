.. title:: Package Recipe 'crispresso2'
.. highlight: bash


crispresso2
===========

.. conda:recipe:: crispresso2
   :replaces_section_title:

   A software pipeline designed to enable rapid and intuitive interpretation of genome editing experiments

   :homepage: https://github.com/pinellolab/CRISPResso2
   :license: Partners
   :recipe: /`crispresso2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispresso2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispresso2/meta.yaml>`_

   


.. conda:package:: crispresso2

   |downloads_crispresso2| |docker_crispresso2|

   :versions: 2.0.23

   :depends: :conda:package:`argparse`  :conda:package:`biopython` >=1.6.5 :conda:package:`bowtie2`  :conda:package:`flash`  :conda:package:`jinja2`  :conda:package:`matplotlib` >=1.3.1 :conda:package:`numpy` >=1.9 :conda:package:`pandas` >=0.15 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`samtools`  :conda:package:`seaborn` >=0.7.1 :conda:package:`trimmomatic`  

   :required~by: |required_by_crispresso2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crispresso2

   and update with::

      conda update crispresso2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/crispresso2


.. |required_by_crispresso2| conda:required_by:: crispresso2
.. |downloads_crispresso2| image:: https://img.shields.io/conda/dn/bioconda/crispresso2.svg?style=flat
   :alt:   (downloads)
.. |docker_crispresso2| image:: https://quay.io/repository/biocontainers/crispresso2/status
   :target: https://quay.io/repository/biocontainers/crispresso2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispresso2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispresso2/README.html


.. title:: Package Recipe 'maxbin2'
.. highlight: bash


maxbin2
=======

.. conda:recipe:: maxbin2
   :replaces_section_title:

   MaxBin is software for binning assembled metagenomic sequences based on an Expectation\-Maximization algorithm.

   :homepage: http://downloads.jbei.org/data/microbial_communities/MaxBin/MaxBin.html
   :license: BSD 3-clause
   :recipe: /`maxbin2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxbin2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxbin2/meta.yaml>`_

   


.. conda:package:: maxbin2

   |downloads_maxbin2| |docker_maxbin2|

   :versions: 2.2.4, 2.2.1

   :depends: :conda:package:`bowtie2`  :conda:package:`fraggenescan` >=1.30 :conda:package:`hmmer`  :conda:package:`idba`  :conda:package:`perl-lwp-simple`  :conda:package:`r-base`  :conda:package:`r-gplots`  

   :required~by: |required_by_maxbin2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install maxbin2

   and update with::

      conda update maxbin2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/maxbin2


.. |required_by_maxbin2| conda:required_by:: maxbin2
.. |downloads_maxbin2| image:: https://img.shields.io/conda/dn/bioconda/maxbin2.svg?style=flat
   :alt:   (downloads)
.. |docker_maxbin2| image:: https://quay.io/repository/biocontainers/maxbin2/status
   :target: https://quay.io/repository/biocontainers/maxbin2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maxbin2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maxbin2/README.html


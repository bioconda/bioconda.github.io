.. title:: Package Recipe 'metabat2'
.. highlight: bash


metabat2
========

.. conda:recipe:: metabat2
   :replaces_section_title:

   MetaBAT2 is a program for binning metagenome\-assembled contigs into bins\/MAGs.

   :homepage: https://bitbucket.org/berkeleylab/metabat
   :license: Academic and Research License
   :recipe: /`metabat2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabat2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabat2/meta.yaml>`_

   


.. conda:package:: metabat2

   |downloads_metabat2| |docker_metabat2|

   :versions: 2.12.1

   :depends: :conda:package:`perl` >=5 

   :required~by: |required_by_metabat2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metabat2

   and update with::

      conda update metabat2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metabat2


.. |required_by_metabat2| conda:required_by:: metabat2
.. |downloads_metabat2| image:: https://img.shields.io/conda/dn/bioconda/metabat2.svg?style=flat
   :alt:   (downloads)
.. |docker_metabat2| image:: https://quay.io/repository/biocontainers/metabat2/status
   :target: https://quay.io/repository/biocontainers/metabat2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabat2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabat2/README.html


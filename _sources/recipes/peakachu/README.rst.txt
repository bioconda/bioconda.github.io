.. title:: Package Recipe 'peakachu'
.. highlight: bash


peakachu
========

.. conda:recipe:: peakachu
   :replaces_section_title:

   Peak calling tool for CLIP\-seq data.

   :homepage: https://github.com/tbischler/PEAKachu
   :license: ISCL
   :recipe: /`peakachu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakachu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakachu/meta.yaml>`_

   


.. conda:package:: peakachu

   |downloads_peakachu| |docker_peakachu|

   :versions: 0.1.0

   :depends: :conda:package:`bcbiogff` >=0.6.4 :conda:package:`bioconductor-deseq2`  :conda:package:`bioconductor-edger`  :conda:package:`biopython` >=1.69 :conda:package:`blockbuster`  :conda:package:`libgcc`  :conda:package:`matplotlib` >=2.0.2 :conda:package:`numexpr` >=2.6.2 :conda:package:`pandas` >=0.20.2 :conda:package:`pysam` >=0.11.2.2 :conda:package:`python` 3.5* :conda:package:`rpy2` >=2.8.5 :conda:package:`statsmodels` >=0.8.0 

   :required~by: |required_by_peakachu|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install peakachu

   and update with::

      conda update peakachu

   or use the docker container::

      docker pull quay.io/repository/biocontainers/peakachu


.. |required_by_peakachu| conda:required_by:: peakachu
.. |downloads_peakachu| image:: https://img.shields.io/conda/dn/bioconda/peakachu.svg?style=flat
   :alt:   (downloads)
.. |docker_peakachu| image:: https://quay.io/repository/biocontainers/peakachu/status
   :target: https://quay.io/repository/biocontainers/peakachu







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peakachu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peakachu/README.html


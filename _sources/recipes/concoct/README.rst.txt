.. title:: Package Recipe 'concoct'
.. highlight: bash


concoct
=======

.. conda:recipe:: concoct
   :replaces_section_title:

   Clustering cONtigs with COverage and ComposiTion

   :homepage: https://github.com/BinPro/CONCOCT
   :license: BSD / FreeBSD
   :recipe: /`concoct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/concoct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/concoct/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.3103`

   


.. conda:package:: concoct

   |downloads_concoct| |docker_concoct|

   :versions: 1.0.0, 0.4.2, 0.4.1, 0.4.0

   :depends: :conda:package:`biopython` >=1.62b :conda:package:`cython` >=0.19.1 :conda:package:`gsl` >=2.2.1,<2.3.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`nose` >=1.3.0 :conda:package:`numpy` >=1.7.1 :conda:package:`openblas` 0.3.3 ha44fe06_1 :conda:package:`openmp`  :conda:package:`pandas` >=0.11.0 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`samtools`  :conda:package:`scikit-learn` >=0.13.1 :conda:package:`scipy` >=0.12.0 :conda:package:`setuptools`  

   :required~by: |required_by_concoct|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install concoct

   and update with::

      conda update concoct

   or use the docker container::

      docker pull quay.io/repository/biocontainers/concoct


.. |required_by_concoct| conda:required_by:: concoct
.. |downloads_concoct| image:: https://img.shields.io/conda/dn/bioconda/concoct.svg?style=flat
   :alt:   (downloads)
.. |docker_concoct| image:: https://quay.io/repository/biocontainers/concoct/status
   :target: https://quay.io/repository/biocontainers/concoct







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/concoct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/concoct/README.html


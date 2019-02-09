.. title:: Package Recipe 'anvio-minimal'
.. highlight: bash


anvio-minimal
=============

.. conda:recipe:: anvio-minimal
   :replaces_section_title:

   An interactive analysis and visualization platform for omics data

   :homepage: http://merenlab.org/software/anvio/index.html
   :developer docs: https://github.com/merenlab/anvio
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`anvio-minimal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anvio-minimal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anvio-minimal/meta.yaml>`_

   


.. conda:package:: anvio-minimal

   |downloads_anvio-minimal| |docker_anvio-minimal|

   :versions: 5.2.0

   :depends: :conda:package:`bottle` 0.12.13 :conda:package:`cherrypy` >=8,<9 :conda:package:`django` 2.0.2 :conda:package:`ete3` 3.1.1 :conda:package:`gsl` >=2.2.1,<2.3.0a0 :conda:package:`h5py` >=2.8.0 :conda:package:`matplotlib` >=2.2.3 :conda:package:`mistune` 0.7.4 :conda:package:`numpy`  :conda:package:`openblas` >=0.2.20,<0.2.21.0a0 :conda:package:`pandas` >=0.23.1 :conda:package:`psutil` >=5.4.3 :conda:package:`pyani` 0.2.7 :conda:package:`pysam` 0.15.1 :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`requests` >=2.19.1 :conda:package:`scikit-learn` 0.19.2 :conda:package:`scipy` >=0.13.3 :conda:package:`six` 1.11.0 :conda:package:`snakemake-minimal` 5.2.4 :conda:package:`statsmodels` 0.9.0 

   :required~by: |required_by_anvio-minimal|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install anvio-minimal

   and update with::

      conda update anvio-minimal

   or use the docker container::

      docker pull quay.io/repository/biocontainers/anvio-minimal


.. |required_by_anvio-minimal| conda:required_by:: anvio-minimal
.. |downloads_anvio-minimal| image:: https://img.shields.io/conda/dn/bioconda/anvio-minimal.svg?style=flat
   :alt:   (downloads)
.. |docker_anvio-minimal| image:: https://quay.io/repository/biocontainers/anvio-minimal/status
   :target: https://quay.io/repository/biocontainers/anvio-minimal







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anvio-minimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anvio-minimal/README.html


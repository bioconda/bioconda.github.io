:orphan:  .. only available via index, not via toctree

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

   :versions: 5.4.0-0, 5.3.0-0, 5.2.0-1, 5.2.0-0
   
   :depends bottle: 0.12.13
   :depends cherrypy: >=8,<9
   :depends colored: 1.3.93
   :depends django: 2.0.8
   :depends ete3: 3.1.1
   :depends gsl: >=2.4,<2.5.0a0
   :depends h5py: >=2.8.0
   :depends illumina-utils: 2.6
   :depends libgcc-ng: >=7.3.0
   :depends matplotlib: 2.2.3
   :depends mistune: 0.8.1
   :depends numpy: 
   :depends openblas: >=0.3.3,<0.3.4.0a0
   :depends pandas: >=0.23.1
   :depends psutil: 5.4.3
   :depends pyani: 0.2.7
   :depends pysam: 0.15.2
   :depends python: >=3.6,<3.7.0a0
   :depends requests: 2.20.0
   :depends scikit-learn: 0.19.2
   :depends scipy: >=0.13.3
   :depends six: 1.11.0
   :depends snakemake-minimal: 5.2.4
   :depends statsmodels: 0.9.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install anvio-minimal

   and update with::

      conda update anvio-minimal

   or use the docker container::

      docker pull quay.io/biocontainers/anvio-minimal:<tag>

   (see `anvio-minimal/tags`_ for valid values for ``<tag>``)


.. |downloads_anvio-minimal| image:: https://img.shields.io/conda/dn/bioconda/anvio-minimal.svg?style=flat
   :alt:   (downloads)
.. |docker_anvio-minimal| image:: https://quay.io/repository/biocontainers/anvio-minimal/status
   :target: https://quay.io/repository/biocontainers/anvio-minimal
.. _`anvio-minimal/tags`: https://quay.io/repository/biocontainers/anvio-minimal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anvio-minimal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anvio-minimal/README.html
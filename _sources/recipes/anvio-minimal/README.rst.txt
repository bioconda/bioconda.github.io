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

   :versions: 6.2-1, 6.2-0, 6.1-1, 6.1-0, 6-0, 5.5.0-0, 5.4.0-0, 5.3.0-0, 5.2.0-1, 5.2.0-0
   
   :depends bottle: 
   :depends cherrypy: 8.0.0
   :depends colored: 
   :depends django: 
   :depends ete3: 
   :depends illumina-utils: 
   :depends matplotlib-base: 
   :depends mistune: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: 0.25.1
   :depends psutil: 5.4.3
   :depends pyani: 0.2.10
   :depends pysam: 
   :depends python: >=3
   :depends requests: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends six: 
   :depends snakemake-minimal: 5.10.0
   :depends statsmodels: 
   :depends tabulate: 
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
   :target: https://anaconda.org/bioconda/anvio-minimal
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
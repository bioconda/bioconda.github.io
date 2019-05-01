:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anvio'
.. highlight: bash

anvio
=====

.. conda:recipe:: anvio
   :replaces_section_title:

   An interactive analysis and visualization platform for omics data

   :homepage: http://merenlab.org/software/anvio/index.html
   :developer docs: https://github.com/merenlab/anvio
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`anvio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anvio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anvio/meta.yaml>`_

   


.. conda:package:: anvio

   |downloads_anvio| |docker_anvio|

   :versions: 5.5.0-0, 5.4.0-0, 5.3.0-0, 5.2.0-0, 5.1.0-1, 5.0.0-1, 4.0.0-2, 4.0.0-1, 4.0.0-0, 3.0.0-1, 3.0.0-0, 2.4.0-2, 2.4.0-1, 2.4.0-0, 2.3.2-0, 2.1.0-0
   
   :depends anvio-minimal: 5.5.0
   :depends blast: 
   :depends bowtie2: 
   :depends bwa: 
   :depends centrifuge: 
   :depends diamond: 
   :depends hmmer: 
   :depends iqtree: 
   :depends mcl: 
   :depends megahit: 
   :depends muscle: 
   :depends prodigal: 
   :depends samtools: 
   :depends trimal: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install anvio

   and update with::

      conda update anvio

   or use the docker container::

      docker pull quay.io/biocontainers/anvio:<tag>

   (see `anvio/tags`_ for valid values for ``<tag>``)


.. |downloads_anvio| image:: https://img.shields.io/conda/dn/bioconda/anvio.svg?style=flat
   :alt:   (downloads)
.. |docker_anvio| image:: https://quay.io/repository/biocontainers/anvio/status
   :target: https://quay.io/repository/biocontainers/anvio
.. _`anvio/tags`: https://quay.io/repository/biocontainers/anvio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anvio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anvio/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylowgs'
.. highlight: bash

phylowgs
========

.. conda:recipe:: phylowgs
   :replaces_section_title:

   Application for inferring subclonal composition and evolution from whole\-genome sequencing data

   :homepage: https://github.com/morrislab/phylowgs
   :license: GPLv3
   :recipe: /`phylowgs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylowgs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylowgs/meta.yaml>`_

   


.. conda:package:: phylowgs

   |downloads_phylowgs| |docker_phylowgs|

   :versions: 20180317-2, 20180317-1, 20180317-0, 20150714-1
   
   :depends ete2: 
   
   :depends gsl: >=2.2.1,<2.3.0a0
   
   :depends libgcc-ng: >=4.9
   
   :depends numpy: 
   
   :depends openblas: >=0.2.20,<0.2.21.0a0
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends pyvcf: 
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylowgs

   and update with::

      conda update phylowgs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/phylowgs:<tag>

   (see `phylowgs/tags`_ for valid values for ``<tag>``)


.. |downloads_phylowgs| image:: https://img.shields.io/conda/dn/bioconda/phylowgs.svg?style=flat
   :alt:   (downloads)
.. |docker_phylowgs| image:: https://quay.io/repository/biocontainers/phylowgs/status
   :target: https://quay.io/repository/biocontainers/phylowgs
.. _`phylowgs/tags`: https://quay.io/repository/biocontainers/phylowgs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylowgs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylowgs/README.html
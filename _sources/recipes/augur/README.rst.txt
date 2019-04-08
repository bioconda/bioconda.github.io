:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'augur'
.. highlight: bash

augur
=====

.. conda:recipe:: augur
   :replaces_section_title:

   Process pathogen genome data for the Nextstrain platform

   :homepage: https://github.com/nextstrain/augur
   :license: AGPL / AGPL-3.0
   :recipe: /`augur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/augur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/augur/meta.yaml>`_

   


.. conda:package:: augur

   |downloads_augur| |docker_augur|

   :versions: 3.1.5-0
   
   :depends bcbiogff: 0.6.*,>=0.6.4
   :depends biopython: >=1.73
   :depends boto: 2.*,>2.38
   :depends cvxopt: 1.1.*,>=1.1.9
   :depends fasttree: 
   :depends ipdb: >=0.10.1
   :depends iqtree: 
   :depends jsonschema: 3.0.0a3.*
   :depends mafft: 
   :depends matplotlib: 2.*
   :depends pandas: 0.23.*,>=0.23.4
   :depends python: >=3.4
   :depends raxml: 
   :depends seaborn: 0.9.*,>=0.9.0
   :depends snakemake: 5.*,>=5.1.5
   :depends treetime: 0.5.*,>=0.5.2
   :depends vcftools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install augur

   and update with::

      conda update augur

   or use the docker container::

      docker pull quay.io/biocontainers/augur:<tag>

   (see `augur/tags`_ for valid values for ``<tag>``)


.. |downloads_augur| image:: https://img.shields.io/conda/dn/bioconda/augur.svg?style=flat
   :alt:   (downloads)
.. |docker_augur| image:: https://quay.io/repository/biocontainers/augur/status
   :target: https://quay.io/repository/biocontainers/augur
.. _`augur/tags`: https://quay.io/repository/biocontainers/augur?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/augur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/augur/README.html
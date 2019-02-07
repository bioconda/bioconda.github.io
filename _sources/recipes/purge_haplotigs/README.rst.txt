.. title:: Package Recipe 'purge_haplotigs'
.. highlight: bash


purge_haplotigs
===============

.. conda:recipe:: purge_haplotigs
   :replaces_section_title:

   Pipeline to help with curating heterozygous diploid genome assemblies.

   :homepage: https://bitbucket.org/mroachawri/purge_haplotigs/
   :license: MIT / MIT
   :recipe: /`purge_haplotigs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge_haplotigs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge_haplotigs/meta.yaml>`_

   


.. conda:package:: purge_haplotigs

   |downloads_purge_haplotigs| |docker_purge_haplotigs|

   :versions: 1.0.4, 1.0.3, 1.0.1

   :depends: :conda:package:`bedtools` >=2.25.0 :conda:package:`make` >=4.2.1 :conda:package:`minimap2` >=2.12 :conda:package:`mummer4` >=4.0.0beta2 :conda:package:`perl` >=5.22.0 :conda:package:`r-base` >=3.4.1 :conda:package:`r-ggplot2` >=2.2.1 :conda:package:`samtools` >=1.3.1 

   :required~by: |required_by_purge_haplotigs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install purge_haplotigs

   and update with::

      conda update purge_haplotigs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/purge_haplotigs


.. |required_by_purge_haplotigs| conda:required_by:: purge_haplotigs
.. |downloads_purge_haplotigs| image:: https://img.shields.io/conda/dn/bioconda/purge_haplotigs.svg?style=flat
   :alt:   (downloads)
.. |docker_purge_haplotigs| image:: https://quay.io/repository/biocontainers/purge_haplotigs/status
   :target: https://quay.io/repository/biocontainers/purge_haplotigs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/purge_haplotigs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/purge_haplotigs/README.html


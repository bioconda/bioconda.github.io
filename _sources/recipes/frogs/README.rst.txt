.. title:: Package Recipe 'frogs'
.. highlight: bash


frogs
=====

.. conda:recipe:: frogs
   :replaces_section_title:

   FROGS is a workflow designed to produce an OTUs count matrix from high depth sequencing amplicon data. This is the official release 2.0.0 of FROGS adapted for BIOCONDA.

   :homepage: https://github.com/geraldinepascal/FROGS
   :license: GNU GPL v3
   :recipe: /`frogs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frogs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frogs/meta.yaml>`_

   


.. conda:package:: frogs

   |downloads_frogs| |docker_frogs|

   :versions: 2.0.1

   :depends: :conda:package:`bioconductor-phyloseq` >=1.20.0 :conda:package:`blast` >=2.2.31 :conda:package:`cutadapt` >=1.8.3 :conda:package:`fasttree` >=2.1.9 :conda:package:`flash` >=1.2.11 :conda:package:`mafft` >=7.310 :conda:package:`pandoc` <2.0 :conda:package:`perl` >=5.22.0 :conda:package:`perl-io-gzip` >=0.20 :conda:package:`pynast` >=1.2.2 :conda:package:`python` 2.7* :conda:package:`r-base` >=3.4.1 :conda:package:`r-gridextra` >=2.2.1 :conda:package:`r-phangorn` >=2.2.0 :conda:package:`r-plotly` >=4.7.1 :conda:package:`r-rmarkdown` >=1.5 :conda:package:`rdptools` >=2.0.2 :conda:package:`scipy` >=0.17.1 :conda:package:`swarm` >=2.1.13 :conda:package:`util-linux`  :conda:package:`vsearch` >=2.4.3 

   :required~by: |required_by_frogs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install frogs

   and update with::

      conda update frogs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/frogs


.. |required_by_frogs| conda:required_by:: frogs
.. |downloads_frogs| image:: https://img.shields.io/conda/dn/bioconda/frogs.svg?style=flat
   :alt:   (downloads)
.. |docker_frogs| image:: https://quay.io/repository/biocontainers/frogs/status
   :target: https://quay.io/repository/biocontainers/frogs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/frogs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/frogs/README.html


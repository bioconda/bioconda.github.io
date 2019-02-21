:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'frogs'
.. highlight: bash

frogs
=====

.. conda:recipe:: frogs
   :replaces_section_title:

   FROGS is a workflow designed to produce an OTUs count matrix from high depth sequencing amplicon data. This is the official release 3.1.0 of FROGS.

   :homepage: https://github.com/geraldinepascal/FROGS
   :license: GNU GPL v3
   :recipe: /`frogs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frogs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frogs/meta.yaml>`_

   


.. conda:package:: frogs

   |downloads_frogs| |docker_frogs|

   :versions: 2.0.1-1, 2.0.1-0
   
   :depends bioconductor-phyloseq: >=1.20.0
   
   :depends blast: >=2.2.31
   
   :depends cutadapt: >=1.8.3
   
   :depends fasttree: >=2.1.9
   
   :depends flash: >=1.2.11
   
   :depends mafft: >=7.310
   
   :depends pandoc: <2.0
   
   :depends perl: >=5.22.0
   
   :depends perl-io-gzip: >=0.20
   
   :depends pynast: >=1.2.2
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends r-base: >=3.4.1
   
   :depends r-gridextra: >=2.2.1
   
   :depends r-phangorn: >=2.2.0
   
   :depends r-plotly: >=4.7.1
   
   :depends r-rmarkdown: >=1.5
   
   :depends rdptools: >=2.0.2
   
   :depends scipy: >=0.17.1
   
   :depends swarm: >=2.1.13
   
   :depends vsearch: >=2.4.3
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install frogs

   and update with::

      conda update frogs

   or use the docker container::

      docker pull quay.io/biocontainers/frogs:<tag>

   (see `frogs/tags`_ for valid values for ``<tag>``)


.. |downloads_frogs| image:: https://img.shields.io/conda/dn/bioconda/frogs.svg?style=flat
   :alt:   (downloads)
.. |docker_frogs| image:: https://quay.io/repository/biocontainers/frogs/status
   :target: https://quay.io/repository/biocontainers/frogs
.. _`frogs/tags`: https://quay.io/repository/biocontainers/frogs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/frogs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/frogs/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igdiscover'
.. highlight: bash

igdiscover
==========

.. conda:recipe:: igdiscover
   :replaces_section_title:

   Analyze antibody repertoires and discover new V genes

   :homepage: https://igdiscover.se/
   :license: MIT
   :recipe: /`igdiscover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igdiscover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igdiscover/meta.yaml>`_
   :links: biotools: :biotools:`igdiscover`, doi: :doi:`10.1038/ncomms13642`

   


.. conda:package:: igdiscover

   |downloads_igdiscover| |docker_igdiscover|

   :versions: 0.11-0, 0.10-3, 0.10-2, 0.10-1, 0.9-1, 0.9-0, 0.8.0-1, 0.8.0-0, 0.7.0-0, 0.6.0-1, 0.5-1, 0.4-1, 0.3-1
   
   :depends cutadapt: 1.18
   :depends flash: 1.2.*
   :depends igblast: 1.7.*
   :depends matplotlib-base: 3.0.*
   :depends muscle: 3.8.*
   :depends numpy: >=1.15
   :depends pandas: 0.23.*
   :depends pear: 0.9.6.*
   :depends pip: 
   :depends python: >=3.6,<3.7.0a0
   :depends ruamel.yaml: 0.15.*
   :depends scipy: >=1.1
   :depends seaborn: 0.9.*
   :depends snakemake-minimal: 5.3.*
   :depends sqt: 0.8.*
   :depends xopen: >=0.3.5
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install igdiscover

   and update with::

      conda update igdiscover

   or use the docker container::

      docker pull quay.io/biocontainers/igdiscover:<tag>

   (see `igdiscover/tags`_ for valid values for ``<tag>``)


.. |downloads_igdiscover| image:: https://img.shields.io/conda/dn/bioconda/igdiscover.svg?style=flat
   :alt:   (downloads)
.. |docker_igdiscover| image:: https://quay.io/repository/biocontainers/igdiscover/status
   :target: https://quay.io/repository/biocontainers/igdiscover
.. _`igdiscover/tags`: https://quay.io/repository/biocontainers/igdiscover?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igdiscover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igdiscover/README.html
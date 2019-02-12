.. title:: Package Recipe 'igblast'
.. highlight: bash


igblast
=======

.. conda:recipe:: igblast
   :replaces_section_title:

   A tool for analyzing immunoglobulin \(IG\) and T cell receptor \(TR\) sequences.

   :homepage: http://www.ncbi.nlm.nih.gov/projects/igblast/
   :license: Public Domain
   :recipe: /`igblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igblast/meta.yaml>`_
   :links: biotools: :biotools:`igblast`

   


.. conda:package:: igblast

   |downloads_igblast| |docker_igblast|

   :versions: 1.10.0, 1.9.0, 1.7.0, 1.5.0, 1.4.0

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libidn11`  :conda:package:`libxml2` >=2.9.8,<2.10.0a0 :conda:package:`perl`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_igblast|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install igblast

   and update with::

      conda update igblast

   or use the docker container::

      docker pull quay.io/repository/biocontainers/igblast


.. |required_by_igblast| conda:required_by:: igblast
.. |downloads_igblast| image:: https://img.shields.io/conda/dn/bioconda/igblast.svg?style=flat
   :alt:   (downloads)
.. |docker_igblast| image:: https://quay.io/repository/biocontainers/igblast/status
   :target: https://quay.io/repository/biocontainers/igblast







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igblast/README.html


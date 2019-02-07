.. title:: Package Recipe 'mob_suite'
.. highlight: bash


mob_suite
=========

.. conda:recipe:: mob_suite
   :replaces_section_title:

   This package MOB\-suite\: software tools for clustering\, reconstruction and typing of plasmids from draft assemblies. The MOB\-suite is designed to be a modular set of tools for the typing and reconstruction of plasmid sequences from WGS assemblies.

   :homepage: https://github.com/phac-nml/mob-suite
   :license: Apache License, Version 2.0
   :recipe: /`mob_suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mob_suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mob_suite/meta.yaml>`_

   


.. conda:package:: mob_suite

   |downloads_mob_suite| |docker_mob_suite|

   :versions: 1.4.9, 1.4.8, 1.4.6, 1.4.5, 1.4.1

   :depends: :conda:package:`biopython` >=1.70 :conda:package:`blast`  :conda:package:`circlator`  :conda:package:`mash`  :conda:package:`numpy` >=1.11 :conda:package:`pandas` >=0.22.0 :conda:package:`pycurl` >=7.43 :conda:package:`pytables` >=3.3 :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`scipy` >=1.1 

   :required~by: |required_by_mob_suite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mob_suite

   and update with::

      conda update mob_suite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mob_suite


.. |required_by_mob_suite| conda:required_by:: mob_suite
.. |downloads_mob_suite| image:: https://img.shields.io/conda/dn/bioconda/mob_suite.svg?style=flat
   :alt:   (downloads)
.. |docker_mob_suite| image:: https://quay.io/repository/biocontainers/mob_suite/status
   :target: https://quay.io/repository/biocontainers/mob_suite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mob_suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mob_suite/README.html


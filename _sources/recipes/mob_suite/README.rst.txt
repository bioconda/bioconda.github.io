:orphan:  .. only available via index, not via toctree

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

   :versions: 1.4.9.1-0, 1.4.9-1, 1.4.9-0, 1.4.8-0, 1.4.6-1, 1.4.5-1, 1.4.1-0
   
   :depends biopython: >=1.70
   :depends blast: 
   :depends circlator: 
   :depends mash: 
   :depends numpy: >=1.11
   :depends pandas: >=0.22.0
   :depends pycurl: >=7.43
   :depends pytables: >=3.3
   :depends python: >=3.4
   :depends scipy: >=1.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mob_suite

   and update with::

      conda update mob_suite

   or use the docker container::

      docker pull quay.io/biocontainers/mob_suite:<tag>

   (see `mob_suite/tags`_ for valid values for ``<tag>``)


.. |downloads_mob_suite| image:: https://img.shields.io/conda/dn/bioconda/mob_suite.svg?style=flat
   :alt:   (downloads)
.. |docker_mob_suite| image:: https://quay.io/repository/biocontainers/mob_suite/status
   :target: https://quay.io/repository/biocontainers/mob_suite
.. _`mob_suite/tags`: https://quay.io/repository/biocontainers/mob_suite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mob_suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mob_suite/README.html
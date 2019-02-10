.. title:: Package Recipe 'stacks'
.. highlight: bash


stacks
======

.. conda:recipe:: stacks/1.37
   :replaces_section_title:

   Stacks is a software pipeline for building loci from RAD\-seq

   :homepage: http://catchenlab.life.illinois.edu/stacks/
   :license: GPL
   :recipe: /`stacks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stacks>`_/`1.37 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stacks/1.37>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stacks/1.37/meta.yaml>`_
   :links: biotools: :biotools:`Stacks`, doi: :doi:`10.1111/mec.12354`

   


.. conda:package:: stacks

   |downloads_stacks| |docker_stacks|

   :versions: 2.3, 2.3b, 2.2, 2.1, 2.0, 2.0Beta10a, 2.0Beta9, 2.0Beta8, 2.0Beta8c, 2.0Beta7c, 1.47, 1.46, 1.44, 1.43, 1.42, 1.40, 1.37

   :depends: :conda:package:`libcxx` >=4.0.1 :conda:package:`perl`  :conda:package:`perl-bioperl-core`  :conda:package:`perl-file-spec`  :conda:package:`perl-file-temp`  :conda:package:`perl-posix`  :conda:package:`python` >=3 :conda:package:`samtools`  :conda:package:`velvet`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_stacks|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stacks

   and update with::

      conda update stacks

   or use the docker container::

      docker pull quay.io/repository/biocontainers/stacks


.. |required_by_stacks| conda:required_by:: stacks
.. |downloads_stacks| image:: https://img.shields.io/conda/dn/bioconda/stacks.svg?style=flat
   :alt:   (downloads)
.. |docker_stacks| image:: https://quay.io/repository/biocontainers/stacks/status
   :target: https://quay.io/repository/biocontainers/stacks







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stacks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stacks/README.html


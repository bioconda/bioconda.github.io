:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'idba'
.. highlight: bash

idba
====

.. conda:recipe:: idba
   :replaces_section_title:

   IDBA is a practical iterative De Bruijn Graph De Novo Assembler for sequence assembly in bioinformatics.

   :homepage: http://i.cs.hku.hk/~alse/hkubrg/projects/idba_ud/
   :license: GPL2
   :recipe: /`idba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idba/meta.yaml>`_
   :links: biotools: :biotools:`idba`, doi: :doi:`10.1007/978-3-642-12683-3_28`

   


.. conda:package:: idba

   |downloads_idba| |docker_idba|

   :versions: 1.1.3-1, 1.1.3-0, 1.1.1-2, 1.1.1-1
   
   :depends libgcc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install idba

   and update with::

      conda update idba

   or use the docker container::

      docker pull quay.io/biocontainers/idba:<tag>

   (see `idba/tags`_ for valid values for ``<tag>``)


.. |downloads_idba| image:: https://img.shields.io/conda/dn/bioconda/idba.svg?style=flat
   :target: https://anaconda.org/bioconda/idba
   :alt:   (downloads)
.. |docker_idba| image:: https://quay.io/repository/biocontainers/idba/status
   :target: https://quay.io/repository/biocontainers/idba
.. _`idba/tags`: https://quay.io/repository/biocontainers/idba?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/idba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/idba/README.html
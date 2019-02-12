:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nasp'
.. highlight: bash

nasp
====

.. conda:recipe:: nasp
   :replaces_section_title:

   NASP\: an accurate\, rapid method for the identification of SNPs in WGS datasets that supports flexible input and output formats

   :homepage: https://github.com/TGenNorth/nasp
   :license: Academic and Research License
   :recipe: /`nasp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nasp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nasp/meta.yaml>`_
   :links: doi: :doi:`10.1099/mgen.0.000074`

   


.. conda:package:: nasp

   |downloads_nasp| |docker_nasp|

   :versions: 1.1.2-0, 1.0.2a1-3, 1.0.2a1-2, 1.0.2a1-1, 1.0.1-1, 1.0.1-0
   
   :depends mummer: 
   
   :depends python: >=3.7,<3.8.0a0
   
   :depends samtools: <1.3
   
   :depends trimmomatic: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nasp

   and update with::

      conda update nasp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nasp:<tag>

   (see `nasp/tags`_ for valid values for ``<tag>``)


.. |downloads_nasp| image:: https://img.shields.io/conda/dn/bioconda/nasp.svg?style=flat
   :alt:   (downloads)
.. |docker_nasp| image:: https://quay.io/repository/biocontainers/nasp/status
   :target: https://quay.io/repository/biocontainers/nasp
.. _`nasp/tags`: https://quay.io/repository/biocontainers/nasp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nasp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nasp/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcflatten'
.. highlight: bash

vcflatten
=========

.. conda:recipe:: vcflatten
   :replaces_section_title:

   A command line tool for flattening VCF files down to simpler TSV files.

   :homepage: http://innovativemedicine.ca/tools/vcflatten
   :license: BSD
   :recipe: /`vcflatten <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcflatten>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcflatten/meta.yaml>`_

   


.. conda:package:: vcflatten

   |downloads_vcflatten| |docker_vcflatten|

   :versions: 0.5.2-3, 0.5.2-2, 0.5.2-1, 0.5.2-0
   
   :depends openjdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcflatten

   and update with::

      conda update vcflatten

   or use the docker container::

      docker pull quay.io/biocontainers/vcflatten:<tag>

   (see `vcflatten/tags`_ for valid values for ``<tag>``)


.. |downloads_vcflatten| image:: https://img.shields.io/conda/dn/bioconda/vcflatten.svg?style=flat
   :target: https://anaconda.org/bioconda/vcflatten
   :alt:   (downloads)
.. |docker_vcflatten| image:: https://quay.io/repository/biocontainers/vcflatten/status
   :target: https://quay.io/repository/biocontainers/vcflatten
.. _`vcflatten/tags`: https://quay.io/repository/biocontainers/vcflatten?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcflatten/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcflatten/README.html
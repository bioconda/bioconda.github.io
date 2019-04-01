:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tardis'
.. highlight: bash

tardis
======

.. conda:recipe:: tardis
   :replaces_section_title:

   Pre\-processor for bioinformatics cluster job submission

   :homepage: https://github.com/AgResearch/tardis
   :license: GPL / GPL-2.0
   :recipe: /`tardis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tardis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tardis/meta.yaml>`_

   Tardis is a pre\-processor which reconditions \(precompiles\) a marked\-up unix
   shell command to generate a sequence of conditioned commands which it then
   launches on a cluster.  The mark\-up is added by the user to indicate the
   input\(s\) and output\(s\) of the command.  Tardis splits input files into
   conditioned input chunks and will uncondition \(join together\) the output
   chunks to obtain the final outputs\, with the sequence of conditioned commands
   referring to conditioned input and output filenames.



.. conda:package:: tardis

   |downloads_tardis| |docker_tardis|

   :versions: 1.0.19-0, 0.5.17-0, 0.5.16-0, 0.5.13-0, 0.5.12-0, 0.5.11-0, 0.5.10-0, 0.5.9-0
   
   :depends libgcc-ng: >=4.9
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends pytoml: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tardis

   and update with::

      conda update tardis

   or use the docker container::

      docker pull quay.io/biocontainers/tardis:<tag>

   (see `tardis/tags`_ for valid values for ``<tag>``)


.. |downloads_tardis| image:: https://img.shields.io/conda/dn/bioconda/tardis.svg?style=flat
   :alt:   (downloads)
.. |docker_tardis| image:: https://quay.io/repository/biocontainers/tardis/status
   :target: https://quay.io/repository/biocontainers/tardis
.. _`tardis/tags`: https://quay.io/repository/biocontainers/tardis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tardis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tardis/README.html
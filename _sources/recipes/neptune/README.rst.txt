:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neptune'
.. highlight: bash

neptune
=======

.. conda:recipe:: neptune
   :replaces_section_title:

   Neptune\: Genomic Signature Discovery

   :homepage: https://github.com/phac-nml/neptune
   :license: Apache 2.0
   :recipe: /`neptune <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neptune>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neptune/meta.yaml>`_

   


.. conda:package:: neptune

   |downloads_neptune| |docker_neptune|

   :versions: 1.2.5-2, 1.2.5-1, 1.2.5-0, 1.2.3-0
   
   :depends biopython: 
   :depends blast: 
   :depends drmaa: 
   :depends numpy: 
   :depends python: >=2.7,<2.8.0a0
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install neptune

   and update with::

      conda update neptune

   or use the docker container::

      docker pull quay.io/biocontainers/neptune:<tag>

   (see `neptune/tags`_ for valid values for ``<tag>``)


.. |downloads_neptune| image:: https://img.shields.io/conda/dn/bioconda/neptune.svg?style=flat
   :target: https://anaconda.org/bioconda/neptune
   :alt:   (downloads)
.. |docker_neptune| image:: https://quay.io/repository/biocontainers/neptune/status
   :target: https://quay.io/repository/biocontainers/neptune
.. _`neptune/tags`: https://quay.io/repository/biocontainers/neptune?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neptune/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neptune/README.html
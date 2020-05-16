:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rebaler'
.. highlight: bash

rebaler
=======

.. conda:recipe:: rebaler
   :replaces_section_title:

   Reference\-based long read assemblies of bacterial genomes

   :homepage: https://github.com/rrwick/Rebaler
   :license: GPL / GPL-3.0
   :recipe: /`rebaler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rebaler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rebaler/meta.yaml>`_

   


.. conda:package:: rebaler

   |downloads_rebaler| |docker_rebaler|

   :versions: 0.2.0-1, 0.2.0-0, 0.1.2-0, 0.1.1-2, 0.1.1-0, 0.1.0-0
   
   :depends biopython: 
   :depends minimap2: 
   :depends python: >=3
   :depends racon: >=1.4.12
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rebaler

   and update with::

      conda update rebaler

   or use the docker container::

      docker pull quay.io/biocontainers/rebaler:<tag>

   (see `rebaler/tags`_ for valid values for ``<tag>``)


.. |downloads_rebaler| image:: https://img.shields.io/conda/dn/bioconda/rebaler.svg?style=flat
   :target: https://anaconda.org/bioconda/rebaler
   :alt:   (downloads)
.. |docker_rebaler| image:: https://quay.io/repository/biocontainers/rebaler/status
   :target: https://quay.io/repository/biocontainers/rebaler
.. _`rebaler/tags`: https://quay.io/repository/biocontainers/rebaler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rebaler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rebaler/README.html
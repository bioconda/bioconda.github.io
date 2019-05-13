:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mdasim'
.. highlight: bash

mdasim
======

.. conda:recipe:: mdasim
   :replaces_section_title:

   This is MDAsim 2\+\, a tool to simulate whole genome amplification of a DNA sequence with multiple displacement amplification. A citation for this version will be provided when available. MDAsim 2\+ extends MDAsim 1.2\, so please also always cite\: Tagliavi Z\, Draghici S. MDAsim\: A multiple displacement amplification simulator. 2012 IEEE International Conference on Bioinformatics and Biomedicine \(BIBM\). 2012. pp. 1–4. doi\:10.1109\/BIBM.2012.6392622

   :homepage: https://github.com/hzi-bifo/mdasim
   :license: GPL / GPL-3.0
   :recipe: /`mdasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mdasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mdasim/meta.yaml>`_

   


.. conda:package:: mdasim

   |downloads_mdasim| |docker_mdasim|

   :versions: 2.1.1-0, 2.1.0-0, 2.0.1-1, 2.0.1-0, 2.0.0-0, 1.2-0
   
   :depends libgcc-ng: >=4.9
   :depends openmpi: >=3.1,<3.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mdasim

   and update with::

      conda update mdasim

   or use the docker container::

      docker pull quay.io/biocontainers/mdasim:<tag>

   (see `mdasim/tags`_ for valid values for ``<tag>``)


.. |downloads_mdasim| image:: https://img.shields.io/conda/dn/bioconda/mdasim.svg?style=flat
   :target: https://anaconda.org/bioconda/mdasim
   :alt:   (downloads)
.. |docker_mdasim| image:: https://quay.io/repository/biocontainers/mdasim/status
   :target: https://quay.io/repository/biocontainers/mdasim
.. _`mdasim/tags`: https://quay.io/repository/biocontainers/mdasim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mdasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mdasim/README.html
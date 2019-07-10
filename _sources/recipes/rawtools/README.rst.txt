:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rawtools'
.. highlight: bash

rawtools
========

.. conda:recipe:: rawtools
   :replaces_section_title:

   RawTools is an open\-source and freely available package designed to perform scan data parsing and quantification\, and quality control analysis of Thermo Orbitrap raw mass spectrometer files.

   :homepage: https://github.com/kevinkovalchik/RawTools
   :license: Apache License, Version 2.0
   :recipe: /`rawtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rawtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rawtools/meta.yaml>`_

   


.. conda:package:: rawtools

   |downloads_rawtools| |docker_rawtools|

   :versions: 2.0.2-0, 1.4.2-0, 1.4.1-0
   
   :depends mono: >=5.0.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rawtools

   and update with::

      conda update rawtools

   or use the docker container::

      docker pull quay.io/biocontainers/rawtools:<tag>

   (see `rawtools/tags`_ for valid values for ``<tag>``)


.. |downloads_rawtools| image:: https://img.shields.io/conda/dn/bioconda/rawtools.svg?style=flat
   :target: https://anaconda.org/bioconda/rawtools
   :alt:   (downloads)
.. |docker_rawtools| image:: https://quay.io/repository/biocontainers/rawtools/status
   :target: https://quay.io/repository/biocontainers/rawtools
.. _`rawtools/tags`: https://quay.io/repository/biocontainers/rawtools?tab=tags






Notes
-----
RawTools is an open\-source and freely available package designed to perform scan data parsing and quantification\, and quality control analysis of Thermo Orbitrap raw mass spectrometer files.
RawTools is written in C\# and uses the Thermo RawFileReader library.
RawTools is fully compatible with Windows\, Linux\, and MacOS operating systems.
RawTools is the replacement for the previously described RawQuant Python package.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rawtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rawtools/README.html
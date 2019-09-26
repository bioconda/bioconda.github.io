:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'thermorawfileparser'
.. highlight: bash

thermorawfileparser
===================

.. conda:recipe:: thermorawfileparser
   :replaces_section_title:

   Wrapper around the .net \(C\#\) ThermoFisher ThermoRawFileReader library for running on Linux with mono

   :homepage: https://github.com/compomics/ThermoRawFileParser
   :documentation: https://github.com/compomics/ThermoRawFileParser/blob/master/README.md
   
   :license: Other
   :recipe: /`thermorawfileparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thermorawfileparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thermorawfileparser/meta.yaml>`_

   


.. conda:package:: thermorawfileparser

   |downloads_thermorawfileparser| |docker_thermorawfileparser|

   :versions: 1.1.11-0, 1.1.10-0, 1.1.9-0, 1.1.8-0, 1.1.7-0, 1.1.2-0, 1.1.0-1, 1.1.0-0, 0.0.2018.09.07-1, 0.0.2018.09.07-0
   
   :depends mono: >=5
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install thermorawfileparser

   and update with::

      conda update thermorawfileparser

   or use the docker container::

      docker pull quay.io/biocontainers/thermorawfileparser:<tag>

   (see `thermorawfileparser/tags`_ for valid values for ``<tag>``)


.. |downloads_thermorawfileparser| image:: https://img.shields.io/conda/dn/bioconda/thermorawfileparser.svg?style=flat
   :target: https://anaconda.org/bioconda/thermorawfileparser
   :alt:   (downloads)
.. |docker_thermorawfileparser| image:: https://quay.io/repository/biocontainers/thermorawfileparser/status
   :target: https://quay.io/repository/biocontainers/thermorawfileparser
.. _`thermorawfileparser/tags`: https://quay.io/repository/biocontainers/thermorawfileparser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/thermorawfileparser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/thermorawfileparser/README.html
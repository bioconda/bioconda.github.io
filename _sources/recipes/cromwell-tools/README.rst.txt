:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cromwell-tools'
.. highlight: bash

cromwell-tools
==============

.. conda:recipe:: cromwell-tools
   :replaces_section_title:

   Utilities for interacting with the Cromwell workflow engine

   :homepage: http://github.com/broadinstitute/cromwell-tools
   :documentation: https://cromwell-tools.readthedocs.io/en/stable/
   
   :license: BSD / BSD
   :recipe: /`cromwell-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cromwell-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cromwell-tools/meta.yaml>`_

   


.. conda:package:: cromwell-tools

   |downloads_cromwell-tools| |docker_cromwell-tools|

   :versions: 2.4.1-0, 2.4.0-0, 2.3.0-0, 2.2.3-0, 2.2.0-0, 1.1.0-0, 1.0.1-0
   
   :depends google-api-python-client: 1.7.11.*
   :depends google-auth: >=1.6.1,<2
   :depends python: >=3.6
   :depends python-dateutil: 2.8.0.*
   :depends requests: >=2.20.0,<3
   :depends setuptools_scm: >=3.1.0,<4
   :depends six: >=1.11.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cromwell-tools

   and update with::

      conda update cromwell-tools

   or use the docker container::

      docker pull quay.io/biocontainers/cromwell-tools:<tag>

   (see `cromwell-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_cromwell-tools| image:: https://img.shields.io/conda/dn/bioconda/cromwell-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/cromwell-tools
   :alt:   (downloads)
.. |docker_cromwell-tools| image:: https://quay.io/repository/biocontainers/cromwell-tools/status
   :target: https://quay.io/repository/biocontainers/cromwell-tools
.. _`cromwell-tools/tags`: https://quay.io/repository/biocontainers/cromwell-tools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cromwell-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cromwell-tools/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'extern'
.. highlight: bash

extern
======

.. conda:recipe:: extern
   :replaces_section_title:

   Extern is an opinionated version of Pythons subprocess\, making it just that little bit more convenient to run shell commands from within Python code.

   :homepage: https://pypi.python.org/pypi/extern/
   :license: MIT / MIT
   :recipe: /`extern <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extern>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extern/meta.yaml>`_

   


.. conda:package:: extern

   |downloads_extern| |docker_extern|

   :versions: 0.2.1-1, 0.2.1-0
   
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install extern

   and update with::

      conda update extern

   or use the docker container::

      docker pull quay.io/biocontainers/extern:<tag>

   (see `extern/tags`_ for valid values for ``<tag>``)


.. |downloads_extern| image:: https://img.shields.io/conda/dn/bioconda/extern.svg?style=flat
   :target: https://anaconda.org/bioconda/extern
   :alt:   (downloads)
.. |docker_extern| image:: https://quay.io/repository/biocontainers/extern/status
   :target: https://quay.io/repository/biocontainers/extern
.. _`extern/tags`: https://quay.io/repository/biocontainers/extern?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extern/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extern/README.html
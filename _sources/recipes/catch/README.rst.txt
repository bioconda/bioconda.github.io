:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'catch'
.. highlight: bash

catch
=====

.. conda:recipe:: catch
   :replaces_section_title:

   A package for designing compact and comprehensive capture probe sets.

   :homepage: https://github.com/broadinstitute/catch
   :license: MIT / MIT
   :recipe: /`catch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/catch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/catch/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-018-0006-x`

   


.. conda:package:: catch

   |downloads_catch| |docker_catch|

   :versions: 1.3.0-0, 1.2.0-0, 1.1.0-0, 1.0.0-1, 1.0.0-0
   
   :depends numpy: >=1.9.0
   :depends python: >=3
   :depends scipy: >=1.0.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install catch

   and update with::

      conda update catch

   or use the docker container::

      docker pull quay.io/biocontainers/catch:<tag>

   (see `catch/tags`_ for valid values for ``<tag>``)


.. |downloads_catch| image:: https://img.shields.io/conda/dn/bioconda/catch.svg?style=flat
   :target: https://anaconda.org/bioconda/catch
   :alt:   (downloads)
.. |docker_catch| image:: https://quay.io/repository/biocontainers/catch/status
   :target: https://quay.io/repository/biocontainers/catch
.. _`catch/tags`: https://quay.io/repository/biocontainers/catch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/catch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/catch/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysnptools'
.. highlight: bash

pysnptools
==========

.. conda:recipe:: pysnptools
   :replaces_section_title:

   Python library for reading and manipulating genetic data

   :homepage: http://research.microsoft.com/en-us/um/redmond/projects/mscompbio/
   :license: Apache 2.0
   :recipe: /`pysnptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysnptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysnptools/meta.yaml>`_

   


.. conda:package:: pysnptools

   |downloads_pysnptools| |docker_pysnptools|

   :versions: 0.3.13-2, 0.3.13-0, 0.3.9-0
   
   :depends numpy: >=1.9.2
   :depends pandas: >=0.16.2
   :depends python: >=2.7,<2.8.0a0
   :depends scipy: >=0.15.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pysnptools

   and update with::

      conda update pysnptools

   or use the docker container::

      docker pull quay.io/biocontainers/pysnptools:<tag>

   (see `pysnptools/tags`_ for valid values for ``<tag>``)


.. |downloads_pysnptools| image:: https://img.shields.io/conda/dn/bioconda/pysnptools.svg?style=flat
   :target: https://anaconda.org/bioconda/pysnptools
   :alt:   (downloads)
.. |docker_pysnptools| image:: https://quay.io/repository/biocontainers/pysnptools/status
   :target: https://quay.io/repository/biocontainers/pysnptools
.. _`pysnptools/tags`: https://quay.io/repository/biocontainers/pysnptools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysnptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysnptools/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phispy'
.. highlight: bash

phispy
======

.. conda:recipe:: phispy
   :replaces_section_title:

   Prophage finder using multiple metrics

   :homepage: https://github.com/linsalrob/PhiSpy
   :documentation: https://github.com/linsalrob/PhiSpy/blob/master/README.md
   
   :developer docs: https://github.com/linsalrob/PhiSpy/
   :license: MIT / MIT License
   :recipe: /`phispy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phispy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phispy/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3475717`

   


.. conda:package:: phispy

   |downloads_phispy| |docker_phispy|

   :versions: 3.7.8-0
   
   :depends biopython: >=1.74
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends numpy: >=1.17.0
   :depends python: >=3.6,<3.7.0a0
   :depends scikit-learn: >=0.21.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phispy

   and update with::

      conda update phispy

   or use the docker container::

      docker pull quay.io/biocontainers/phispy:<tag>

   (see `phispy/tags`_ for valid values for ``<tag>``)


.. |downloads_phispy| image:: https://img.shields.io/conda/dn/bioconda/phispy.svg?style=flat
   :target: https://anaconda.org/bioconda/phispy
   :alt:   (downloads)
.. |docker_phispy| image:: https://quay.io/repository/biocontainers/phispy/status
   :target: https://quay.io/repository/biocontainers/phispy
.. _`phispy/tags`: https://quay.io/repository/biocontainers/phispy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phispy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phispy/README.html
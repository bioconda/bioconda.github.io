.. title:: Package Recipe 'cmappy'
.. highlight: bash


cmappy
======

.. conda:recipe:: cmappy
   :replaces_section_title:

   Assorted tools for interacting with .gct\, .gctx\, .grp\, and .gmt files as well as other Connectivity Map \(Broad Institute\) data\/tools

   :homepage: https://github.com/cmap/cmapPy
   :license: BSD / BSD 3-clause
   :recipe: /`cmappy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmappy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmappy/meta.yaml>`_

   


.. conda:package:: cmappy

   |downloads_cmappy| |docker_cmappy|

   :versions: 3.3.3, 3.3.0, 3.2.0, 3.1.1, 3.0.0, 2.2.2, 2.2.1, 2.2.0, 2.1.0, 2.0.1, 1.1.1, 1.0.9

   :depends: :conda:package:`h5py` >=2.6.0 :conda:package:`numpy` >=1.11.2 :conda:package:`pandas` >=0.18 :conda:package:`python` >=3.6,<3.7.0a0 :conda:package:`requests` >=2.13.0 

   :required~by: |required_by_cmappy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cmappy

   and update with::

      conda update cmappy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cmappy


.. |required_by_cmappy| conda:required_by:: cmappy
.. |downloads_cmappy| image:: https://img.shields.io/conda/dn/bioconda/cmappy.svg?style=flat
   :alt:   (downloads)
.. |docker_cmappy| image:: https://quay.io/repository/biocontainers/cmappy/status
   :target: https://quay.io/repository/biocontainers/cmappy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmappy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmappy/README.html


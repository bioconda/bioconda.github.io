:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rust-bio-tools'
.. highlight: bash

rust-bio-tools
==============

.. conda:recipe:: rust-bio-tools
   :replaces_section_title:

   A growing collection of fast and secure command line utililities for dealing with NGS data
   implemented on top of Rust\-Bio.

   :homepage: https://github.com/rust-bio/rust-bio-tools
   :license: MIT
   :recipe: /`rust-bio-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-bio-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-bio-tools/meta.yaml>`_

   


.. conda:package:: rust-bio-tools

   |downloads_rust-bio-tools| |docker_rust-bio-tools|

   :versions: 0.9.2-0, 0.9.1-0, 0.9.0-0, 0.8.2-0, 0.8.1-0, 0.8.0-1, 0.8.0-0, 0.6.0-0, 0.5.0-0, 0.4.1-0, 0.4.0-0, 0.3.0-0, 0.2.9-0, 0.2.8-0, 0.2.7-0, 0.2.6-1, 0.2.5-1, 0.2.5-0, 0.2.4-0, 0.2.3-0, 0.2.2-0, 0.2.1-0, 0.1.3-0, 0.1.2-0, 0.1.1-0
   
   :depends gsl: >=2.5,<2.6.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libopenblas: >=0.3.9,<1.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends openssl: >=1.1.1a,<1.1.2a
   :depends starcode: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rust-bio-tools

   and update with::

      conda update rust-bio-tools

   or use the docker container::

      docker pull quay.io/biocontainers/rust-bio-tools:<tag>

   (see `rust-bio-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_rust-bio-tools| image:: https://img.shields.io/conda/dn/bioconda/rust-bio-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/rust-bio-tools
   :alt:   (downloads)
.. |docker_rust-bio-tools| image:: https://quay.io/repository/biocontainers/rust-bio-tools/status
   :target: https://quay.io/repository/biocontainers/rust-bio-tools
.. _`rust-bio-tools/tags`: https://quay.io/repository/biocontainers/rust-bio-tools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rust-bio-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rust-bio-tools/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cistrome-ceas'
.. highlight: bash

cistrome-ceas
=============

.. conda:recipe:: cistrome-ceas
   :replaces_section_title:

   Cistrome\-CEAS \-\- Cis\-regulatory Element Annotation System

   :homepage: https://bitbucket.org/cistrome/cistrome-applications-harvard/overview
   :documentation: http://liulab.dfci.harvard.edu/CEAS/
   
   :developer docs: https://bitbucket.org/cistrome/cistrome-applications-harvard
   :license: Artistic Licence
   :recipe: /`cistrome-ceas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cistrome-ceas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cistrome-ceas/meta.yaml>`_

   Tool to characterize genome\-wide protein\-DNA interaction patterns
   from ChIP\-chip and ChIP\-Seq of both sharp and broad binding factors



.. conda:package:: cistrome-ceas

   |downloads_cistrome-ceas| |docker_cistrome-ceas|

   :versions: 1.0.2b1-1, 1.0.2b1-0
   
   :depends bx-python: 
   :depends python: >=2.7,<2.8.0a0
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cistrome-ceas

   and update with::

      conda update cistrome-ceas

   or use the docker container::

      docker pull quay.io/biocontainers/cistrome-ceas:<tag>

   (see `cistrome-ceas/tags`_ for valid values for ``<tag>``)


.. |downloads_cistrome-ceas| image:: https://img.shields.io/conda/dn/bioconda/cistrome-ceas.svg?style=flat
   :target: https://anaconda.org/bioconda/cistrome-ceas
   :alt:   (downloads)
.. |docker_cistrome-ceas| image:: https://quay.io/repository/biocontainers/cistrome-ceas/status
   :target: https://quay.io/repository/biocontainers/cistrome-ceas
.. _`cistrome-ceas/tags`: https://quay.io/repository/biocontainers/cistrome-ceas?tab=tags






Notes
-----
Installs version 1.0.2 of CEAS from cistrome \(commit id d8c0751\,
datestamp 20140929\)\, which includes ceasBW \(a version of ceas which
can handle bigWig file input from MACS2\).
This version is also patched to suppress warnings about using sqlite3
rather than MySQLdb.
The Cistrome code is at
https\:\/\/bitbucket.org\/cistrome\/cistrome\-applications\-harvard\/overview
The CEAS code is under the published\-packages\/CEAS\/ subdirectory
Cistrome data files and documentation can be found at
http\:\/\/liulab.dfci.harvard.edu\/CEAS\/index.html


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cistrome-ceas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cistrome-ceas/README.html
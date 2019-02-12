:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'estmapper'
.. highlight: bash

estmapper
=========

.. conda:recipe:: estmapper
   :replaces_section_title:

   Software package for the high\-throughput alignment of large cDNA \(EST\, mRNA\) sequence sets to a large eukaryotic genome of the same species.

   :homepage: http://kmer.sourceforge.net/wiki/index.php/Getting_Started_with_ESTmapper
   :license: GPL
   :recipe: /`estmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estmapper/meta.yaml>`_

   


.. conda:package:: estmapper

   |downloads_estmapper| |docker_estmapper|

   :versions: 2008-2, 2008-1, 2008-0
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends libgcc-ng: >=4.9
   
   :depends libstdcxx-ng: >=4.9
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install estmapper

   and update with::

      conda update estmapper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/estmapper:<tag>

   (see `estmapper/tags`_ for valid values for ``<tag>``)


.. |downloads_estmapper| image:: https://img.shields.io/conda/dn/bioconda/estmapper.svg?style=flat
   :alt:   (downloads)
.. |docker_estmapper| image:: https://quay.io/repository/biocontainers/estmapper/status
   :target: https://quay.io/repository/biocontainers/estmapper
.. _`estmapper/tags`: https://quay.io/repository/biocontainers/estmapper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/estmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/estmapper/README.html
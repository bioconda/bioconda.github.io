:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rna-seqc'
.. highlight: bash

rna-seqc
========

.. conda:recipe:: rna-seqc
   :replaces_section_title:
   :noindex:

   Fast\, efficient RNA\-Seq metrics for quality control and process optimization

   :homepage: https://github.com/broadinstitute/rnaseqc
   :license: `BSD / BSD 3-clause <https://raw.githubusercontent.com/broadinstitute/rnaseqc/master/LICENSE>`_
   :recipe: /`rna-seqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rna-seqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rna-seqc/meta.yaml>`_

   


.. conda:package:: rna-seqc

   |downloads_rna-seqc| |docker_rna-seqc|

   :versions:
      
      

      ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``1.1.8-2``,  ``1.1.8-1``

      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: ``>=7.64.1,<8.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends xz: ``>=5.2.4,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rna-seqc

   and update with::

      conda update rna-seqc

   or use the docker container::

      docker pull quay.io/biocontainers/rna-seqc:<tag>

   (see `rna-seqc/tags`_ for valid values for ``<tag>``)


.. |downloads_rna-seqc| image:: https://img.shields.io/conda/dn/bioconda/rna-seqc.svg?style=flat
   :target: https://anaconda.org/bioconda/rna-seqc
   :alt:   (downloads)
.. |docker_rna-seqc| image:: https://quay.io/repository/biocontainers/rna-seqc/status
   :target: https://quay.io/repository/biocontainers/rna-seqc
.. _`rna-seqc/tags`: https://quay.io/repository/biocontainers/rna-seqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rna-seqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rna-seqc/README.html
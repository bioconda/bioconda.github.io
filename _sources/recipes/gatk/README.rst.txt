:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gatk'
.. highlight: bash

gatk
====

.. conda:recipe:: gatk
   :replaces_section_title:

   The Genome Analysis Toolkit \(GATK\) v3\, license restricted.

   :homepage: https://software.broadinstitute.org/gatk/download/archive
   :license: https://software.broadinstitute.org/gatk/download/licensing
   :recipe: /`gatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk/meta.yaml>`_
   :links: biotools: :biotools:`gatk`

   


.. conda:package:: gatk

   |downloads_gatk| |docker_gatk|

   :versions: 3.8-7, 3.8-5, 3.8-4, 3.8-3, 3.8-2, 3.8-1, 3.8-0, 3.7-1, 3.7-0, 3.6-6, 3.6-5, 3.6-4, 3.6-3, 3.6-2, 3.6-1, 3.5-6, 3.5-5
   
   :depends bzip2: 
   :depends openjdk: >=8,<9
   :depends python: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gsalib: 
   :depends r-reshape: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gatk

   and update with::

      conda update gatk

   or use the docker container::

      docker pull quay.io/biocontainers/gatk:<tag>

   (see `gatk/tags`_ for valid values for ``<tag>``)


.. |downloads_gatk| image:: https://img.shields.io/conda/dn/bioconda/gatk.svg?style=flat
   :alt:   (downloads)
.. |docker_gatk| image:: https://quay.io/repository/biocontainers/gatk/status
   :target: https://quay.io/repository/biocontainers/gatk
.. _`gatk/tags`: https://quay.io/repository/biocontainers/gatk?tab=tags






Notes
-----
Due to license restrictions\, this recipe cannot distribute and install GATK v3 directly. To fully install GATK\, you must download a licensed copy of GATK from the Broad Institute \(https\:\/\/software.broadinstitute.org\/gatk\/download\/archive\)\, install this package\, and call \"gatk3\-register \/path\/to\/GenomeAnalysisTK\[\-\$PKG\_VERSION.tar.bz2\|.jar\]\"\, which will copy GATK into your conda environment. The main run script has been renamed to \"gatk3\" to allow compatibility with the new GATK 4 launch script \(which is now \"gatk\"\).


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gatk/README.html
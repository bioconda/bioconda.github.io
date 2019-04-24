:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bgreat'
.. highlight: bash

bgreat
======

.. conda:recipe:: bgreat2
   :replaces_section_title:

   BGREAT2 is a read mapping tool for NGS sequencing data that align reads on a de Bruijn graph. Preliminary version described at https\:\/\/bmcbioinformatics.biomedcentral.com\/articles\/10.1186\/s12859\-016\-1103\-9 and used in Bcool a short read corrector \(https\:\/\/arxiv.org\/abs\/1711.03336\)

   :homepage: https://github.com/Malfoy/BGREAT2
   :license: AGPL-3.0
   :recipe: /`bgreat2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgreat2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgreat2/meta.yaml>`_

   


.. conda:package:: bgreat

   |downloads_bgreat| |docker_bgreat|

   :versions: 2.0.0-1, 2.0.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bgreat

   and update with::

      conda update bgreat

   or use the docker container::

      docker pull quay.io/biocontainers/bgreat:<tag>

   (see `bgreat/tags`_ for valid values for ``<tag>``)


.. |downloads_bgreat| image:: https://img.shields.io/conda/dn/bioconda/bgreat.svg?style=flat
   :alt:   (downloads)
.. |docker_bgreat| image:: https://quay.io/repository/biocontainers/bgreat/status
   :target: https://quay.io/repository/biocontainers/bgreat
.. _`bgreat/tags`: https://quay.io/repository/biocontainers/bgreat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bgreat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bgreat/README.html
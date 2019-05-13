:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sccaller'
.. highlight: bash

sccaller
========

.. conda:recipe:: sccaller
   :replaces_section_title:

   Dong X et al. Accurate identification of single\-nucleotide variants in whole\-genome\-amplified single cells. Nat Methods. 2017 May\;14\(5\)\:491\-493. doi\: 10.1038\/nmeth.4227

   :homepage: https://github.com/biosinodx/SCcaller
   :license: GPL-3
   :recipe: /`sccaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sccaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sccaller/meta.yaml>`_

   


.. conda:package:: sccaller

   |downloads_sccaller| |docker_sccaller|

   :versions: 1.21-0, 1.2-1, 1.2-0
   
   :depends numpy: 
   :depends python: >=2.7,<2.8.0a0
   :depends samtools: >=1.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sccaller

   and update with::

      conda update sccaller

   or use the docker container::

      docker pull quay.io/biocontainers/sccaller:<tag>

   (see `sccaller/tags`_ for valid values for ``<tag>``)


.. |downloads_sccaller| image:: https://img.shields.io/conda/dn/bioconda/sccaller.svg?style=flat
   :target: https://anaconda.org/bioconda/sccaller
   :alt:   (downloads)
.. |docker_sccaller| image:: https://quay.io/repository/biocontainers/sccaller/status
   :target: https://quay.io/repository/biocontainers/sccaller
.. _`sccaller/tags`: https://quay.io/repository/biocontainers/sccaller?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sccaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sccaller/README.html
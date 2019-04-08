:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tigger'
.. highlight: bash

r-tigger
========

.. conda:recipe:: r-tigger
   :replaces_section_title:

   Infers the V genotype of an individual from immunoglobulin \(Ig\) repertoire sequencing data \(AIRR\-Seq\, Rep\-Seq\). Includes detection of  any novel alleles. This information is then used to correct existing V  allele calls from among the sample sequences. Citations\: Gadala\-Maria\, et al \(2015\) \<doi\:10.1073\/pnas.1417683112\>.

   :homepage: http://tigger.readthedocs.io
   :license: CC / CC BY-SA 4.0
   :recipe: /`r-tigger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tigger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tigger/meta.yaml>`_

   


.. conda:package:: r-tigger

   |downloads_r-tigger| |docker_r-tigger|

   :versions: 0.3.1-1, 0.3.1-0
   
   :depends r-alakazam: >=0.2.11
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-doparallel: 
   :depends r-dplyr: >=0.7.0
   :depends r-foreach: 
   :depends r-ggplot2: >=2.0.0
   :depends r-gridextra: 
   :depends r-gtools: 
   :depends r-iterators: 
   :depends r-lazyeval: 
   :depends r-rlang: 
   :depends r-shazam: >=0.1.10
   :depends r-stringi: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-tigger

   and update with::

      conda update r-tigger

   or use the docker container::

      docker pull quay.io/biocontainers/r-tigger:<tag>

   (see `r-tigger/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tigger| image:: https://img.shields.io/conda/dn/bioconda/r-tigger.svg?style=flat
   :alt:   (downloads)
.. |docker_r-tigger| image:: https://quay.io/repository/biocontainers/r-tigger/status
   :target: https://quay.io/repository/biocontainers/r-tigger
.. _`r-tigger/tags`: https://quay.io/repository/biocontainers/r-tigger?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tigger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tigger/README.html
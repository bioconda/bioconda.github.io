:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgfast'
.. highlight: bash

wgfast
======

.. conda:recipe:: wgfast
   :replaces_section_title:

   The whole genome focused array SNP typing \(WG\-FAST\) pipeline

   :homepage: https://github.com/jasonsahl/wgfast
   :license: GPL / GPL v3
   :recipe: /`wgfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgfast/meta.yaml>`_

   


.. conda:package:: wgfast

   |downloads_wgfast| |docker_wgfast|

   :versions: 1.0.4-0, 1.0.3-2, 1.0.3-1, 1.0.3-0
   
   :depends bbmap: 
   :depends biopython: 
   :depends bwa: 
   :depends click: 
   :depends dendropy: 
   :depends ete3: 
   :depends logbook: 
   :depends mash: 
   :depends nasp: 
   :depends ncbitk: 
   :depends pandas: 
   :depends pathos: 
   :depends picard: 
   :depends python: >=3
   :depends qt: 
   :depends raxml: 
   :depends retrying: 
   :depends samtools: 
   :depends snakemake: >=5
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wgfast

   and update with::

      conda update wgfast

   or use the docker container::

      docker pull quay.io/biocontainers/wgfast:<tag>

   (see `wgfast/tags`_ for valid values for ``<tag>``)


.. |downloads_wgfast| image:: https://img.shields.io/conda/dn/bioconda/wgfast.svg?style=flat
   :target: https://anaconda.org/bioconda/wgfast
   :alt:   (downloads)
.. |docker_wgfast| image:: https://quay.io/repository/biocontainers/wgfast/status
   :target: https://quay.io/repository/biocontainers/wgfast
.. _`wgfast/tags`: https://quay.io/repository/biocontainers/wgfast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgfast/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'behst'
.. highlight: bash

behst
=====

.. conda:recipe:: behst
   :replaces_section_title:

   BEHST reads an input dataset of chromosome regions\, and intersects them with the chromatin interactions available in the Hi\-C dataset. Of these chromosome regions\, BEHST selects those that are presentthe regulatory regions of genes of APPRIS\, a dataset of principal isoform annotations. We defined these cis\-regulatory regions upon the position of their nearest transcription start site of the APPRIS genes\' principal transcripts \(obtained through GENCODE\)\, plus an upstream and downstream extension. Afterwards\, BEHST takes the genes of the resulting partner loci found in gene regulatory regions\, and performs a gene set enrichment analysis on them through g\:Profiler. BEHST\, finally\, outputs the list of the most significant Gene Ontology terms detected by g\:Profiler. Citation\: Davide Chicco\, Haixin Sarah Bi\, Juri Reimand\, and Michael M. Hoffman\, \'BEHST\: Genomic set enrichment analysis enhanced through integration of chromatin long\-range interactions\'\, 2018. In preparation. Website\: http\:\/\/behst.hoffmanlab.org\/ 

   :homepage: https://bitbucket.org/hoffmanlab/behst/overview
   :license: GPLv2
   :recipe: /`behst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/behst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/behst/meta.yaml>`_

   


.. conda:package:: behst

   |downloads_behst| |docker_behst|

   :versions: 3.8-0, 3.7-1, 3.7-0, 3.6-0, 3.5-0, 3.0-0, 2.9-0, 2.8-0, 2.7-0, 2.6-0, 2.5-0, 1.9-0, 1.8-0, 1.7-0, 1.6-0, 1.4-0, 0.9-0, 0.8-0
   
   :depends bedtools: 
   :depends pandas: 
   :depends pybedtools: 
   :depends python: 
   :depends r-base: 
   :depends r-gprofiler: 
   :depends r-rcurl: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install behst

   and update with::

      conda update behst

   or use the docker container::

      docker pull quay.io/biocontainers/behst:<tag>

   (see `behst/tags`_ for valid values for ``<tag>``)


.. |downloads_behst| image:: https://img.shields.io/conda/dn/bioconda/behst.svg?style=flat
   :target: https://anaconda.org/bioconda/behst
   :alt:   (downloads)
.. |docker_behst| image:: https://quay.io/repository/biocontainers/behst/status
   :target: https://quay.io/repository/biocontainers/behst
.. _`behst/tags`: https://quay.io/repository/biocontainers/behst?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/behst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/behst/README.html
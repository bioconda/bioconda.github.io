.. title:: Package Recipe 'jaffa'
.. highlight: bash


jaffa
=====

.. conda:recipe:: jaffa
   :replaces_section_title:

   JAFFA is a multi\-step pipeline that takes either raw RNA\-Seq reads\, or pre\-assembled transcripts then searches
   for gene fusions.  This package contains the wrappers jaffa\-direct\, jaffa\-assembly\, and jaffa\-hybrid.
   You can pass the \"refSeq\" parameter in the environment variables JAFFA\_REF\_BASE. Otherwise\, pass any paramters
   to the wrappers as you would to the bpipe JAFFA\_\{method\} call in the manual.


   :homepage: https://github.com/Oshlack/JAFFA
   :license: GPLv3
   :recipe: /`jaffa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jaffa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jaffa/meta.yaml>`_

   


.. conda:package:: jaffa

   |downloads_jaffa| |docker_jaffa|

   :versions: 1.09, 1.08

   :depends: :conda:package:`bbmap`  :conda:package:`bioconductor-iranges`  :conda:package:`blat`  :conda:package:`bowtie2`  :conda:package:`bpipe`  :conda:package:`fastx_toolkit`  :conda:package:`oases`  :conda:package:`samtools` ==1.1 :conda:package:`trimmomatic`  :conda:package:`velvet`  

   :required~by: |required_by_jaffa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jaffa

   and update with::

      conda update jaffa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/jaffa


.. |required_by_jaffa| conda:required_by:: jaffa
.. |downloads_jaffa| image:: https://img.shields.io/conda/dn/bioconda/jaffa.svg?style=flat
   :alt:   (downloads)
.. |docker_jaffa| image:: https://quay.io/repository/biocontainers/jaffa/status
   :target: https://quay.io/repository/biocontainers/jaffa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jaffa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jaffa/README.html


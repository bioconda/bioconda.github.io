:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'funannotate'
.. highlight: bash

funannotate
===========

.. conda:recipe:: funannotate
   :replaces_section_title:
   :noindex:

   funannotate\: eukaryotic genome annotation pipeline

   :homepage: https://github.com/nextgenusfs/funannotate
   :documentation: funannotate.readthedocs.io
   
   :license: BSD / BSD-2-Clause
   :recipe: /`funannotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funannotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funannotate/meta.yaml>`_

   


.. conda:package:: funannotate

   |downloads_funannotate| |docker_funannotate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.9-0</code>,  <code>1.8.7-0</code>,  <code>1.8.5-1</code>,  <code>1.8.5-0</code>,  <code>1.8.3-0</code>,  <code>1.8.1-1</code>,  <code>1.8.1-0</code>,  <code>1.7.4-1</code>,  <code>1.7.4-0</code>,  </span></summary>
      

      ``1.8.9-0``,  ``1.8.7-0``,  ``1.8.5-1``,  ``1.8.5-0``,  ``1.8.3-0``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.7.4-1``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends augustus: ``==3.3.3 pl5262h5a9fe7b_6``
   :depends bamtools: 
   :depends bedtools: 
   :depends biopython: 
   :depends blast: ``2.2.31``
   :depends codingquarry: 
   :depends diamond: ``>=2.0.5``
   :depends distro: 
   :depends ete3: 
   :depends evidencemodeler: 
   :depends exonerate: 
   :depends glimmerhmm: 
   :depends goatools: 
   :depends hisat2: 
   :depends hmmer: 
   :depends iqtree: 
   :depends kallisto: ``>=0.46.0,<0.46.2``
   :depends mafft: ``>=7``
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends pasa: ``>=2.4.1``
   :depends perl: 
   :depends perl-clone: 
   :depends perl-db-file: 
   :depends perl-dbd-mysql: 
   :depends perl-hash-merge: 
   :depends perl-json: 
   :depends perl-logger-simple: 
   :depends perl-parallel-forkmanager: 
   :depends perl-scalar-util-numeric: 
   :depends perl-soap-lite: 
   :depends perl-text-soundex: 
   :depends proteinortho: ``>=6.0.16``
   :depends psutil: 
   :depends python: ``>=3.6,<3.9``
   :depends r-base: ``>=3.4.1``
   :depends raxml: 
   :depends requests: 
   :depends salmon: ``>=0.9``
   :depends samtools: ``>=1.9``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends snap: 
   :depends stringtie: 
   :depends tantan: 
   :depends tbl2asn: 
   :depends trimal: 
   :depends trimmomatic: 
   :depends trinity: ``>=2.8.5 h8b12597_5``
   :depends trnascan-se: 
   :depends ucsc-pslcdnafilter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install funannotate

   and update with::

      conda update funannotate

   or use the docker container::

      docker pull quay.io/biocontainers/funannotate:<tag>

   (see `funannotate/tags`_ for valid values for ``<tag>``)


.. |downloads_funannotate| image:: https://img.shields.io/conda/dn/bioconda/funannotate.svg?style=flat
   :target: https://anaconda.org/bioconda/funannotate
   :alt:   (downloads)
.. |docker_funannotate| image:: https://quay.io/repository/biocontainers/funannotate/status
   :target: https://quay.io/repository/biocontainers/funannotate
.. _`funannotate/tags`: https://quay.io/repository/biocontainers/funannotate?tab=tags


.. raw:: html

    <script>
        var package = "funannotate";
        var versions = ["1.8.9","1.8.7","1.8.5","1.8.5","1.8.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/funannotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/funannotate/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'etoki'
.. highlight: bash

etoki
=====

.. conda:recipe:: etoki
   :replaces_section_title:
   :noindex:

   EToKi \(Enterobase Tool Kit\) includes methods related to Enterobase data analysis pipelines

   :homepage: https://github.com/zheminzhou/EToKi
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`etoki <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/etoki>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/etoki/meta.yaml>`_

   


.. conda:package:: etoki

   |downloads_etoki| |docker_etoki|

   :versions:
      
      

      ``1.2.3-0``

      

   
   :depends bbmap: 
   :depends blast: 
   :depends bowtie2: 
   :depends bwa: 
   :depends click: 
   :depends curl: 
   :depends diamond: 
   :depends ete3: 
   :depends fasttree: 
   :depends flye: 
   :depends gatk: 
   :depends kraken2: 
   :depends last: 
   :depends megahit: 
   :depends mmseqs2: 
   :depends nextpolish: 
   :depends numba: 
   :depends numpy: ``1.21.6.*``
   :depends pandas: 
   :depends perl-lyve-set: 
   :depends piler-cr: 
   :depends pilon: 
   :depends psutil: 
   :depends python: ``>=3.6``
   :depends rapidnj: 
   :depends raxml: 
   :depends raxml-ng: 
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends simbac: 
   :depends spades: ``>=3.15``
   :depends trf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install etoki

   and update with::

      conda update etoki

   or use the docker container::

      docker pull quay.io/biocontainers/etoki:<tag>

   (see `etoki/tags`_ for valid values for ``<tag>``)


.. |downloads_etoki| image:: https://img.shields.io/conda/dn/bioconda/etoki.svg?style=flat
   :target: https://anaconda.org/bioconda/etoki
   :alt:   (downloads)
.. |docker_etoki| image:: https://quay.io/repository/biocontainers/etoki/status
   :target: https://quay.io/repository/biocontainers/etoki
.. _`etoki/tags`: https://quay.io/repository/biocontainers/etoki?tab=tags


.. raw:: html

    <script>
        var package = "etoki";
        var versions = ["1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/etoki/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/etoki/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitoz'
.. highlight: bash

mitoz
=====

.. conda:recipe:: mitoz
   :replaces_section_title:
   :noindex:

   MitoZ\: A toolkit for assembly\, annotation\, and visualization of animal mitochondrial genomes

   :homepage: https://github.com/linzhi2013/MitoZ
   :license: GPLv3
   :recipe: /`mitoz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitoz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitoz/meta.yaml>`_

   


.. conda:package:: mitoz

   |downloads_mitoz| |docker_mitoz|

   :versions:
      
      

      ``3.4-1``,  ``3.4-0``,  ``3.3-1``,  ``3.3-0``,  ``3.2-0``,  ``3.1-0``,  ``3.0-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends bs4: 
   :depends bwa: 
   :depends circos: ``0.69.*``
   :depends ete3: ``>=3.1.2``
   :depends fastp: 
   :depends hmmer: ``3.1b2.*``
   :depends infernal: ``1.1.1.*``
   :depends libgd: 
   :depends megahit: 
   :depends openjdk: 
   :depends perl: ``5.26.*``
   :depends perl-bioperl: 
   :depends perl-clone: 
   :depends perl-list-moreutils: 
   :depends perl-params-validate: 
   :depends python: ``>=3.6``
   :depends requests: 
   :depends samtools: 
   :depends seqkit: 
   :depends spades: ``>=3.15.4``
   :depends tbl2asn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mitoz

   and update with::

      conda update mitoz

   or use the docker container::

      docker pull quay.io/biocontainers/mitoz:<tag>

   (see `mitoz/tags`_ for valid values for ``<tag>``)


.. |downloads_mitoz| image:: https://img.shields.io/conda/dn/bioconda/mitoz.svg?style=flat
   :target: https://anaconda.org/bioconda/mitoz
   :alt:   (downloads)
.. |docker_mitoz| image:: https://quay.io/repository/biocontainers/mitoz/status
   :target: https://quay.io/repository/biocontainers/mitoz
.. _`mitoz/tags`: https://quay.io/repository/biocontainers/mitoz?tab=tags


.. raw:: html

    <script>
        var package = "mitoz";
        var versions = ["3.4","3.4","3.3","3.3","3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitoz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitoz/README.html
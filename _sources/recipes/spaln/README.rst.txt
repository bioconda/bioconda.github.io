.. title:: Package Recipe 'spaln'
.. highlight: bash


spaln
=====

.. conda:recipe:: spaln
   :replaces_section_title:

   Map and align a set of cDNA\/EST or protein sequences onto a genome

   :homepage: http://www.genome.ist.i.kyoto-u.ac.jp/~aln_user/spaln/
   :developer docs: https://github.com/ogotoh/spaln
   :license: GPL / GPL-2.0
   :recipe: /`spaln <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spaln>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spaln/meta.yaml>`_

   Spaln \(space\-efficient spliced alignment\) is a stand\-alone program that maps
   and aligns a set of cDNA or protein sequences onto a whole genomic sequence
   in a single job. Spaln also performs spliced or ordinary alignment after
   rapid similarity search against a protein sequence database\, if a genomic segment 
   or an amino acid sequence is given as a query. 



.. conda:package:: spaln

   |downloads_spaln| |docker_spaln|

   :versions: 2.3.2

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_spaln|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spaln

   and update with::

      conda update spaln

   or use the docker container::

      docker pull quay.io/repository/biocontainers/spaln


.. |required_by_spaln| conda:required_by:: spaln
.. |downloads_spaln| image:: https://img.shields.io/conda/dn/bioconda/spaln.svg?style=flat
   :alt:   (downloads)
.. |docker_spaln| image:: https://quay.io/repository/biocontainers/spaln/status
   :target: https://quay.io/repository/biocontainers/spaln







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spaln/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spaln/README.html


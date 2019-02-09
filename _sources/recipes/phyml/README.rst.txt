.. title:: Package Recipe 'phyml'
.. highlight: bash


phyml
=====

.. conda:recipe:: phyml
   :replaces_section_title:

   Phylogenetic estimation using \(Maximum\) Likelihood

   :homepage: http://www.atgc-montpellier.fr/phyml/
   :developer docs: https://github.com/stephaneguindon/phyml/
   :license: GPL / GPLv2
   :recipe: /`phyml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyml/meta.yaml>`_
   :links: biotools: :biotools:`phyml`, doi: :doi:`10.1093/sysbio/syq010`

   PhyML is a software that estimates maximum likelihood phylogenies from
   alignments of nucleotide or amino acid sequences. The main strength of
   PhyML lies in the large number of substitution models coupled to various
   options to search the space of phylogenetic tree topologies\, going from
   very fast and efficient methods to slower but generally more accurate
   approaches. PhyML was designed to process moderate to large data sets. In
   theory\, alignments with up to 4\,000 sequences 2\,000\,000 character\-long
   can be processed. PhyML can process data sets made of multiple genes and
   fit sophisticated substitution models with heterogeneous components
   across partition elements.



.. conda:package:: phyml

   |downloads_phyml| |docker_phyml|

   :versions: 3.3.20180621, 3.3.20170530, 3.2.0

   :depends: :conda:package:`openmpi` >=3.1,<3.2.0a0 

   :required~by: |required_by_phyml|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phyml

   and update with::

      conda update phyml

   or use the docker container::

      docker pull quay.io/repository/biocontainers/phyml


.. |required_by_phyml| conda:required_by:: phyml
.. |downloads_phyml| image:: https://img.shields.io/conda/dn/bioconda/phyml.svg?style=flat
   :alt:   (downloads)
.. |docker_phyml| image:: https://quay.io/repository/biocontainers/phyml/status
   :target: https://quay.io/repository/biocontainers/phyml







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyml/README.html


:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sina'
.. highlight: bash

sina
====

.. conda:recipe:: sina
   :replaces_section_title:

   Reference based multiple sequence alignment

   :homepage: https://github.com/epruesse/SINA
   :documentation: https://sina.readthedocs.io
   
   :license: `GPL / GPLv3 <https://raw.githubusercontent.com/epruesse/SINA/master/LICENSE>`_
   :recipe: /`sina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sina/meta.yaml>`_
   :links: biotools: :biotools:`SINA`, doi: :doi:`10.1093/bioinformatics/bts252`

   SINA allows incorporating additional sequences into an existing
   multiple sequence alignment \(MSA\) without modifying the original
   alignment. While adding sequences to an MSA with SINA is usually
   faster than re\-computing the entire MSA from an augmented set of
   unaligned sequences\, the primary benefit lies in protecting
   investments made into the original MSA such as manual curation of the
   alignment\, compute intensive phylogenetic tree reconstruction and
   taxonomic annotation of the resulting phylogeny.

   Additionally\, SINA includes a homology search which uses the
   previously computed alignment to determine the most similar
   sequences. Based on the search results\, a LCA based classification of
   the query sequence can be computed using taxonomic classifications
   assigned to the sequences comprising the reference MSA.

   SINA is used to compute the small and large subunit ribosomal RNA
   alignments provided by the SILVA\_ project and is able to use the ARB\_
   format reference databases released by the project.



.. conda:package:: sina

   |downloads_sina| |docker_sina|

   :versions: 1.6.0-0, 1.5.0-0, 1.4.0-0, 1.3.5-2, 1.3.4-2, 1.3.1-2, 1.3.1-0, 1.3.0-0
   
   :depends arb-bio-tools: 
   :depends boost-cpp: >=1.68.0,<1.68.1.0a0
   :depends glib: >=2.58.3,<3.0a0
   :depends libarbdb: 6.0.6 h82bc0eb_8
   :depends libcxx: >=4.0.1
   :depends tbb: >=2019.4
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sina

   and update with::

      conda update sina

   or use the docker container::

      docker pull quay.io/biocontainers/sina:<tag>

   (see `sina/tags`_ for valid values for ``<tag>``)


.. |downloads_sina| image:: https://img.shields.io/conda/dn/bioconda/sina.svg?style=flat
   :target: https://anaconda.org/bioconda/sina
   :alt:   (downloads)
.. |docker_sina| image:: https://quay.io/repository/biocontainers/sina/status
   :target: https://quay.io/repository/biocontainers/sina
.. _`sina/tags`: https://quay.io/repository/biocontainers/sina?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sina/README.html
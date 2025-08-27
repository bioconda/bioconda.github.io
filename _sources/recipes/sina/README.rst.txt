:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sina'
.. highlight: bash

sina
====

.. conda:recipe:: sina
   :replaces_section_title:
   :noindex:

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

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.5-2</code>,  <code>1.3.4-2</code>,  </span></summary>
      

      ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.5-2``,  ``1.3.4-2``,  ``1.3.1-2``,  ``1.3.1-0``,  ``1.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends arb-bio-tools: 
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends glib: ``>=2.58.3,<3.0a0``
   :depends libarbdb: ``6.0.6 h82bc0eb_8``
   :depends libcxx: ``>=9.0.1``
   :depends tbb: ``>=2019.9,<2021.0.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sina

   and update with::

      mamba update sina

  To create a new environment, run::

      mamba create --name myenvname sina

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sina:<tag>

   (see `sina/tags`_ for valid values for ``<tag>``)


.. |downloads_sina| image:: https://img.shields.io/conda/dn/bioconda/sina.svg?style=flat
   :target: https://anaconda.org/bioconda/sina
   :alt:   (downloads)
.. |docker_sina| image:: https://quay.io/repository/biocontainers/sina/status
   :target: https://quay.io/repository/biocontainers/sina
.. _`sina/tags`: https://quay.io/repository/biocontainers/sina?tab=tags


.. raw:: html

    <script>
        var package = "sina";
        var versions = ["1.7.2","1.7.1","1.7.0","1.6.1","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sina/README.html
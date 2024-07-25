:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'augur'
.. highlight: bash

augur
=====

.. conda:recipe:: augur
   :replaces_section_title:
   :noindex:

   Process pathogen genome data for the Nextstrain platform

   :homepage: https://github.com/nextstrain/augur
   :license: AGPL / AGPL-3.0-only
   :recipe: /`augur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/augur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/augur/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.02906`

   


.. conda:package:: augur

   |downloads_augur| |docker_augur|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>25.2.0-0</code>,  <code>25.1.1-0</code>,  <code>25.1.0-0</code>,  <code>25.0.0-0</code>,  <code>24.4.0-1</code>,  <code>24.4.0-0</code>,  <code>24.3.0-0</code>,  <code>24.2.3-0</code>,  <code>24.2.2-0</code>,  </span></summary>
      

      ``25.2.0-0``,  ``25.1.1-0``,  ``25.1.0-0``,  ``25.0.0-0``,  ``24.4.0-1``,  ``24.4.0-0``,  ``24.3.0-0``,  ``24.2.3-0``,  ``24.2.2-0``,  ``24.2.1-0``,  ``24.2.0-0``,  ``24.1.0-0``,  ``24.0.0-0``,  ``23.1.1-1``,  ``23.1.1-0``,  ``23.1.0-0``,  ``23.0.0-0``,  ``22.4.0-0``,  ``22.3.0-0``,  ``22.2.0-0``,  ``22.1.0-0``,  ``22.0.3-0``,  ``22.0.2-0``,  ``22.0.1-0``,  ``22.0.0-0``,  ``21.1.0-0``,  ``21.0.1-1``,  ``21.0.1-0``,  ``21.0.0-1``,  ``21.0.0-0``,  ``20.0.0-0``,  ``19.3.0-0``,  ``19.2.0-0``,  ``19.1.0-0``,  ``19.0.0-0``,  ``18.2.0-0``,  ``18.1.2-0``,  ``18.1.1-0``,  ``18.1.0-0``,  ``18.0.0-0``,  ``17.1.0-1``,  ``17.1.0-0``,  ``17.0.0-1``,  ``17.0.0-0``,  ``16.0.3-0``,  ``16.0.2-0``,  ``16.0.1-0``,  ``15.0.2-0``,  ``15.0.1-0``,  ``15.0.0-0``,  ``14.1.0-0``,  ``14.0.0-0``,  ``13.1.2-0``,  ``13.1.1-0``,  ``13.1.0-0``,  ``13.0.4-0``,  ``13.0.3-0``,  ``13.0.2-0``,  ``13.0.1-1``,  ``13.0.1-0``,  ``13.0.0-0``,  ``12.1.1-0``,  ``12.0.0-0``,  ``11.3.0-0``,  ``11.2.0-1``,  ``11.2.0-0``,  ``11.1.2-1``,  ``11.1.2-0``,  ``11.1.0-0``,  ``11.0.0-0``,  ``10.3.0-0``,  ``10.2.0-0``,  ``10.1.1-0``,  ``10.1.0-0``,  ``10.0.4-0``,  ``10.0.3-0``,  ``10.0.2-0``,  ``10.0.0-1``,  ``10.0.0-0``,  ``9.0.0-1``,  ``9.0.0-0``,  ``8.0.0-0``,  ``7.0.2-0``,  ``6.4.3-0``,  ``6.4.2-0``,  ``6.4.1-0``,  ``6.4.0-0``,  ``6.3.0-0``,  ``6.2.0-0``,  ``6.1.1-0``,  ``6.1.0-0``,  ``6.0.0-0``,  ``5.4.1-0``,  ``5.4.0-0``,  ``5.3.0-0``,  ``5.2.1-0``,  ``5.2.0-0``,  ``5.1.1-0``,  ``5.1.0-0``,  ``4.0.0-0``,  ``3.1.5-1``,  ``3.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcbio-gff: ``>=0.7.1,<0.8``
   :depends biopython: ``>=1.80,<2``
   :depends cvxopt: ``>=1.1.9,<2``
   :depends fasttree: 
   :depends iqtree: 
   :depends isodate: ``>=0.6.0,<0.7``
   :depends jsonschema: ``>=3.0.0,<4``
   :depends mafft: 
   :depends networkx: ``>=2.5,<4``
   :depends numpy: ``>=1.0.0,<2``
   :depends packaging: ``>=19.2``
   :depends pandas: ``>=1.0.0,<2``
   :depends pyfastx: ``>=1.0.0,<3``
   :depends python: ``>=3.8``
   :depends python-calamine: ``>=0.2.0``
   :depends raxml: 
   :depends scipy: ``>=1.0.0,<2``
   :depends treetime: ``>=0.11.2,<0.12``
   :depends vcftools: 
   :depends xopen: ``>=1.7.0,<3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install augur

   and update with::

      mamba update augur

  To create a new environment, run::

      mamba create --name myenvname augur

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/augur:<tag>

   (see `augur/tags`_ for valid values for ``<tag>``)


.. |downloads_augur| image:: https://img.shields.io/conda/dn/bioconda/augur.svg?style=flat
   :target: https://anaconda.org/bioconda/augur
   :alt:   (downloads)
.. |docker_augur| image:: https://quay.io/repository/biocontainers/augur/status
   :target: https://quay.io/repository/biocontainers/augur
.. _`augur/tags`: https://quay.io/repository/biocontainers/augur?tab=tags


.. raw:: html

    <script>
        var package = "augur";
        var versions = ["25.2.0","25.1.1","25.1.0","25.0.0","24.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/augur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/augur/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biasaway'
.. highlight: bash

biasaway
========

.. conda:recipe:: biasaway
   :replaces_section_title:
   :noindex:

   BiasAway\: a tool to generate composition\-matched background sequences

   :homepage: https://bitbucket.org/CBGR/biasaway
   :documentation: https://biasaway.rtfd.io
   
   :license: GPL / GPLv3
   :recipe: /`biasaway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biasaway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biasaway/meta.yaml>`_

   BiasAway provides user with four models for generating background sequences useful to enrichment analyses. These backgrounds derived from mono\- and di\- nucleotide shuffled sequences\, and genomic sequences matched to the GC content of the target data.


.. conda:package:: biasaway

   |downloads_biasaway| |docker_biasaway|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.0-0</code>,  <code>3.2.7-0</code>,  <code>3.2.5-0</code>,  <code>3.2.4-0</code>,  <code>3.2.3-0</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.4-0</code>,  </span></summary>
      

      ``3.3.0-0``,  ``3.2.7-0``,  ``3.2.5-0``,  ``3.2.4-0``,  ``3.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.0-0``,  ``2.0.4-0``,  ``2.0.1-0``,  ``1.0.4-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends cyushuffle: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.4``
   :depends scikit-learn: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install biasaway

   and update with::

      mamba update biasaway

  To create a new environment, run::

      mamba create --name myenvname biasaway

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biasaway:<tag>

   (see `biasaway/tags`_ for valid values for ``<tag>``)


.. |downloads_biasaway| image:: https://img.shields.io/conda/dn/bioconda/biasaway.svg?style=flat
   :target: https://anaconda.org/bioconda/biasaway
   :alt:   (downloads)
.. |docker_biasaway| image:: https://quay.io/repository/biocontainers/biasaway/status
   :target: https://quay.io/repository/biocontainers/biasaway
.. _`biasaway/tags`: https://quay.io/repository/biocontainers/biasaway?tab=tags


.. raw:: html

    <script>
        var package = "biasaway";
        var versions = ["3.3.0","3.2.7","3.2.5","3.2.4","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biasaway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biasaway/README.html
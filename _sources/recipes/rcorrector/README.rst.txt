:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rcorrector'
.. highlight: bash

rcorrector
==========

.. conda:recipe:: rcorrector
   :replaces_section_title:
   :noindex:

   Rcorrector \(RNA\-seq error CORRECTOR\) is a kmer\-based error correction method for RNA\-seq data. Rcorrector can also be applied to other type of sequencing data where the read coverage is non\-uniform\, such as single\-cell sequencing.

   :homepage: https://github.com/mourisl/Rcorrector/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`rcorrector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rcorrector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rcorrector/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13742-015-0089-y`, biotools: :biotools:`rcorrector`

   


.. conda:package:: rcorrector

   |downloads_rcorrector| |docker_rcorrector|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  <code>1.0.4-3</code>,  <code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3.1-1</code>,  </span></summary>
      

      ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3.1-1``,  ``1.0.3.1-0``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends kmer-jellyfish: ``2.*``
   :depends kmer-jellyfish: ``>=2.3.1,<2.3.2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: 
   :depends zlib: 
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

      mamba install rcorrector

   and update with::

      mamba update rcorrector

  To create a new environment, run::

      mamba create --name myenvname rcorrector

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rcorrector:<tag>

   (see `rcorrector/tags`_ for valid values for ``<tag>``)


.. |downloads_rcorrector| image:: https://img.shields.io/conda/dn/bioconda/rcorrector.svg?style=flat
   :target: https://anaconda.org/bioconda/rcorrector
   :alt:   (downloads)
.. |docker_rcorrector| image:: https://quay.io/repository/biocontainers/rcorrector/status
   :target: https://quay.io/repository/biocontainers/rcorrector
.. _`rcorrector/tags`: https://quay.io/repository/biocontainers/rcorrector?tab=tags


.. raw:: html

    <script>
        var package = "rcorrector";
        var versions = ["1.0.7","1.0.6","1.0.5","1.0.5","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rcorrector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rcorrector/README.html
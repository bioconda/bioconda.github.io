:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rseqc'
.. highlight: bash

rseqc
=====

.. conda:recipe:: rseqc
   :replaces_section_title:
   :noindex:

   QC package for RNA\-seq data.

   :homepage: https://rseqc.sourceforge.net
   :documentation: https://rseqc.sourceforge.net/#usage-information
   
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`rseqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseqc/meta.yaml>`_
   :links: biotools: :biotools:`rseqc`, doi: :doi:`10.1093/bioinformatics/bts356`

   


.. conda:package:: rseqc

   |downloads_rseqc| |docker_rseqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.4-0</code>,  <code>5.0.3-3</code>,  <code>5.0.3-2</code>,  <code>5.0.3-1</code>,  <code>5.0.3-0</code>,  <code>5.0.1-1</code>,  <code>5.0.1-0</code>,  <code>5.0.0-0</code>,  <code>4.0.0-2</code>,  </span></summary>
      

      ``5.0.4-0``,  ``5.0.3-3``,  ``5.0.3-2``,  ``5.0.3-1``,  ``5.0.3-0``,  ``5.0.1-1``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-3``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.6.4-2``,  ``2.6.4-1``,  ``2.6.4-0``,  ``2.6.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bx-python: 
   :depends logomaker: 
   :depends numpy: 
   :depends pybigwig: 
   :depends pysam: 
   :depends python: ``>=3.5``
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

      mamba install rseqc

   and update with::

      mamba update rseqc

  To create a new environment, run::

      mamba create --name myenvname rseqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rseqc:<tag>

   (see `rseqc/tags`_ for valid values for ``<tag>``)


.. |downloads_rseqc| image:: https://img.shields.io/conda/dn/bioconda/rseqc.svg?style=flat
   :target: https://anaconda.org/bioconda/rseqc
   :alt:   (downloads)
.. |docker_rseqc| image:: https://quay.io/repository/biocontainers/rseqc/status
   :target: https://quay.io/repository/biocontainers/rseqc
.. _`rseqc/tags`: https://quay.io/repository/biocontainers/rseqc?tab=tags


.. raw:: html

    <script>
        var package = "rseqc";
        var versions = ["5.0.4","5.0.3","5.0.3","5.0.3","5.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rseqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rseqc/README.html
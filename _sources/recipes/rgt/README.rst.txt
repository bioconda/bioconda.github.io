:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rgt'
.. highlight: bash

rgt
===

.. conda:recipe:: rgt
   :replaces_section_title:
   :noindex:

   Toolkit to perform regulatory genomics data analysis

   :homepage: http://www.regulatory-genomics.org
   :documentation: http://www.regulatory-genomics.org/rgt/tutorial/
   
   :developer docs: https://github.com/CostaLab/reg-gen
   :license: GPL / GPL-3.0-or-later
   :recipe: /`rgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgt/meta.yaml>`_

   


.. conda:package:: rgt

   |downloads_rgt| |docker_rgt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.12.3-3</code>,  <code>0.12.3-2</code>,  <code>0.12.3-1</code>,  <code>0.12.3-0</code>,  <code>0.12.2-0</code>,  <code>0.11.4-2</code>,  </span></summary>
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.12.3-3``,  ``0.12.3-2``,  ``0.12.3-1``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.11.4-2``,  ``0.11.4-1``,  ``0.11.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends adjusttext: 
   :depends biopython: ``>=1.64``
   :depends fisher: ``>=0.1.5``
   :depends hmmlearn: ``0.2.2``
   :depends htseq: 
   :depends joblib: 
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends logomaker: 
   :depends matplotlib-base: ``>=1.1.0``
   :depends matplotlib-venn: 
   :depends moods: ``>=1.9.4.1``
   :depends mpmath: 
   :depends natsort: 
   :depends numpy: ``>=1.4.0``
   :depends pandas: 
   :depends pybigwig: 
   :depends pysam: ``>=0.20.0``
   :depends python: ``>=3.7,<3.8.0a0``
   :depends python_abi: ``3.7.* *_cp37m``
   :depends pyx: 
   :depends scikit-learn: ``>=0.19.0``
   :depends scipy: ``>=1.0.0``
   :depends seaborn: 
   :depends ucsc-bedgraphtobigwig: 
   :depends ucsc-bedtobigbed: 
   :depends ucsc-bigbedtobed: 
   :depends ucsc-bigwigmerge: 
   :depends ucsc-wigtobigwig: 
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

      mamba install rgt

   and update with::

      mamba update rgt

  To create a new environment, run::

      mamba create --name myenvname rgt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rgt:<tag>

   (see `rgt/tags`_ for valid values for ``<tag>``)


.. |downloads_rgt| image:: https://img.shields.io/conda/dn/bioconda/rgt.svg?style=flat
   :target: https://anaconda.org/bioconda/rgt
   :alt:   (downloads)
.. |docker_rgt| image:: https://quay.io/repository/biocontainers/rgt/status
   :target: https://quay.io/repository/biocontainers/rgt
.. _`rgt/tags`: https://quay.io/repository/biocontainers/rgt?tab=tags


.. raw:: html

    <script>
        var package = "rgt";
        var versions = ["1.0.2","1.0.1","1.0.0","0.12.3","0.12.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rgt/README.html
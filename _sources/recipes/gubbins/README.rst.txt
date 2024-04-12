:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gubbins'
.. highlight: bash

gubbins
=======

.. conda:recipe:: gubbins
   :replaces_section_title:
   :noindex:

   Rapid phylogenetic analysis of large samples of recombinant bacterial whole genome sequences using Gubbins.

   :homepage: https://github.com/nickjcroucher/gubbins
   :license: GPL-2.0
   :recipe: /`gubbins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gubbins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gubbins/meta.yaml>`_

   


.. conda:package:: gubbins

   |downloads_gubbins| |docker_gubbins|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.5-0</code>,  <code>3.3.4-1</code>,  <code>3.3.4-0</code>,  <code>3.3.3-1</code>,  <code>3.3.3-0</code>,  <code>3.3.1-0</code>,  <code>3.3-0</code>,  <code>3.3.0-0</code>,  <code>3.2.2-0</code>,  </span></summary>
      

      ``3.3.5-0``,  ``3.3.4-1``,  ``3.3.4-0``,  ``3.3.3-1``,  ``3.3.3-0``,  ``3.3.1-0``,  ``3.3-0``,  ``3.3.0-0``,  ``3.2.2-0``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.6-1``,  ``3.1.6-0``,  ``3.1.5-0``,  ``3.1.4-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.5-0``,  ``2.3.4-2``,  ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.2-0``,  ``2.3.1-2``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ggtree: 
   :depends bioconductor-treeio: 
   :depends biopython: 
   :depends dendropy: 
   :depends fasttree: ``2.1.10.*``
   :depends iqtree: ``>=2.2``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends multiprocess: 
   :depends numba: 
   :depends numpy: ``<=1.23.0``
   :depends numpy: ``>=1.23.0,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends r-aplot: 
   :depends r-argparser: 
   :depends r-cowplot: 
   :depends r-magrittr: 
   :depends r-patchwork: 
   :depends r-rcolorbrewer: 
   :depends r-tidyverse: 
   :depends rapidnj: 
   :depends raxml: ``8.2.12.*``
   :depends raxml-ng: ``1.0.1.*``
   :depends scipy: 
   :depends setuptools: 
   :depends ska2: ``>=0.3.0``
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

      mamba install gubbins

   and update with::

      mamba update gubbins

  To create a new environment, run::

      mamba create --name myenvname gubbins

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gubbins:<tag>

   (see `gubbins/tags`_ for valid values for ``<tag>``)


.. |downloads_gubbins| image:: https://img.shields.io/conda/dn/bioconda/gubbins.svg?style=flat
   :target: https://anaconda.org/bioconda/gubbins
   :alt:   (downloads)
.. |docker_gubbins| image:: https://quay.io/repository/biocontainers/gubbins/status
   :target: https://quay.io/repository/biocontainers/gubbins
.. _`gubbins/tags`: https://quay.io/repository/biocontainers/gubbins?tab=tags


.. raw:: html

    <script>
        var package = "gubbins";
        var versions = ["3.3.5","3.3.4","3.3.4","3.3.3","3.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gubbins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gubbins/README.html
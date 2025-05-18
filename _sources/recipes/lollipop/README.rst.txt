:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lollipop'
.. highlight: bash

lollipop
========

.. conda:recipe:: lollipop
   :replaces_section_title:
   :noindex:

   A tool for Deconvolution for Wastewater Genomics

   :homepage: https://github.com/cbg-ethz/LolliPop
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`lollipop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lollipop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lollipop/meta.yaml>`_
   :links: biotools: :biotools:`lollipop`, doi: :doi:`10.1101/2022.11.02.22281825`

   


.. conda:package:: lollipop

   |downloads_lollipop| |docker_lollipop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcbio-gff: 
   :depends click: 
   :depends click-option-group: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.10``
   :depends ruamel.yaml: ``>=0.18``
   :depends scipy: 
   :depends strictyaml: 
   :depends threadpoolctl: 
   :depends tqdm: 
   :depends zstandard: 
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

      mamba install lollipop

   and update with::

      mamba update lollipop

  To create a new environment, run::

      mamba create --name myenvname lollipop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lollipop:<tag>

   (see `lollipop/tags`_ for valid values for ``<tag>``)


.. |downloads_lollipop| image:: https://img.shields.io/conda/dn/bioconda/lollipop.svg?style=flat
   :target: https://anaconda.org/bioconda/lollipop
   :alt:   (downloads)
.. |docker_lollipop| image:: https://quay.io/repository/biocontainers/lollipop/status
   :target: https://quay.io/repository/biocontainers/lollipop
.. _`lollipop/tags`: https://quay.io/repository/biocontainers/lollipop?tab=tags


.. raw:: html

    <script>
        var package = "lollipop";
        var versions = ["0.5.3","0.5.2","0.5.1","0.5.0","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lollipop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lollipop/README.html
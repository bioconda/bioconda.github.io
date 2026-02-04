:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pirate'
.. highlight: bash

pirate
======

.. conda:recipe:: pirate
   :replaces_section_title:
   :noindex:

   Pangenome analysis and threshold evaluation toolbox

   :homepage: https://github.com/SionBayliss/PIRATE
   :license: GPL / GPL3
   :recipe: /`pirate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pirate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pirate/meta.yaml>`_
   :links: biotools: :biotools:`pirate`, doi: :doi:`10.1101/598391`

   


.. conda:package:: pirate

   |downloads_pirate| |docker_pirate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.5-3</code>,  <code>1.0.5-2</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  <code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  </span></summary>
      

      ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ggtree: 
   :depends blast: ``>=2.2.31``
   :depends cd-hit: ``>=4.7``
   :depends diamond: ``>=0.9.14``
   :depends fasttree: ``>=2.1.10``
   :depends mafft: ``>=7.310``
   :depends mcl: ``>=14.137``
   :depends parallel: ``>=20170422``
   :depends perl-bioperl: ``>=1.7.2``
   :depends r-dplyr: 
   :depends r-ggplot2: ``>=3.0.0,<4.0.0``
   :depends r-gridextra: 
   :depends r-phangorn: 
   :depends unzip: 
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

      mamba install pirate

   and update with::

      mamba update pirate

  To create a new environment, run::

      mamba create --name myenvname pirate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pirate:<tag>

   (see `pirate/tags`_ for valid values for ``<tag>``)


.. |downloads_pirate| image:: https://img.shields.io/conda/dn/bioconda/pirate.svg?style=flat
   :target: https://anaconda.org/bioconda/pirate
   :alt:   (downloads)
.. |docker_pirate| image:: https://quay.io/repository/biocontainers/pirate/status
   :target: https://quay.io/repository/biocontainers/pirate
.. _`pirate/tags`: https://quay.io/repository/biocontainers/pirate?tab=tags


.. raw:: html

    <script>
        var package = "pirate";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.5","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pirate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pirate/README.html
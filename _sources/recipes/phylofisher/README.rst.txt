:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylofisher'
.. highlight: bash

phylofisher
===========

.. conda:recipe:: phylofisher
   :replaces_section_title:
   :noindex:

   A package for the creation\, analysis\, and visualization of eukaryotic phylogenomic datasets.

   :homepage: https://github.com/TheBrownLab/PhyloFisher
   :documentation: https://thebrownlab.github.io/phylofisher-pages/
   
   :license: MIT / MIT
   :recipe: /`phylofisher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylofisher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylofisher/meta.yaml>`_

   


.. conda:package:: phylofisher

   |downloads_phylofisher| |docker_phylofisher|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.13-0</code>,  <code>1.2.12-0</code>,  <code>1.2.11-0</code>,  <code>1.2.10-0</code>,  <code>1.2.9-0</code>,  <code>1.2.8-0</code>,  <code>1.2.7-1</code>,  <code>1.2.7-0</code>,  <code>1.2.6-0</code>,  </span></summary>
      

      ``1.2.13-0``,  ``1.2.12-0``,  ``1.2.11-0``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-1``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends astral-tree: ``5.7.8.*``
   :depends biopython: 
   :depends blast: 
   :depends cd-hit: ``4.8.1.*``
   :depends diamond: ``2.0.15.*``
   :depends dist_est: ``1.1.*``
   :depends ete3: 
   :depends fasttree: ``2.1.10.*``
   :depends hmmer: ``3.3.*``
   :depends mafft: ``7.520.*``
   :depends matplotlib-base: 
   :depends pandas: 
   :depends pyqt: 
   :depends python: ``3.7.10.*``
   :depends snakemake-minimal: ``6.1.*``
   :depends trimal: ``1.4.1.*``
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

      mamba install phylofisher

   and update with::

      mamba update phylofisher

  To create a new environment, run::

      mamba create --name myenvname phylofisher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylofisher:<tag>

   (see `phylofisher/tags`_ for valid values for ``<tag>``)


.. |downloads_phylofisher| image:: https://img.shields.io/conda/dn/bioconda/phylofisher.svg?style=flat
   :target: https://anaconda.org/bioconda/phylofisher
   :alt:   (downloads)
.. |docker_phylofisher| image:: https://quay.io/repository/biocontainers/phylofisher/status
   :target: https://quay.io/repository/biocontainers/phylofisher
.. _`phylofisher/tags`: https://quay.io/repository/biocontainers/phylofisher?tab=tags


.. raw:: html

    <script>
        var package = "phylofisher";
        var versions = ["1.2.13","1.2.12","1.2.11","1.2.10","1.2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylofisher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylofisher/README.html
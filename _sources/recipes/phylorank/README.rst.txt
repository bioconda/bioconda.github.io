:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylorank'
.. highlight: bash

phylorank
=========

.. conda:recipe:: phylorank
   :replaces_section_title:
   :noindex:

   PhyloRank provides functionality for calculating the relative evolutionary
   divergence \(RED\) of taxa in a tree and for finding the best placement of
   taxonomic labels in a tree.


   :homepage: https://github.com/dparks1134/PhyloRank
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`phylorank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylorank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylorank/meta.yaml>`_

   


.. conda:package:: phylorank

   |downloads_phylorank| |docker_phylorank|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.12-0</code>,  <code>0.1.11-0</code>,  <code>0.1.10-0</code>,  <code>0.1.9-0</code>,  <code>0.1.8-0</code>,  <code>0.1.6-0</code>,  <code>0.1.3-0</code>,  <code>0.1.2-0</code>,  <code>0.1.1-0</code>,  </span></summary>
      

      ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.6-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.43-0``

      
      .. raw:: html

         </details>
      

   
   :depends biolib: ``>=0.1.0``
   :depends dendropy: ``>=4.1.0``
   :depends jinja2: ``>=2.7.3``
   :depends matplotlib-base: ``<3.5.0``
   :depends mpld3: ``>=0.5.2``
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends scipy: 
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

      mamba install phylorank

   and update with::

      mamba update phylorank

  To create a new environment, run::

      mamba create --name myenvname phylorank

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylorank:<tag>

   (see `phylorank/tags`_ for valid values for ``<tag>``)


.. |downloads_phylorank| image:: https://img.shields.io/conda/dn/bioconda/phylorank.svg?style=flat
   :target: https://anaconda.org/bioconda/phylorank
   :alt:   (downloads)
.. |docker_phylorank| image:: https://quay.io/repository/biocontainers/phylorank/status
   :target: https://quay.io/repository/biocontainers/phylorank
.. _`phylorank/tags`: https://quay.io/repository/biocontainers/phylorank?tab=tags


.. raw:: html

    <script>
        var package = "phylorank";
        var versions = ["0.1.12","0.1.11","0.1.10","0.1.9","0.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylorank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylorank/README.html
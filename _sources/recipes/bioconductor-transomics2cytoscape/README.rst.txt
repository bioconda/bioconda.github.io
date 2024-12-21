:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-transomics2cytoscape'
.. highlight: bash

bioconductor-transomics2cytoscape
=================================

.. conda:recipe:: bioconductor-transomics2cytoscape
   :replaces_section_title:
   :noindex:

   A tool set for 3D Trans\-Omic network visualization with Cytoscape

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/transomics2cytoscape.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-transomics2cytoscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transomics2cytoscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transomics2cytoscape/meta.yaml>`_

   transomics2cytoscape generates a file for 3D transomics visualization by providing input that specifies the IDs of multiple KEGG pathway layers\, their corresponding Z\-axis heights\, and an input that represents the edges between the pathway layers. The edges are used\, for example\, to describe the relationships between kinase on a pathway and enzyme on another pathway. This package automates creation of a transomics network as shown in the figure in Yugi.2014 \(https\:\/\/doi.org\/10.1016\/j.celrep.2014.07.021\) using Cytoscape automation \(https\:\/\/doi.org\/10.1186\/s13059\-019\-1758\-4\).


.. conda:package:: bioconductor-transomics2cytoscape

   |downloads_bioconductor-transomics2cytoscape| |docker_bioconductor-transomics2cytoscape|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-keggrest: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rcy3: ``>=2.26.0,<2.27.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-pbapply: 
   :depends r-purrr: 
   :depends r-tibble: 
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

      mamba install bioconductor-transomics2cytoscape

   and update with::

      mamba update bioconductor-transomics2cytoscape

  To create a new environment, run::

      mamba create --name myenvname bioconductor-transomics2cytoscape

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-transomics2cytoscape:<tag>

   (see `bioconductor-transomics2cytoscape/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-transomics2cytoscape| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-transomics2cytoscape.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-transomics2cytoscape
   :alt:   (downloads)
.. |docker_bioconductor-transomics2cytoscape| image:: https://quay.io/repository/biocontainers/bioconductor-transomics2cytoscape/status
   :target: https://quay.io/repository/biocontainers/bioconductor-transomics2cytoscape
.. _`bioconductor-transomics2cytoscape/tags`: https://quay.io/repository/biocontainers/bioconductor-transomics2cytoscape?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-transomics2cytoscape";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-transomics2cytoscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-transomics2cytoscape/README.html
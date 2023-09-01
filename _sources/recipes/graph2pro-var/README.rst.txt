:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graph2pro-var'
.. highlight: bash

graph2pro-var
=============

.. conda:recipe:: graph2pro-var
   :replaces_section_title:
   :noindex:

   meta\-proteogenomic identification from mass spec and metagenomic\/transcriptomic data

   :homepage: https://github.com/COL-IU/graph2pro-var
   :license: GPL / GPL-3.0
   :recipe: /`graph2pro-var <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graph2pro-var>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graph2pro-var/meta.yaml>`_

   


.. conda:package:: graph2pro-var

   |downloads_graph2pro-var| |docker_graph2pro-var|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bowtie2: 
   :depends cd-hit: 
   :depends dbgraph: 
   :depends fraggenescan: 
   :depends gawk: 
   :depends msgf_plus: 
   :depends python: 
   :depends rapsearch: 
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

      mamba install graph2pro-var

   and update with::

      mamba update graph2pro-var

  To create a new environment, run::

      mamba create --name myenvname graph2pro-var

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/graph2pro-var:<tag>

   (see `graph2pro-var/tags`_ for valid values for ``<tag>``)


.. |downloads_graph2pro-var| image:: https://img.shields.io/conda/dn/bioconda/graph2pro-var.svg?style=flat
   :target: https://anaconda.org/bioconda/graph2pro-var
   :alt:   (downloads)
.. |docker_graph2pro-var| image:: https://quay.io/repository/biocontainers/graph2pro-var/status
   :target: https://quay.io/repository/biocontainers/graph2pro-var
.. _`graph2pro-var/tags`: https://quay.io/repository/biocontainers/graph2pro-var?tab=tags


.. raw:: html

    <script>
        var package = "graph2pro-var";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graph2pro-var/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graph2pro-var/README.html
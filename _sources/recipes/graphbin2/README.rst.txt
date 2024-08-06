:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphbin2'
.. highlight: bash

graphbin2
=========

.. conda:recipe:: graphbin2
   :replaces_section_title:
   :noindex:

   GraphBin2\: Refined and Overlapped Binning of Metagenomic Contigs Using Assembly Graphs

   :homepage: https://github.com/metagentools/GraphBin2
   :documentation: https://graphbin2.readthedocs.io/
   
   :license: BSD-3
   :recipe: /`graphbin2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphbin2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphbin2/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13015-021-00185-6`

   GraphBin2 is a metagenomic contig bin\-refinement tool that makes use of assembly graphs and can assign contigs to multiple bins.



.. conda:package:: graphbin2

   |downloads_graphbin2| |docker_graphbin2|

   :versions:
      
      

      ``1.3.1-0``

      

   
   :depends cairocffi: 
   :depends click: 
   :depends cogent3: 
   :depends python: ``>=3.9``
   :depends python-igraph: 
   :depends scipy: 
   :depends tqdm: 
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

      mamba install graphbin2

   and update with::

      mamba update graphbin2

  To create a new environment, run::

      mamba create --name myenvname graphbin2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/graphbin2:<tag>

   (see `graphbin2/tags`_ for valid values for ``<tag>``)


.. |downloads_graphbin2| image:: https://img.shields.io/conda/dn/bioconda/graphbin2.svg?style=flat
   :target: https://anaconda.org/bioconda/graphbin2
   :alt:   (downloads)
.. |docker_graphbin2| image:: https://quay.io/repository/biocontainers/graphbin2/status
   :target: https://quay.io/repository/biocontainers/graphbin2
.. _`graphbin2/tags`: https://quay.io/repository/biocontainers/graphbin2?tab=tags


.. raw:: html

    <script>
        var package = "graphbin2";
        var versions = ["1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphbin2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphbin2/README.html
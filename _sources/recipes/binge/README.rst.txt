:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binge'
.. highlight: bash

binge
=====

.. conda:recipe:: binge
   :replaces_section_title:
   :noindex:

   A Python process for clustering transcripts based on locus orthology.

   :homepage: https://github.com/zkstewart/BINge
   :documentation: https://github.com/zkstewart/BINge/wiki
   
   :license: GPL / GPL-3.0-only
   :recipe: /`binge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binge/meta.yaml>`_

   


.. conda:package:: binge

   |downloads_binge| |docker_binge|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends biopython: 
   :depends cd-hit: 
   :depends gmap: 
   :depends goatools: 
   :depends intervaltree: 
   :depends mmseqs2: 
   :depends ncls: ``>=0.0.68``
   :depends networkx: 
   :depends numpy: 
   :depends pyfaidx: 
   :depends python: ``>=3.9,<=3.13``
   :depends salmon: 
   :depends scikit-learn: 
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

      mamba install binge

   and update with::

      mamba update binge

  To create a new environment, run::

      mamba create --name myenvname binge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/binge:<tag>

   (see `binge/tags`_ for valid values for ``<tag>``)


.. |downloads_binge| image:: https://img.shields.io/conda/dn/bioconda/binge.svg?style=flat
   :target: https://anaconda.org/bioconda/binge
   :alt:   (downloads)
.. |docker_binge| image:: https://quay.io/repository/biocontainers/binge/status
   :target: https://quay.io/repository/biocontainers/binge
.. _`binge/tags`: https://quay.io/repository/biocontainers/binge?tab=tags


.. raw:: html

    <script>
        var package = "binge";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binge/README.html
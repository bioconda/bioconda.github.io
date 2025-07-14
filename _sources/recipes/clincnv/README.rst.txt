:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clincnv'
.. highlight: bash

clincnv
=======

.. conda:recipe:: clincnv
   :replaces_section_title:
   :noindex:

   Copy number variation detection for clinical sequencing.

   :homepage: https://github.com/imgag/ClinCNV
   :license: MIT
   :recipe: /`clincnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clincnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clincnv/meta.yaml>`_

   


.. conda:package:: clincnv

   |downloads_clincnv| |docker_clincnv|

   :versions:
      
      

      ``1.18.3-0``

      

   
   :depends r-base: 
   :depends r-data.table: 
   :depends r-dbscan: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-mass: 
   :depends r-mclust: 
   :depends r-optparse: 
   :depends r-party: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-robustbase: 
   :depends r-umap: 
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

      mamba install clincnv

   and update with::

      mamba update clincnv

  To create a new environment, run::

      mamba create --name myenvname clincnv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clincnv:<tag>

   (see `clincnv/tags`_ for valid values for ``<tag>``)


.. |downloads_clincnv| image:: https://img.shields.io/conda/dn/bioconda/clincnv.svg?style=flat
   :target: https://anaconda.org/bioconda/clincnv
   :alt:   (downloads)
.. |docker_clincnv| image:: https://quay.io/repository/biocontainers/clincnv/status
   :target: https://quay.io/repository/biocontainers/clincnv
.. _`clincnv/tags`: https://quay.io/repository/biocontainers/clincnv?tab=tags


.. raw:: html

    <script>
        var package = "clincnv";
        var versions = ["1.18.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clincnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clincnv/README.html
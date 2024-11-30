:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-calder2'
.. highlight: bash

r-calder2
=========

.. conda:recipe:: r-calder2
   :replaces_section_title:
   :noindex:

   CALDER is a Hi\-C analysis tool for the analysis of hierarchical chromatin interactions

   :homepage: https://github.com/CSOgroup/CALDER2
   :license: MIT / MIT
   :recipe: /`r-calder2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-calder2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-calder2/meta.yaml>`_

   


.. conda:package:: r-calder2

   |downloads_r-calder2| |docker_r-calder2|

   :versions:
      
      

      ``0.7-1``,  ``0.7-0``,  ``0.6-0``,  ``0.3-1``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.36.0``
   :depends bioconductor-rhdf5: ``>=2.28.0``
   :depends cooler: 
   :depends r-ape: ``>=5.3``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: ``>=1.12.2``
   :depends r-dendextend: ``>=1.12.0``
   :depends r-doparallel: ``>=1.0.15``
   :depends r-factoextra: ``>=1.0.5``
   :depends r-fields: ``>=9.8.3``
   :depends r-fitdistrplus: ``>=1.0.14``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-igraph: ``>=1.2.4``
   :depends r-maptools: ``>=0.9.5``
   :depends r-matrix: ``>=1.2.17``
   :depends r-optparse: 
   :depends r-r.utils: ``>=2.9.0``
   :depends r-rarpack: ``>=0.11.0``
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-strawr: ``>=0.0.9``
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

      mamba install r-calder2

   and update with::

      mamba update r-calder2

  To create a new environment, run::

      mamba create --name myenvname r-calder2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-calder2:<tag>

   (see `r-calder2/tags`_ for valid values for ``<tag>``)


.. |downloads_r-calder2| image:: https://img.shields.io/conda/dn/bioconda/r-calder2.svg?style=flat
   :target: https://anaconda.org/bioconda/r-calder2
   :alt:   (downloads)
.. |docker_r-calder2| image:: https://quay.io/repository/biocontainers/r-calder2/status
   :target: https://quay.io/repository/biocontainers/r-calder2
.. _`r-calder2/tags`: https://quay.io/repository/biocontainers/r-calder2?tab=tags


.. raw:: html

    <script>
        var package = "r-calder2";
        var versions = ["0.7","0.7","0.6","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-calder2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-calder2/README.html
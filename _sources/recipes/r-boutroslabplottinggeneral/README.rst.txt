:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'boutroslabplottinggeneral'
.. highlight: bash

boutroslabplottinggeneral
=========================

.. conda:recipe:: r-boutroslabplottinggeneral
   :replaces_section_title:
   :noindex:

   

   :homepage: https://labs.oicr.on.ca/boutros-lab/software/bpg
   :license: GPL-2extra
   :recipe: /`r-boutroslabplottinggeneral <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-boutroslabplottinggeneral>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-boutroslabplottinggeneral/meta.yaml>`_

   


.. conda:package:: boutroslabplottinggeneral

   |downloads_boutroslabplottinggeneral| |docker_boutroslabplottinggeneral|

   :versions:
      
      

      ``5.3.4-5``,  ``5.3.4-2``,  ``5.3.4-0``

      

   
   :depends r-argparse: 
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-cluster: 
   :depends r-dbi: 
   :depends r-dplyr: 
   :depends r-findpython: 
   :depends r-getopt: 
   :depends r-hexbin: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-lazyeval: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-proto: 
   :depends r-r.methodss3: 
   :depends r-r6: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rjson: 
   :depends r-tibble: 
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

      mamba install boutroslabplottinggeneral

   and update with::

      mamba update boutroslabplottinggeneral

  To create a new environment, run::

      mamba create --name myenvname boutroslabplottinggeneral

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/boutroslabplottinggeneral:<tag>

   (see `boutroslabplottinggeneral/tags`_ for valid values for ``<tag>``)


.. |downloads_boutroslabplottinggeneral| image:: https://img.shields.io/conda/dn/bioconda/boutroslabplottinggeneral.svg?style=flat
   :target: https://anaconda.org/bioconda/boutroslabplottinggeneral
   :alt:   (downloads)
.. |docker_boutroslabplottinggeneral| image:: https://quay.io/repository/biocontainers/boutroslabplottinggeneral/status
   :target: https://quay.io/repository/biocontainers/boutroslabplottinggeneral
.. _`boutroslabplottinggeneral/tags`: https://quay.io/repository/biocontainers/boutroslabplottinggeneral?tab=tags


.. raw:: html

    <script>
        var package = "boutroslabplottinggeneral";
        var versions = ["5.3.4","5.3.4","5.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/boutroslabplottinggeneral/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/boutroslabplottinggeneral/README.html
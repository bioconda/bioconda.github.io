:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rgccacmd'
.. highlight: bash

rgccacmd
========

.. conda:recipe:: rgccacmd
   :replaces_section_title:
   :noindex:

   Multiblock data analysis concerns the analysis of several sets of variables \(blocks\) observed on the same group of individuals. The main aims of the RGCCA package are \(i\) to study the relationships between blocks and \(ii\) to identify subsets of variables of each block which are active in their relationships with the other blocks.

   :homepage: https://CRAN.R-project.org/package=RGCCA
   :documentation: https://github.com/BrainAndSpineInstitute/rgcca_ui#readme
   
   :license: GPL3 / GPL-2.0-or-later
   :recipe: /`rgccacmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgccacmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgccacmd/meta.yaml>`_

   


.. conda:package:: rgccacmd

   |downloads_rgccacmd| |docker_rgccacmd|

   :versions:
      
      

      ``3.0.3-2``,  ``3.0.3-1``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-deriv: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-openxlsx: 
   :depends r-optparse: 
   :depends r-pbapply: 
   :depends r-plotly: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-vegan: 
   :depends wget: 
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

      mamba install rgccacmd

   and update with::

      mamba update rgccacmd

  To create a new environment, run::

      mamba create --name myenvname rgccacmd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rgccacmd:<tag>

   (see `rgccacmd/tags`_ for valid values for ``<tag>``)


.. |downloads_rgccacmd| image:: https://img.shields.io/conda/dn/bioconda/rgccacmd.svg?style=flat
   :target: https://anaconda.org/bioconda/rgccacmd
   :alt:   (downloads)
.. |docker_rgccacmd| image:: https://quay.io/repository/biocontainers/rgccacmd/status
   :target: https://quay.io/repository/biocontainers/rgccacmd
.. _`rgccacmd/tags`: https://quay.io/repository/biocontainers/rgccacmd?tab=tags


.. raw:: html

    <script>
        var package = "rgccacmd";
        var versions = ["3.0.3","3.0.3","3.0.3","3.0.2","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rgccacmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rgccacmd/README.html
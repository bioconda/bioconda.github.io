:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oligotyping'
.. highlight: bash

oligotyping
===========

.. conda:recipe:: oligotyping
   :replaces_section_title:
   :noindex:

   The oligotyping and minimum entropy decomposition \(MED\) pipeline for the analysis of marker gene amplicons

   :homepage: http://oligotyping.org
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`oligotyping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligotyping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligotyping/meta.yaml>`_

   


.. conda:package:: oligotyping

   |downloads_oligotyping| |docker_oligotyping|

   :versions:
      
      

      ``2.1-0``,  ``2.0-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends django: 
   :depends matplotlib: 
   :depends python: ``2.7*``
   :depends r-compute.es: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gtools: 
   :depends r-optparse: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-reshape: 
   :depends r-vegan: 
   :depends scipy: 
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

      mamba install oligotyping

   and update with::

      mamba update oligotyping

  To create a new environment, run::

      mamba create --name myenvname oligotyping

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/oligotyping:<tag>

   (see `oligotyping/tags`_ for valid values for ``<tag>``)


.. |downloads_oligotyping| image:: https://img.shields.io/conda/dn/bioconda/oligotyping.svg?style=flat
   :target: https://anaconda.org/bioconda/oligotyping
   :alt:   (downloads)
.. |docker_oligotyping| image:: https://quay.io/repository/biocontainers/oligotyping/status
   :target: https://quay.io/repository/biocontainers/oligotyping
.. _`oligotyping/tags`: https://quay.io/repository/biocontainers/oligotyping?tab=tags


.. raw:: html

    <script>
        var package = "oligotyping";
        var versions = ["2.1","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oligotyping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oligotyping/README.html
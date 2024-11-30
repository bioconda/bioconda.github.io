:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ultraheatmap'
.. highlight: bash

ultraheatmap
============

.. conda:recipe:: ultraheatmap
   :replaces_section_title:
   :noindex:

   ultraheatmaps facilitates the production of deepTools heatmaps

   :homepage: https://github.com/maxplanck-ie/ultraheatmap/
   :license: MIT / MIT
   :recipe: /`ultraheatmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultraheatmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultraheatmap/meta.yaml>`_

   


.. conda:package:: ultraheatmap

   |downloads_ultraheatmap| |docker_ultraheatmap|

   :versions:
      
      

      ``1.3.1-1``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends bedtools: ``>2``
   :depends deeptools: ``>3``
   :depends gffutils: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.6``
   :depends pyyaml: ``>=5.1``
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

      mamba install ultraheatmap

   and update with::

      mamba update ultraheatmap

  To create a new environment, run::

      mamba create --name myenvname ultraheatmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ultraheatmap:<tag>

   (see `ultraheatmap/tags`_ for valid values for ``<tag>``)


.. |downloads_ultraheatmap| image:: https://img.shields.io/conda/dn/bioconda/ultraheatmap.svg?style=flat
   :target: https://anaconda.org/bioconda/ultraheatmap
   :alt:   (downloads)
.. |docker_ultraheatmap| image:: https://quay.io/repository/biocontainers/ultraheatmap/status
   :target: https://quay.io/repository/biocontainers/ultraheatmap
.. _`ultraheatmap/tags`: https://quay.io/repository/biocontainers/ultraheatmap?tab=tags


.. raw:: html

    <script>
        var package = "ultraheatmap";
        var versions = ["1.3.1","1.3.0","1.3.0","1.2.2","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ultraheatmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ultraheatmap/README.html
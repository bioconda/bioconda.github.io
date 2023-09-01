:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mars'
.. highlight: bash

mars
====

.. conda:recipe:: mars
   :replaces_section_title:
   :noindex:

   Multiple Alignment\-based Refinement of SVs \(MARS\)

   :homepage: https://github.com/maiziex/MARS
   :license: MIT
   :recipe: /`mars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mars/meta.yaml>`_

   


.. conda:package:: mars

   |downloads_mars| |docker_mars|

   :versions:
      
      

      ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends biopython: 
   :depends minimap2: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends samtools: 
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

      mamba install mars

   and update with::

      mamba update mars

  To create a new environment, run::

      mamba create --name myenvname mars

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mars:<tag>

   (see `mars/tags`_ for valid values for ``<tag>``)


.. |downloads_mars| image:: https://img.shields.io/conda/dn/bioconda/mars.svg?style=flat
   :target: https://anaconda.org/bioconda/mars
   :alt:   (downloads)
.. |docker_mars| image:: https://quay.io/repository/biocontainers/mars/status
   :target: https://quay.io/repository/biocontainers/mars
.. _`mars/tags`: https://quay.io/repository/biocontainers/mars?tab=tags


.. raw:: html

    <script>
        var package = "mars";
        var versions = ["1.2.4","1.2.3","1.2.2","1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mars/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapula'
.. highlight: bash

mapula
======

.. conda:recipe:: mapula
   :replaces_section_title:
   :noindex:

   Calculation of alignment statistics

   :homepage: https://github.com/epi2me-labs/mapula
   :license: Mozilla Public License Version 2.0
   :recipe: /`mapula <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapula>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapula/meta.yaml>`_

   


.. conda:package:: mapula

   |downloads_mapula| |docker_mapula|

   :versions:
      
      

      ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends aplanat: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends scipy: 
   :depends tqdm: 
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

      mamba install mapula

   and update with::

      mamba update mapula

  To create a new environment, run::

      mamba create --name myenvname mapula

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mapula:<tag>

   (see `mapula/tags`_ for valid values for ``<tag>``)


.. |downloads_mapula| image:: https://img.shields.io/conda/dn/bioconda/mapula.svg?style=flat
   :target: https://anaconda.org/bioconda/mapula
   :alt:   (downloads)
.. |docker_mapula| image:: https://quay.io/repository/biocontainers/mapula/status
   :target: https://quay.io/repository/biocontainers/mapula
.. _`mapula/tags`: https://quay.io/repository/biocontainers/mapula?tab=tags


.. raw:: html

    <script>
        var package = "mapula";
        var versions = ["2.1.2","2.1.1","2.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapula/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapula/README.html
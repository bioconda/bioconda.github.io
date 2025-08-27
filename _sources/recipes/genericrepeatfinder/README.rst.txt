:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genericrepeatfinder'
.. highlight: bash

genericrepeatfinder
===================

.. conda:recipe:: genericrepeatfinder
   :replaces_section_title:
   :noindex:

   Generic Repeat Finder \(GRF\).

   :homepage: https://github.com/bioinfolabmu/GenericRepeatFinder
   :license: GPL / GPLv3
   :recipe: /`genericrepeatfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genericrepeatfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genericrepeatfinder/meta.yaml>`_

   


.. conda:package:: genericrepeatfinder

   |downloads_genericrepeatfinder| |docker_genericrepeatfinder|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends cd-hit: 
   :depends libcxx: ``>=18``
   :depends llvm-openmp: ``>=18.1.8``
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

      mamba install genericrepeatfinder

   and update with::

      mamba update genericrepeatfinder

  To create a new environment, run::

      mamba create --name myenvname genericrepeatfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genericrepeatfinder:<tag>

   (see `genericrepeatfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_genericrepeatfinder| image:: https://img.shields.io/conda/dn/bioconda/genericrepeatfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/genericrepeatfinder
   :alt:   (downloads)
.. |docker_genericrepeatfinder| image:: https://quay.io/repository/biocontainers/genericrepeatfinder/status
   :target: https://quay.io/repository/biocontainers/genericrepeatfinder
.. _`genericrepeatfinder/tags`: https://quay.io/repository/biocontainers/genericrepeatfinder?tab=tags


.. raw:: html

    <script>
        var package = "genericrepeatfinder";
        var versions = ["1.0.2","1.0.2","1.0.1","1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genericrepeatfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genericrepeatfinder/README.html
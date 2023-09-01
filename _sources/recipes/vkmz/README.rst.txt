:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vkmz'
.. highlight: bash

vkmz
====

.. conda:recipe:: vkmz
   :replaces_section_title:
   :noindex:

   metabolomics formula prediction and van Krevelen diagram generation

   :homepage: https://github.com/HegemanLab/vkmz
   :license: MIT / MIT License
   :recipe: /`vkmz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vkmz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vkmz/meta.yaml>`_

   


.. conda:package:: vkmz

   |downloads_vkmz| |docker_vkmz|

   :versions:
      
      

      ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.2-0``,  ``1.4dev2-0``,  ``v1.4dev1-0``,  ``v1.3.1-0``

      

   
   :depends python: ``>=3.6``
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

      mamba install vkmz

   and update with::

      mamba update vkmz

  To create a new environment, run::

      mamba create --name myenvname vkmz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vkmz:<tag>

   (see `vkmz/tags`_ for valid values for ``<tag>``)


.. |downloads_vkmz| image:: https://img.shields.io/conda/dn/bioconda/vkmz.svg?style=flat
   :target: https://anaconda.org/bioconda/vkmz
   :alt:   (downloads)
.. |docker_vkmz| image:: https://quay.io/repository/biocontainers/vkmz/status
   :target: https://quay.io/repository/biocontainers/vkmz
.. _`vkmz/tags`: https://quay.io/repository/biocontainers/vkmz?tab=tags


.. raw:: html

    <script>
        var package = "vkmz";
        var versions = ["1.4.6","1.4.5","1.4.4","1.4.2","1.4dev2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vkmz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vkmz/README.html
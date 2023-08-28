:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zifa'
.. highlight: bash

zifa
====

.. conda:recipe:: zifa
   :replaces_section_title:
   :noindex:

   Dimensionality reduction for zero\-inflated single\-cell gene expression analysis

   :homepage: https://github.com/epierson9/ZIFA
   :license: MIT / MIT
   :recipe: /`zifa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zifa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zifa/meta.yaml>`_

   


.. conda:package:: zifa

   |downloads_zifa| |docker_zifa|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install zifa

   and update with::

      mamba update zifa

  To create a new environment, run::

      mamba create --name myenvname zifa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/zifa:<tag>

   (see `zifa/tags`_ for valid values for ``<tag>``)


.. |downloads_zifa| image:: https://img.shields.io/conda/dn/bioconda/zifa.svg?style=flat
   :target: https://anaconda.org/bioconda/zifa
   :alt:   (downloads)
.. |docker_zifa| image:: https://quay.io/repository/biocontainers/zifa/status
   :target: https://quay.io/repository/biocontainers/zifa
.. _`zifa/tags`: https://quay.io/repository/biocontainers/zifa?tab=tags


.. raw:: html

    <script>
        var package = "zifa";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zifa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zifa/README.html
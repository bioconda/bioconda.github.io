:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'machina'
.. highlight: bash

machina
=======

.. conda:recipe:: machina
   :replaces_section_title:
   :noindex:

   Metastatic And Clonal History INtegrative Analysis

   :homepage: https://github.com/raphael-group/machina
   :license: BSD-3
   :recipe: /`machina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/machina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/machina/meta.yaml>`_

   MACHINA is a computational framework for inferring migration patterns
   between a primary tumor and metastases using DNA sequencing data. 


.. conda:package:: machina

   |downloads_machina| |docker_machina|

   :versions:
      
      

      ``1.2-7``,  ``1.2-6``,  ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends glpk: 
   :depends lemon: ``>=1.3.1,<1.3.2.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install machina

   and update with::

      mamba update machina

  To create a new environment, run::

      mamba create --name myenvname machina

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/machina:<tag>

   (see `machina/tags`_ for valid values for ``<tag>``)


.. |downloads_machina| image:: https://img.shields.io/conda/dn/bioconda/machina.svg?style=flat
   :target: https://anaconda.org/bioconda/machina
   :alt:   (downloads)
.. |docker_machina| image:: https://quay.io/repository/biocontainers/machina/status
   :target: https://quay.io/repository/biocontainers/machina
.. _`machina/tags`: https://quay.io/repository/biocontainers/machina?tab=tags


.. raw:: html

    <script>
        var package = "machina";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/machina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/machina/README.html
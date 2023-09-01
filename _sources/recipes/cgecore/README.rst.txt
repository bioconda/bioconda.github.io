:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgecore'
.. highlight: bash

cgecore
=======

.. conda:recipe:: cgecore
   :replaces_section_title:
   :noindex:

   Center for Genomic Epidemiology Core Module

   :homepage: https://bitbucket.org/genomicepidemiology/cge_core_module
   :license: Apache / Apache-2.0
   :recipe: /`cgecore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgecore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgecore/meta.yaml>`_

   


.. conda:package:: cgecore

   |downloads_cgecore| |docker_cgecore|

   :versions:
      
      

      ``1.5.6-0``,  ``1.5.5-1``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``

      

   
   :depends biopython: 
   :depends python: 
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

      mamba install cgecore

   and update with::

      mamba update cgecore

  To create a new environment, run::

      mamba create --name myenvname cgecore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cgecore:<tag>

   (see `cgecore/tags`_ for valid values for ``<tag>``)


.. |downloads_cgecore| image:: https://img.shields.io/conda/dn/bioconda/cgecore.svg?style=flat
   :target: https://anaconda.org/bioconda/cgecore
   :alt:   (downloads)
.. |docker_cgecore| image:: https://quay.io/repository/biocontainers/cgecore/status
   :target: https://quay.io/repository/biocontainers/cgecore
.. _`cgecore/tags`: https://quay.io/repository/biocontainers/cgecore?tab=tags


.. raw:: html

    <script>
        var package = "cgecore";
        var versions = ["1.5.6","1.5.5","1.5.5","1.5.4","1.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgecore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgecore/README.html
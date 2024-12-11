:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haploflow'
.. highlight: bash

haploflow
=========

.. conda:recipe:: haploflow
   :replaces_section_title:
   :noindex:

   Strain\-aware viral genome assembler for short read sequence data

   :homepage: https://github.com/hzi-bifo/Haploflow
   :license: Apache-2.0 AND MIT
   :recipe: /`haploflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploflow/meta.yaml>`_

   Haploflow is a strain\-aware viral genome assembler for short read sequence data. 
   It uses a flow algorithm on a deBruijn graph data structure to resolve viral strains. 
   Haploflow is still actively under development and written entirely in C\+\+.



.. conda:package:: haploflow

   |downloads_haploflow| |docker_haploflow|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends boost-cpp: 
   :depends libcxx: ``>=18``
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

      mamba install haploflow

   and update with::

      mamba update haploflow

  To create a new environment, run::

      mamba create --name myenvname haploflow

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haploflow:<tag>

   (see `haploflow/tags`_ for valid values for ``<tag>``)


.. |downloads_haploflow| image:: https://img.shields.io/conda/dn/bioconda/haploflow.svg?style=flat
   :target: https://anaconda.org/bioconda/haploflow
   :alt:   (downloads)
.. |docker_haploflow| image:: https://quay.io/repository/biocontainers/haploflow/status
   :target: https://quay.io/repository/biocontainers/haploflow
.. _`haploflow/tags`: https://quay.io/repository/biocontainers/haploflow?tab=tags


.. raw:: html

    <script>
        var package = "haploflow";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haploflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haploflow/README.html
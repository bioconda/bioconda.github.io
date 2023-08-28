:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chap'
.. highlight: bash

chap
====

.. conda:recipe:: chap
   :replaces_section_title:
   :noindex:

   CHAP is a tool for the functional annotation of ion channel structures

   :homepage: https://github.com/channotation/chap
   :license: MIT
   :recipe: /`chap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chap/meta.yaml>`_

   


.. conda:package:: chap

   |downloads_chap| |docker_chap|

   :versions:
      
      

      ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends gromacs: ``2018.6.*``
   :depends intel-compute-runtime: 
   :depends libcblas: ``3.8.0 8_*_netlib``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapacke: ``3.8.0 8_*_netlib``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends rapidjson: 
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

      mamba install chap

   and update with::

      mamba update chap

  To create a new environment, run::

      mamba create --name myenvname chap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chap:<tag>

   (see `chap/tags`_ for valid values for ``<tag>``)


.. |downloads_chap| image:: https://img.shields.io/conda/dn/bioconda/chap.svg?style=flat
   :target: https://anaconda.org/bioconda/chap
   :alt:   (downloads)
.. |docker_chap| image:: https://quay.io/repository/biocontainers/chap/status
   :target: https://quay.io/repository/biocontainers/chap
.. _`chap/tags`: https://quay.io/repository/biocontainers/chap?tab=tags


.. raw:: html

    <script>
        var package = "chap";
        var versions = ["0.9.1","0.9.1","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chap/README.html
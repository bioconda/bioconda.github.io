:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'k8'
.. highlight: bash

k8
==

.. conda:recipe:: k8
   :replaces_section_title:
   :noindex:

   Lightweight JavaScript shell based on Google\'s V8 JavaScript engine

   :homepage: https://github.com/attractivechaos/k8
   :license: MIT / MIT
   :recipe: /`k8 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/k8>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/k8/meta.yaml>`_

   


.. conda:package:: k8

   |downloads_k8| |docker_k8|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``,  ``0.2.5-4``,  ``0.2.5-3``,  ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.5-0``

      

   
   :depends __glibc: ``>=2.17,<3.0.a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends sysroot_linux-64: ``>=2.17``
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

      mamba install k8

   and update with::

      mamba update k8

  To create a new environment, run::

      mamba create --name myenvname k8

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/k8:<tag>

   (see `k8/tags`_ for valid values for ``<tag>``)


.. |downloads_k8| image:: https://img.shields.io/conda/dn/bioconda/k8.svg?style=flat
   :target: https://anaconda.org/bioconda/k8
   :alt:   (downloads)
.. |docker_k8| image:: https://quay.io/repository/biocontainers/k8/status
   :target: https://quay.io/repository/biocontainers/k8
.. _`k8/tags`: https://quay.io/repository/biocontainers/k8?tab=tags


.. raw:: html

    <script>
        var package = "k8";
        var versions = ["1.2","1.2","1.1","1.0","0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/k8/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/k8/README.html
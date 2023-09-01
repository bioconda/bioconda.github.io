:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stare-abc'
.. highlight: bash

stare-abc
=========

.. conda:recipe:: stare-abc
   :replaces_section_title:
   :noindex:

   Calculate Gene\-TF affinities via enhancer\-gene interactions

   :homepage: https://github.com/SchulzLab/STARE
   :license: MIT
   :recipe: /`stare-abc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stare-abc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stare-abc/meta.yaml>`_

   


.. conda:package:: stare-abc

   |downloads_stare-abc| |docker_stare-abc|

   :versions:
      
      

      ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3.2-1``,  ``1.0.3.2-0``,  ``1.0.3.1-0``,  ``1.0.3-0``

      

   
   :depends bedtools: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends make: 
   :depends openmp: 
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

      mamba install stare-abc

   and update with::

      mamba update stare-abc

  To create a new environment, run::

      mamba create --name myenvname stare-abc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stare-abc:<tag>

   (see `stare-abc/tags`_ for valid values for ``<tag>``)


.. |downloads_stare-abc| image:: https://img.shields.io/conda/dn/bioconda/stare-abc.svg?style=flat
   :target: https://anaconda.org/bioconda/stare-abc
   :alt:   (downloads)
.. |docker_stare-abc| image:: https://quay.io/repository/biocontainers/stare-abc/status
   :target: https://quay.io/repository/biocontainers/stare-abc
.. _`stare-abc/tags`: https://quay.io/repository/biocontainers/stare-abc?tab=tags


.. raw:: html

    <script>
        var package = "stare-abc";
        var versions = ["1.0.4","1.0.4","1.0.3.2","1.0.3.2","1.0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stare-abc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stare-abc/README.html
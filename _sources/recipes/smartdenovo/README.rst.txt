:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smartdenovo'
.. highlight: bash

smartdenovo
===========

.. conda:recipe:: smartdenovo
   :replaces_section_title:
   :noindex:

   Ultra\-fast de novo assembler using long noisy reads

   :homepage: https://github.com/ruanjue/smartdenovo
   :license: GPLv3
   :recipe: /`smartdenovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smartdenovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smartdenovo/meta.yaml>`_

   


.. conda:package:: smartdenovo

   |downloads_smartdenovo| |docker_smartdenovo|

   :versions:
      
      

      ``1.0.0-7``,  ``1.0.0-6``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: 
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

      mamba install smartdenovo

   and update with::

      mamba update smartdenovo

  To create a new environment, run::

      mamba create --name myenvname smartdenovo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smartdenovo:<tag>

   (see `smartdenovo/tags`_ for valid values for ``<tag>``)


.. |downloads_smartdenovo| image:: https://img.shields.io/conda/dn/bioconda/smartdenovo.svg?style=flat
   :target: https://anaconda.org/bioconda/smartdenovo
   :alt:   (downloads)
.. |docker_smartdenovo| image:: https://quay.io/repository/biocontainers/smartdenovo/status
   :target: https://quay.io/repository/biocontainers/smartdenovo
.. _`smartdenovo/tags`: https://quay.io/repository/biocontainers/smartdenovo?tab=tags


.. raw:: html

    <script>
        var package = "smartdenovo";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smartdenovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smartdenovo/README.html
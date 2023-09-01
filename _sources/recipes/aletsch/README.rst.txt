:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aletsch'
.. highlight: bash

aletsch
=======

.. conda:recipe:: aletsch
   :replaces_section_title:
   :noindex:

   Aletsch is a scalable\, accurate\, and versatile assembler for multiple RNA\-seq samples.

   :homepage: https://github.com/Shao-Group/aletsch
   :license: BSD-3-Clause
   :recipe: /`aletsch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aletsch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aletsch/meta.yaml>`_

   


.. conda:package:: aletsch

   |downloads_aletsch| |docker_aletsch|

   :versions:
      
      

      ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install aletsch

   and update with::

      mamba update aletsch

  To create a new environment, run::

      mamba create --name myenvname aletsch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aletsch:<tag>

   (see `aletsch/tags`_ for valid values for ``<tag>``)


.. |downloads_aletsch| image:: https://img.shields.io/conda/dn/bioconda/aletsch.svg?style=flat
   :target: https://anaconda.org/bioconda/aletsch
   :alt:   (downloads)
.. |docker_aletsch| image:: https://quay.io/repository/biocontainers/aletsch/status
   :target: https://quay.io/repository/biocontainers/aletsch
.. _`aletsch/tags`: https://quay.io/repository/biocontainers/aletsch?tab=tags


.. raw:: html

    <script>
        var package = "aletsch";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aletsch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aletsch/README.html
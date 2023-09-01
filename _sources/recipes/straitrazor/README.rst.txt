:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'straitrazor'
.. highlight: bash

straitrazor
===========

.. conda:recipe:: straitrazor
   :replaces_section_title:
   :noindex:

   The STR Allele Identification Tool

   :homepage: https://github.com/Ahhgust/STRaitRazor
   :license: MIT
   :recipe: /`straitrazor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/straitrazor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/straitrazor/meta.yaml>`_

   


.. conda:package:: straitrazor

   |downloads_straitrazor| |docker_straitrazor|

   :versions:
      
      

      ``3.0.1-6``,  ``3.0.1-5``,  ``3.0.1-4``,  ``3.0.1-3``,  ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``

      

   
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

      mamba install straitrazor

   and update with::

      mamba update straitrazor

  To create a new environment, run::

      mamba create --name myenvname straitrazor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/straitrazor:<tag>

   (see `straitrazor/tags`_ for valid values for ``<tag>``)


.. |downloads_straitrazor| image:: https://img.shields.io/conda/dn/bioconda/straitrazor.svg?style=flat
   :target: https://anaconda.org/bioconda/straitrazor
   :alt:   (downloads)
.. |docker_straitrazor| image:: https://quay.io/repository/biocontainers/straitrazor/status
   :target: https://quay.io/repository/biocontainers/straitrazor
.. _`straitrazor/tags`: https://quay.io/repository/biocontainers/straitrazor?tab=tags


.. raw:: html

    <script>
        var package = "straitrazor";
        var versions = ["3.0.1","3.0.1","3.0.1","3.0.1","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/straitrazor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/straitrazor/README.html
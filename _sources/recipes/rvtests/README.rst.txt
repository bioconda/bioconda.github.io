:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rvtests'
.. highlight: bash

rvtests
=======

.. conda:recipe:: rvtests
   :replaces_section_title:
   :noindex:

   Rare variant test software for next generation sequencing data

   :homepage: https://github.com/zhanxw/rvtests
   :license: GPL
   :recipe: /`rvtests <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rvtests>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rvtests/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw079`, biotools: :biotools:`rvtests`

   


.. conda:package:: rvtests

   |downloads_rvtests| |docker_rvtests|

   :versions:
      
      

      ``2.0.7-2``,  ``2.0.6-1``

      

   
   :depends libgfortran: ``>=3.0``
   :depends libstdcxx-ng: ``>=4.9``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install rvtests

   and update with::

      mamba update rvtests

  To create a new environment, run::

      mamba create --name myenvname rvtests

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rvtests:<tag>

   (see `rvtests/tags`_ for valid values for ``<tag>``)


.. |downloads_rvtests| image:: https://img.shields.io/conda/dn/bioconda/rvtests.svg?style=flat
   :target: https://anaconda.org/bioconda/rvtests
   :alt:   (downloads)
.. |docker_rvtests| image:: https://quay.io/repository/biocontainers/rvtests/status
   :target: https://quay.io/repository/biocontainers/rvtests
.. _`rvtests/tags`: https://quay.io/repository/biocontainers/rvtests?tab=tags


.. raw:: html

    <script>
        var package = "rvtests";
        var versions = ["2.0.7","2.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rvtests/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rvtests/README.html
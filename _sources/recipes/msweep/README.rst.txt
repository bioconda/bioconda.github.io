:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msweep'
.. highlight: bash

msweep
======

.. conda:recipe:: msweep
   :replaces_section_title:
   :noindex:

   mSWEEP \- bacterial community composition estimation from pseudoalignments

   :homepage: https://github.com/PROBIC/mSWEEP
   :license: MIT
   :recipe: /`msweep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msweep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msweep/meta.yaml>`_
   :links: doi: :doi:`10.12688/wellcomeopenres.15639.2`

   


.. conda:package:: msweep

   |downloads_msweep| |docker_msweep|

   :versions:
      
      

      ``2.0.0-0``,  ``1.6.3-2``,  ``1.6.3-1``,  ``1.6.3-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
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

      mamba install msweep

   and update with::

      mamba update msweep

  To create a new environment, run::

      mamba create --name myenvname msweep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msweep:<tag>

   (see `msweep/tags`_ for valid values for ``<tag>``)


.. |downloads_msweep| image:: https://img.shields.io/conda/dn/bioconda/msweep.svg?style=flat
   :target: https://anaconda.org/bioconda/msweep
   :alt:   (downloads)
.. |docker_msweep| image:: https://quay.io/repository/biocontainers/msweep/status
   :target: https://quay.io/repository/biocontainers/msweep
.. _`msweep/tags`: https://quay.io/repository/biocontainers/msweep?tab=tags


.. raw:: html

    <script>
        var package = "msweep";
        var versions = ["2.0.0","1.6.3","1.6.3","1.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msweep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msweep/README.html
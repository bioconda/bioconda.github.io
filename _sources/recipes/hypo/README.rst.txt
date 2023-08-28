:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hypo'
.. highlight: bash

hypo
====

.. conda:recipe:: hypo
   :replaces_section_title:
   :noindex:

   Super Fast and Accurate Polisher for Long Read Genome Assemblies.

   :homepage: https://github.com/kensung-lab/hypo
   :license: GPL-3.0
   :recipe: /`hypo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hypo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hypo/meta.yaml>`_

   


.. conda:package:: hypo

   |downloads_hypo| |docker_hypo|

   :versions:
      
      

      ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends kmc: ``>=3.0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends openmp: 
   :depends sdsl-lite: ``>=2.1.1``
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

      mamba install hypo

   and update with::

      mamba update hypo

  To create a new environment, run::

      mamba create --name myenvname hypo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hypo:<tag>

   (see `hypo/tags`_ for valid values for ``<tag>``)


.. |downloads_hypo| image:: https://img.shields.io/conda/dn/bioconda/hypo.svg?style=flat
   :target: https://anaconda.org/bioconda/hypo
   :alt:   (downloads)
.. |docker_hypo| image:: https://quay.io/repository/biocontainers/hypo/status
   :target: https://quay.io/repository/biocontainers/hypo
.. _`hypo/tags`: https://quay.io/repository/biocontainers/hypo?tab=tags


.. raw:: html

    <script>
        var package = "hypo";
        var versions = ["1.0.3","1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hypo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hypo/README.html
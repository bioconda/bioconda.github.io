:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macs3'
.. highlight: bash

macs3
=====

.. conda:recipe:: macs3
   :replaces_section_title:
   :noindex:

   Model Based Analysis for ChIP\-Seq data

   :homepage: https://pypi.org/project/MACS3/
   :documentation: https://macs3-project.github.io/MACS/
   
   :developer docs: https://github.com/macs3-project/MACS/
   :license: BSD / BSD-3-Clause
   :recipe: /`macs3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macs3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macs3/meta.yaml>`_
   :links: biotools: :biotools:`macs`, doi: :doi:`10.1186/gb-2008-9-9-r137`, usegalaxy-eu: :usegalaxy-eu:`peakcalling_macs`

   


.. conda:package:: macs3

   |downloads_macs3| |docker_macs3|

   :versions:
      
      

      ``3.0.1-1``,  ``3.0.1-0``

      

   
   :depends cykhash: ``>=2.0,<3.0``
   :depends hmmlearn: ``0.3.*``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: ``>=1.25``
   :depends numpy: ``>=1.26.4,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: ``>=1.3``
   :depends scipy: ``>=1.12``
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

      mamba install macs3

   and update with::

      mamba update macs3

  To create a new environment, run::

      mamba create --name myenvname macs3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/macs3:<tag>

   (see `macs3/tags`_ for valid values for ``<tag>``)


.. |downloads_macs3| image:: https://img.shields.io/conda/dn/bioconda/macs3.svg?style=flat
   :target: https://anaconda.org/bioconda/macs3
   :alt:   (downloads)
.. |docker_macs3| image:: https://quay.io/repository/biocontainers/macs3/status
   :target: https://quay.io/repository/biocontainers/macs3
.. _`macs3/tags`: https://quay.io/repository/biocontainers/macs3?tab=tags


.. raw:: html

    <script>
        var package = "macs3";
        var versions = ["3.0.1","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macs3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macs3/README.html
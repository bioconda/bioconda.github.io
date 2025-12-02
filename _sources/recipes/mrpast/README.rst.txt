:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mrpast'
.. highlight: bash

mrpast
======

.. conda:recipe:: mrpast
   :replaces_section_title:
   :noindex:

   Demographic inference from Ancestral Recombination Graphs.

   :homepage: https://aprilweilab.github.io/
   :documentation: https://mrpast.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/aprilweilab/mrpast
   :license: GPL3 / GPL-3.0-only
   :recipe: /`mrpast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrpast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrpast/meta.yaml>`_

   


.. conda:package:: mrpast

   |downloads_mrpast| |docker_mrpast|

   :versions:
      
      

      ``0.2-0``

      

   
   :depends dataclasses-json: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends msprime: 
   :depends numpy: ``>=1.21,<3``
   :depends numpy: ``>=2.2.6,<3.0a0``
   :depends orjson: 
   :depends pandas: 
   :depends pyfaidx: ``>=0.9.0.3,<1.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pyyaml: 
   :depends tabulate: 
   :depends tqdm: 
   :depends tskit: 
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

      mamba install mrpast

   and update with::

      mamba update mrpast

  To create a new environment, run::

      mamba create --name myenvname mrpast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mrpast:<tag>

   (see `mrpast/tags`_ for valid values for ``<tag>``)


.. |downloads_mrpast| image:: https://img.shields.io/conda/dn/bioconda/mrpast.svg?style=flat
   :target: https://anaconda.org/bioconda/mrpast
   :alt:   (downloads)
.. |docker_mrpast| image:: https://quay.io/repository/biocontainers/mrpast/status
   :target: https://quay.io/repository/biocontainers/mrpast
.. _`mrpast/tags`: https://quay.io/repository/biocontainers/mrpast?tab=tags


.. raw:: html

    <script>
        var package = "mrpast";
        var versions = ["0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mrpast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mrpast/README.html
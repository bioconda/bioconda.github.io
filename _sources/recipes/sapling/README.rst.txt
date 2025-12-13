:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sapling'
.. highlight: bash

sapling
=======

.. conda:recipe:: sapling
   :replaces_section_title:
   :noindex:

   Inferring and Summarizing Tumor Phylogenies from Bulk DNA Data

   :homepage: https://github.com/elkebir-group/Sapling
   :documentation: https://github.com/elkebir-group/Sapling/blob/v1.0.0/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`sapling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sapling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sapling/meta.yaml>`_

   Sapling is a Python tool for inferring and summarizing tumor phylogenies
   from bulk DNA data. In addition to identifying full trees\, Sapling also
   identifies \"backbone trees\" that summarize the space of plausible 
   evolutionary histories. Sapling supports multiple solvers \(fastPPM\, CVXOPT\,
   Gurobi\) to estimate frequency matrices and infer high\-likelihood trees.



.. conda:package:: sapling

   |downloads_sapling| |docker_sapling|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends fastppm: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends tqdm: 
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

      mamba install sapling

   and update with::

      mamba update sapling

  To create a new environment, run::

      mamba create --name myenvname sapling

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sapling:<tag>

   (see `sapling/tags`_ for valid values for ``<tag>``)


.. |downloads_sapling| image:: https://img.shields.io/conda/dn/bioconda/sapling.svg?style=flat
   :target: https://anaconda.org/bioconda/sapling
   :alt:   (downloads)
.. |docker_sapling| image:: https://quay.io/repository/biocontainers/sapling/status
   :target: https://quay.io/repository/biocontainers/sapling
.. _`sapling/tags`: https://quay.io/repository/biocontainers/sapling?tab=tags


.. raw:: html

    <script>
        var package = "sapling";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sapling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sapling/README.html
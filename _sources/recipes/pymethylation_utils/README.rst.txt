:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymethylation_utils'
.. highlight: bash

pymethylation_utils
===================

.. conda:recipe:: pymethylation_utils
   :replaces_section_title:
   :noindex:

   Python wrapper for the methylation\_utils Rust binary

   :homepage: https://github.com/SebastianDall/pymethylation_utils
   :license: MIT
   :recipe: /`pymethylation_utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymethylation_utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymethylation_utils/meta.yaml>`_

   


.. conda:package:: pymethylation_utils

   |downloads_pymethylation_utils| |docker_pymethylation_utils|

   :versions:
      
      

      ``0.4.1-0``

      

   
   :depends python: 
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

      mamba install pymethylation_utils

   and update with::

      mamba update pymethylation_utils

  To create a new environment, run::

      mamba create --name myenvname pymethylation_utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pymethylation_utils:<tag>

   (see `pymethylation_utils/tags`_ for valid values for ``<tag>``)


.. |downloads_pymethylation_utils| image:: https://img.shields.io/conda/dn/bioconda/pymethylation_utils.svg?style=flat
   :target: https://anaconda.org/bioconda/pymethylation_utils
   :alt:   (downloads)
.. |docker_pymethylation_utils| image:: https://quay.io/repository/biocontainers/pymethylation_utils/status
   :target: https://quay.io/repository/biocontainers/pymethylation_utils
.. _`pymethylation_utils/tags`: https://quay.io/repository/biocontainers/pymethylation_utils?tab=tags


.. raw:: html

    <script>
        var package = "pymethylation_utils";
        var versions = ["0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymethylation_utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymethylation_utils/README.html
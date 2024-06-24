:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pcst-fast'
.. highlight: bash

pcst-fast
=========

.. conda:recipe:: pcst-fast
   :replaces_section_title:
   :noindex:

   A fast implementation of the Goemans\-Williamson scheme for the PCST \(prize\-collecting Steiner tree\/forest\) problem.

   :homepage: https://github.com/fraenkel-lab/pcst_fast
   :license: MIT / MIT
   :recipe: /`pcst-fast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcst-fast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcst-fast/meta.yaml>`_

   


.. conda:package:: pcst-fast

   |downloads_pcst-fast| |docker_pcst-fast|

   :versions:
      
      

      ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7.1-1``,  ``1.0.7.1-0``,  ``1.0.7-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends pybind11: ``>=2.4``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install pcst-fast

   and update with::

      mamba update pcst-fast

  To create a new environment, run::

      mamba create --name myenvname pcst-fast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pcst-fast:<tag>

   (see `pcst-fast/tags`_ for valid values for ``<tag>``)


.. |downloads_pcst-fast| image:: https://img.shields.io/conda/dn/bioconda/pcst-fast.svg?style=flat
   :target: https://anaconda.org/bioconda/pcst-fast
   :alt:   (downloads)
.. |docker_pcst-fast| image:: https://quay.io/repository/biocontainers/pcst-fast/status
   :target: https://quay.io/repository/biocontainers/pcst-fast
.. _`pcst-fast/tags`: https://quay.io/repository/biocontainers/pcst-fast?tab=tags


.. raw:: html

    <script>
        var package = "pcst-fast";
        var versions = ["1.0.10","1.0.10","1.0.8","1.0.8","1.0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pcst-fast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pcst-fast/README.html